"use client";

import { useState, useEffect, useCallback } from "react";
import { INITIAL_GAME_STATE, SAVE_KEY, GameState } from "@/data/types";
import TitleScreen from "@/components/TitleScreen";
import GameScreen from "@/components/GameScreen";

type Screen = "title" | "game";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("title");
  const [hasSave, setHasSave] = useState(false);

  useEffect(() => {
    setHasSave(localStorage.getItem(SAVE_KEY) !== null);
  }, []);

  const handleStartNew = useCallback((name: string) => {
    const initialState: GameState = {
      ...INITIAL_GAME_STATE,
      playerName: name,
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(initialState));
    setScreen("game");
  }, []);

  const handleContinue = useCallback(() => {
    setScreen("game");
  }, []);

  const handleReturnToTitle = useCallback(() => {
    setHasSave(localStorage.getItem(SAVE_KEY) !== null);
    setScreen("title");
  }, []);

  if (screen === "game") {
    return <GameScreen onReturnToTitle={handleReturnToTitle} />;
  }

  return (
    <TitleScreen
      onStartNew={handleStartNew}
      onContinue={handleContinue}
      hasSave={hasSave}
    />
  );
}
