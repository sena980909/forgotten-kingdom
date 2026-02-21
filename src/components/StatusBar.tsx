"use client";

import { GameState } from "@/data/types";

interface StatusBarProps {
  gameState: GameState;
  chapterTitle?: string;
}

export default function StatusBar({ gameState, chapterTitle }: StatusBarProps) {
  const hpPercent = (gameState.hp / gameState.maxHp) * 100;
  const hpColor =
    hpPercent > 60
      ? "bg-emerald-500"
      : hpPercent > 30
        ? "bg-yellow-500"
        : "bg-red-500";

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 px-4 sm:px-6 py-2 sm:py-3 bg-zinc-900/80 border-b border-amber-900/30 text-sm">
      <span className="text-amber-400 font-bold">{gameState.playerName}</span>
      <span className="text-zinc-500">Lv.{gameState.level}</span>

      {/* HP Bar */}
      <div className="flex items-center gap-2">
        <span className="text-red-400 text-xs">HP</span>
        <div className="w-20 sm:w-24 h-2 bg-zinc-700 rounded-full overflow-hidden">
          <div
            className={`h-full ${hpColor} transition-all duration-500`}
            style={{ width: `${hpPercent}%` }}
          />
        </div>
        <span className="text-zinc-400 text-xs">
          {gameState.hp}/{gameState.maxHp}
        </span>
      </div>

      {/* Knowledge */}
      <div className="flex items-center gap-1">
        <span className="text-blue-400 text-xs">지식</span>
        <span className="text-blue-300 font-mono">{gameState.knowledge}</span>
      </div>

      {chapterTitle && (
        <span className="sm:ml-auto text-zinc-500 text-xs truncate max-w-[200px] sm:max-w-none">{chapterTitle}</span>
      )}
    </div>
  );
}
