"use client";

import { useEffect, useMemo } from "react";
import { Choice } from "@/data/types";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface ChoiceListProps {
  choices: Choice[];
  onChoose: (choice: Choice) => void;
  disabled?: boolean;
}

export default function ChoiceList({
  choices,
  onChoose,
  disabled,
}: ChoiceListProps) {
  // Shuffle choices so the correct answer isn't always first
  // Use a stable key derived from choice IDs to avoid reshuffling on parent re-render
  const choiceKey = choices.map((c) => c.id).join(",");
  const shuffledChoices = useMemo(
    () => shuffleArray(choices),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [choiceKey]
  );

  // Keyboard support: press 1, 2, 3 to select
  useEffect(() => {
    if (disabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const num = parseInt(e.key);
      if (num >= 1 && num <= shuffledChoices.length) {
        onChoose(shuffledChoices[num - 1]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shuffledChoices, onChoose, disabled]);

  return (
    <div className="flex flex-col gap-3 mt-6 animate-fade-in">
      <div className="text-zinc-500 text-sm mb-1">
        선택하세요<span className="hidden sm:inline"> (키보드 1~{choices.length})</span>:
      </div>
      {shuffledChoices.map((choice, index) => (
        <button
          key={choice.id}
          onClick={() => !disabled && onChoose(choice)}
          disabled={disabled}
          className={`text-left px-5 py-4 rounded-lg border transition-all duration-200 break-words overflow-hidden ${
            disabled
              ? "opacity-50 cursor-not-allowed border-zinc-700 bg-zinc-800/50"
              : "border-amber-900/40 bg-zinc-800/60 hover:bg-amber-900/20 hover:border-amber-500/60 cursor-pointer active:scale-[0.98]"
          }`}
        >
          <span className="text-amber-500 font-bold mr-3">
            {index + 1}.
          </span>
          <span className="text-zinc-200">{choice.text}</span>
        </button>
      ))}
    </div>
  );
}
