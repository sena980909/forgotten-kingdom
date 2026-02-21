"use client";

import { useState, useEffect } from "react";

interface TitleScreenProps {
  onStartNew: (name: string) => void;
  onContinue: () => void;
  hasSave: boolean;
}

export default function TitleScreen({
  onStartNew,
  onContinue,
  hasSave,
}: TitleScreenProps) {
  const [showNameInput, setShowNameInput] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleStart = () => {
    if (playerName.trim().length > 0) {
      onStartNew(playerName.trim());
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4">
      <div
        className={`text-center transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}
      >
        {/* Title */}
        <div className="mb-2 text-zinc-600 text-sm tracking-[0.3em] uppercase">
          Spring Backend RPG
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-amber-400 mb-3 tracking-tight">
          잊혀진 왕국
        </h1>
        <p className="text-zinc-500 text-lg mb-12">코드의 유산</p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-16 h-px bg-amber-900/50" />
          <div className="w-2 h-2 rotate-45 bg-amber-700/50" />
          <div className="w-16 h-px bg-amber-900/50" />
        </div>

        {!showNameInput ? (
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => setShowNameInput(true)}
              className="w-full max-w-64 py-3 bg-amber-700 hover:bg-amber-600 text-white rounded-lg font-bold text-lg transition-colors"
            >
              새 게임
            </button>

            {hasSave && (
              <button
                onClick={onContinue}
                className="w-full max-w-64 py-3 border border-zinc-700 hover:border-amber-700 text-zinc-300 hover:text-amber-400 rounded-lg font-bold transition-colors"
              >
                이어하기
              </button>
            )}

            <p className="text-zinc-600 text-xs mt-8 max-w-sm">
              Spring 백엔드 개념을 스토리와 함께 배우는 선택지 RPG
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <p className="text-zinc-400 mb-2">모험가의 이름을 입력하세요</p>
            <input
              type="text"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleStart()}
              placeholder="이름"
              maxLength={12}
              autoFocus
              className="w-full max-w-64 px-4 py-3 bg-zinc-900 border border-zinc-700 focus:border-amber-600 rounded-lg text-center text-zinc-200 text-lg outline-none transition-colors"
            />
            <div className="flex gap-3">
              <button
                onClick={() => setShowNameInput(false)}
                className="px-6 py-3 border border-zinc-700 text-zinc-400 rounded-lg hover:border-zinc-500 transition-colors"
              >
                뒤로
              </button>
              <button
                onClick={handleStart}
                disabled={playerName.trim().length === 0}
                className="px-6 py-3 bg-amber-700 hover:bg-amber-600 disabled:opacity-30 disabled:cursor-not-allowed text-white rounded-lg font-bold transition-colors"
              >
                모험 시작
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
