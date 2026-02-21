"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { GameState, INITIAL_GAME_STATE, SAVE_KEY, Choice } from "@/data/types";
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

  const startNewGame = useCallback((playerName: string) => {
    const state: GameState = {
      ...INITIAL_GAME_STATE,
      playerName,
    };
    setGameState(state);
    saveToDisk(state);
    setLastChoice(null);
    setShowExplanation(false);
  }, []);

  const hasSave = useCallback((): boolean => {
    return loadSave() !== null;
  }, []);

  const loadGame = useCallback(() => {
    const saved = loadSave();
    if (saved) {
      setGameState(saved);
      setLastChoice(null);
      setShowExplanation(false);
    }
  }, []);

  const makeChoice = useCallback((choice: Choice) => {
    setLastChoice(choice);
    setShowExplanation(true);
  }, []);

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
      newState.hp = newState.maxHp;
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
    };
    setGameState(newState);
    saveToDisk(newState);
    return true;
  }, [gameState]);

  const hasNextChapter = useMemo(() => {
    if (!gameState) return false;
    return !!chapters[gameState.currentChapter + 1];
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
    startNewGame,
    hasSave,
    loadGame,
    makeChoice,
    proceedAfterChoice,
    advanceScene,
    startNextChapter,
    deleteSave,
  };
}
