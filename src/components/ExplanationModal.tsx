"use client";

import { useEffect } from "react";
import { Choice } from "@/data/types";

interface ExplanationModalProps {
  choice: Choice;
  onContinue: () => void;
}

export default function ExplanationModal({
  choice,
  onContinue,
}: ExplanationModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        onContinue();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onContinue]);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 border border-zinc-700 rounded-xl max-w-lg w-full p-4 sm:p-6 shadow-2xl">
        {/* Result */}
        <div
          className={`text-center text-xl font-bold mb-4 ${
            choice.isCorrect ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {choice.isCorrect ? "정답!" : "오답!"}
        </div>

        {/* Effect */}
        <div className="flex justify-center gap-4 mb-4 text-sm">
          {choice.effect?.knowledge && choice.effect.knowledge > 0 && (
            <span className="text-blue-400">
              지식 +{choice.effect.knowledge}
            </span>
          )}
          {choice.effect?.hp && choice.effect.hp < 0 && (
            <span className="text-red-400">HP {choice.effect.hp}</span>
          )}
        </div>

        {/* Explanation */}
        {choice.explanation && (
          <div className="bg-zinc-800 rounded-lg p-4 mb-6 border border-zinc-700">
            <div className="text-amber-400 text-sm font-bold mb-2">
              해설
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              {choice.explanation}
            </p>
          </div>
        )}

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className="w-full py-3 bg-amber-700 hover:bg-amber-600 text-white rounded-lg font-bold transition-colors"
        >
          계속하기
        </button>
      </div>
    </div>
  );
}
