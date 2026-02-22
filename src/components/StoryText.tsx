"use client";

import { useState, useEffect, useRef, useCallback } from "react";

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
  const onTypingCompleteRef = useRef(onTypingComplete);
  const onCompleteRef = useRef(onComplete);

  onTypingCompleteRef.current = onTypingComplete;
  onCompleteRef.current = onComplete;

  const skipTyping = useCallback(() => {
    setDisplayedText(text);
    setIsComplete(true);
    onTypingCompleteRef.current?.();
  }, [text]);

  // Typing animation
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
        onTypingCompleteRef.current?.();
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  // Keyboard support: Space/Enter to skip typing or advance scene
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        if (!isComplete) {
          skipTyping();
        } else if (!hasChoices) {
          onCompleteRef.current();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isComplete, hasChoices, skipTyping]);

  const handleClick = () => {
    if (!isComplete) {
      skipTyping();
    } else if (!hasChoices) {
      onComplete();
    }
  };

  return (
    <div
      className={`select-none ${!hasChoices || !isComplete ? "cursor-pointer" : ""}`}
      onClick={handleClick}
      role="region"
      aria-live="polite"
    >
      {speaker && (
        <div className="text-amber-400 font-bold mb-2 text-base sm:text-lg">{speaker}</div>
      )}

      <div className="text-zinc-200 leading-relaxed whitespace-pre-line text-base">
        {displayedText}
      </div>

      {isComplete && !hasChoices && (
        <div className="mt-4 text-zinc-500 text-sm animate-pulse">
          클릭하거나 Enter를 눌러 계속...
        </div>
      )}
    </div>
  );
}
