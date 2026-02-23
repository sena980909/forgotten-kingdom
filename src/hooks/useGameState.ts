"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { GameState, SAVE_KEY, Choice } from "@/data/types";
import chapters from "@/data/chapters";

function loadSave(): GameState | null {
  if (typeof window === "undefined") return null;
  const saved = localStorage.getItem(SAVE_KEY);
  if (!saved) return null;
  try {
    return JSON.parse(saved);
  } catch {
    return null;
  }
}

function saveToDisk(state: GameState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

export function useGameState() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [lastChoice, setLastChoice] = useState<Choice | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [levelUpInfo, setLevelUpInfo] = useState<{ newLevel: number; newMaxHp: number } | null>(null);

  useEffect(() => {
    const saved = loadSave();
    if (saved) setGameState(saved);
  }, []);

  const currentScene = useMemo(() => {
    if (!gameState) return null;
    const chapter = chapters[gameState.currentChapter];
    if (!chapter) return null;
    return chapter.scenes[gameState.currentSceneId] || null;
  }, [gameState]);

  const currentChapter = useMemo(() => {
    if (!gameState) return null;
    return chapters[gameState.currentChapter] || null;
  }, [gameState]);


  const makeChoice = useCallback((choice: Choice) => {
    if (showExplanation) return;
    setLastChoice(choice);
    setShowExplanation(true);
  }, [showExplanation]);

  const proceedAfterChoice = useCallback(() => {
    if (!gameState || !lastChoice) return;

    // Capture the current scene's springConcept BEFORE changing sceneId
    const choiceScene = chapters[gameState.currentChapter]?.scenes[gameState.currentSceneId];

    const newState: GameState = {
      ...gameState,
      currentSceneId: lastChoice.nextSceneId,
      hp: Math.max(
        0,
        Math.min(
          gameState.maxHp,
          gameState.hp + (lastChoice.effect?.hp || 0)
        )
      ),
      knowledge: gameState.knowledge + (lastChoice.effect?.knowledge || 0),
      choiceHistory: [
        ...gameState.choiceHistory,
        { sceneId: gameState.currentSceneId, choiceId: lastChoice.id },
      ],
    };

    // Level up every 30 knowledge points
    const newLevel = Math.floor(newState.knowledge / 30) + 1;
    if (newLevel > newState.level) {
      newState.level = newLevel;
      newState.maxHp = 100 + (newLevel - 1) * 10;
      newState.hp = Math.min(newState.hp + 30, newState.maxHp);
      setLevelUpInfo({ newLevel, newMaxHp: newState.maxHp });
    }

    // Learn concept from the scene where the choice was made
    if (choiceScene?.springConcept && lastChoice.isCorrect) {
      if (!newState.learnedConcepts.includes(choiceScene.springConcept)) {
        newState.learnedConcepts = [
          ...newState.learnedConcepts,
          choiceScene.springConcept,
        ];
      }
    }

    setGameState(newState);
    saveToDisk(newState);
    setLastChoice(null);
    setShowExplanation(false);
  }, [gameState, lastChoice]);

  const advanceScene = useCallback(() => {
    if (!gameState || !currentScene?.nextSceneId) return;

    const nextScene =
      chapters[gameState.currentChapter]?.scenes[currentScene.nextSceneId];

    const newState: GameState = {
      ...gameState,
      currentSceneId: currentScene.nextSceneId,
    };

    // Mark chapter complete when reaching ending
    if (nextScene?.isEnding) {
      newState.completedChapters = [
        ...new Set([...gameState.completedChapters, gameState.currentChapter]),
      ];
    }

    setGameState(newState);
    saveToDisk(newState);
  }, [gameState, currentScene]);

  const startNextChapter = useCallback(() => {
    if (!gameState) return;
    const nextChapterId = gameState.currentChapter + 1;

    if (!chapters[nextChapterId]) return null;

    const newState: GameState = {
      ...gameState,
      currentChapter: nextChapterId,
      currentSceneId: chapters[nextChapterId].firstSceneId,
      chapterStartSnapshot: {
        knowledge: gameState.knowledge,
        level: gameState.level,
        maxHp: gameState.maxHp,
        learnedConcepts: [...gameState.learnedConcepts],
      },
    };
    setGameState(newState);
    saveToDisk(newState);
  }, [gameState]);

  const hasNextChapter = useMemo(() => {
    if (!gameState) return false;
    return !!chapters[gameState.currentChapter + 1];
  }, [gameState]);

  const retryChapter = useCallback(() => {
    if (!gameState) return;
    const chapter = chapters[gameState.currentChapter];
    if (!chapter) return;
    const snapshot = gameState.chapterStartSnapshot;
    const baseKnowledge = snapshot?.knowledge ?? 0;
    const baseLevel = snapshot?.level ?? 1;
    const baseMaxHp = snapshot?.maxHp ?? 100;
    const newState: GameState = {
      ...gameState,
      currentSceneId: chapter.firstSceneId,
      knowledge: baseKnowledge,
      level: baseLevel,
      maxHp: baseMaxHp,
      hp: baseMaxHp,
      learnedConcepts: snapshot?.learnedConcepts ?? [],
      choiceHistory: [],
    };
    setGameState(newState);
    saveToDisk(newState);
    setLastChoice(null);
    setShowExplanation(false);
  }, [gameState]);

  const dismissLevelUp = useCallback(() => {
    setLevelUpInfo(null);
  }, []);

  const isGameOver = useMemo(() => {
    return gameState !== null && gameState.hp <= 0;
  }, [gameState]);

  const deleteSave = useCallback(() => {
    if (typeof window === "undefined") return;
    localStorage.removeItem(SAVE_KEY);
    setGameState(null);
    setLastChoice(null);
    setShowExplanation(false);
  }, []);

  return {
    gameState,
    lastChoice,
    showExplanation,
    currentScene,
    currentChapter,
    hasNextChapter,
    isGameOver,
    levelUpInfo,
    makeChoice,
    proceedAfterChoice,
    advanceScene,
    startNextChapter,
    retryChapter,
    dismissLevelUp,
    deleteSave,
  };
}
