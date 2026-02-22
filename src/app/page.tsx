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

    const handlePopState = () => {
      setHasSave(localStorage.getItem(SAVE_KEY) !== null);
      setScreen("title");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleStartNew = useCallback((name: string) => {
    const initialState: GameState = {
      ...INITIAL_GAME_STATE,
      playerName: name,
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(initialState));
    window.history.pushState({ screen: "game" }, "");
    setScreen("game");
  }, []);

  const handleContinue = useCallback(() => {
    window.history.pushState({ screen: "game" }, "");
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
