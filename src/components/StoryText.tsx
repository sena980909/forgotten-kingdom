"use client";

import { useState, useEffect } from "react";

interface StoryTextProps {
  text: string;
  speaker?: string;
  hasChoices?: boolean;
  onComplete: () => void;
  onTypingComplete?: () => void;
}

export default function StoryText({
  text,
  speaker,
  hasChoices,
  onComplete,
  onTypingComplete,
}: StoryTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        onTypingComplete?.();
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const handleClick = () => {
    if (!isComplete) {
      // Skip typing animation
      setDisplayedText(text);
      setIsComplete(true);
      onTypingComplete?.();
    } else if (!hasChoices) {
      // Only advance if there are no choices (auto-advance scenes)
      onComplete();
    }
  };

  return (
    <div
      className={`select-none ${!hasChoices || !isComplete ? "cursor-pointer" : ""}`}
      onClick={handleClick}
    >
      {speaker && (
        <div className="text-amber-400 font-bold mb-2 text-base sm:text-lg">{speaker}</div>
      )}

      <div className="text-zinc-200 leading-relaxed whitespace-pre-line text-base">
        {displayedText}
      </div>

      {isComplete && !hasChoices && (
        <div className="mt-4 text-zinc-500 text-sm animate-pulse">
          클릭하여 계속...
        </div>
      )}
    </div>
  );
}
