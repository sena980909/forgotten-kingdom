"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { useGameState } from "@/hooks/useGameState";
import StatusBar from "./StatusBar";
import StoryText from "./StoryText";
import ChoiceList from "./ChoiceList";
import ExplanationModal from "./ExplanationModal";

const CHAPTER_BG: Record<number, string> = {
  1: "/ch1.jpg",
  2: "/ch2.jpg",
  3: "/ch3.jpg",
  4: "/ch4.jpg",
  5: "/ch5.jpg",
};

interface GameScreenProps {
  onReturnToTitle: () => void;
}

export default function GameScreen({ onReturnToTitle }: GameScreenProps) {
  const {
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
  } = useGameState();

  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleTypingComplete = useCallback(() => {
    setIsTypingComplete(true);
  }, []);

  const handleStoryComplete = useCallback(() => {
    if (!currentScene?.choices && currentScene?.nextSceneId) {
      setIsTypingComplete(false);
      advanceScene();
    }
  }, [currentScene, advanceScene]);

  // Auto-dismiss level up notification after 3 seconds
  useEffect(() => {
    if (!levelUpInfo) return;
    const timer = setTimeout(dismissLevelUp, 3000);
    return () => clearTimeout(timer);
  }, [levelUpInfo, dismissLevelUp]);

  const bgImage = useMemo(() => {
    if (!gameState) return undefined;
    return CHAPTER_BG[gameState.currentChapter];
  }, [gameState?.currentChapter]);

  if (!gameState) return null;

  const scene = currentScene;
  const chapter = currentChapter;

  if (!scene || !chapter) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-zinc-400 mb-4">
            아직 준비되지 않은 챕터입니다.
          </p>
          <button
            onClick={onReturnToTitle}
            className="px-6 py-2 bg-amber-700 hover:bg-amber-600 text-white rounded-lg"
          >
            타이틀로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col relative">
      {/* Chapter Background Image */}
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
      )}

      {/* Status Bar */}
      <div className="relative z-10 flex flex-col flex-1">
      <StatusBar
        gameState={gameState}
        chapterTitle={`Ch.${chapter.id} ${chapter.title} - ${chapter.subtitle}`}
      />

      {/* Main Story Area */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {/* Spring Concept Tag */}
          {scene.springConcept && (
            <div className="mb-4 px-3 py-1.5 bg-blue-900/30 border border-blue-800/40 rounded-lg inline-block">
              <span className="text-blue-400 text-xs font-mono">
                Spring: {scene.springConcept}
              </span>
            </div>
          )}

          {/* Story Text Box */}
          <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-xl p-4 sm:p-8 shadow-lg min-h-[200px]">
            {scene.isEnding ? (
              /* ===== Chapter Ending Screen ===== */
              <div>
                <div className="text-zinc-200 leading-relaxed whitespace-pre-line text-base">
                  {scene.text}
                </div>

                {/* Learned Concepts Summary */}
                {gameState.learnedConcepts.length > 0 && (
                  <div className="mt-6 p-4 bg-emerald-900/20 border border-emerald-800/30 rounded-lg">
                    <div className="text-emerald-400 font-bold text-sm mb-2">
                      습득한 개념 ({gameState.learnedConcepts.length}개)
                    </div>
                    <ul className="text-emerald-300 text-sm space-y-1">
                      {gameState.learnedConcepts.map((concept) => (
                        <li key={concept}>- {concept}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Stats Summary */}
                <div className="mt-4 p-4 bg-zinc-800/50 border border-zinc-700/50 rounded-lg">
                  <div className="text-zinc-400 text-sm grid grid-cols-3 gap-2 sm:gap-4 text-center">
                    <div>
                      <div className="text-amber-400 font-bold text-lg">{gameState.level}</div>
                      <div>레벨</div>
                    </div>
                    <div>
                      <div className="text-blue-400 font-bold text-lg">{gameState.knowledge}</div>
                      <div>지식</div>
                    </div>
                    <div>
                      <div className="text-red-400 font-bold text-lg">{gameState.hp}/{gameState.maxHp}</div>
                      <div>HP</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col gap-3">
                  {hasNextChapter && (
                    <button
                      onClick={() => {
                        setIsTypingComplete(false);
                        startNextChapter();
                      }}
                      className="w-full py-3 bg-amber-700 hover:bg-amber-600 text-white rounded-lg font-bold transition-colors"
                    >
                      다음 챕터로
                    </button>
                  )}
                  <button
                    onClick={onReturnToTitle}
                    className={`w-full py-3 rounded-lg font-bold transition-colors ${
                      hasNextChapter
                        ? "border border-zinc-700 hover:border-amber-700 text-zinc-400 hover:text-amber-400"
                        : "bg-amber-700 hover:bg-amber-600 text-white"
                    }`}
                  >
                    타이틀로 돌아가기
                  </button>
                </div>
              </div>
            ) : (
              /* ===== Normal Story Scene ===== */
              <>
                <StoryText
                  key={scene.id}
                  text={scene.text}
                  speaker={scene.speaker}
                  hasChoices={!!scene.choices}
                  onComplete={handleStoryComplete}
                  onTypingComplete={handleTypingComplete}
                />

                {/* Choices - only show after typing is complete */}
                {scene.choices && isTypingComplete && !showExplanation && (
                  <ChoiceList choices={scene.choices} onChoose={makeChoice} />
                )}
              </>
            )}
          </div>
        </div>
      </div>

      </div>

      {/* Explanation Modal */}
      {showExplanation && lastChoice && (
        <ExplanationModal
          choice={lastChoice}
          onContinue={() => {
            setIsTypingComplete(false);
            proceedAfterChoice();
          }}
        />
      )}

      {/* Game Over Overlay */}
      {isGameOver && !showExplanation && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center">
            <div className="text-6xl mb-4">💀</div>
            <h2 className="text-3xl font-bold text-red-500 mb-2">Game Over</h2>
            <p className="text-zinc-400 mb-2">HP가 0이 되었습니다.</p>
            <p className="text-zinc-500 text-sm mb-8">
              틀린 답의 대가로 모든 체력을 잃었습니다...<br />
              하지만 포기하지 마세요. 실패는 최고의 스승입니다.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setIsTypingComplete(false);
                  retryChapter();
                }}
                className="w-full py-3 bg-amber-700 hover:bg-amber-600 text-white rounded-lg font-bold transition-colors"
              >
                챕터 처음부터 다시 도전
              </button>
              <button
                onClick={onReturnToTitle}
                className="w-full py-3 border border-zinc-700 hover:border-amber-700 text-zinc-400 hover:text-amber-400 rounded-lg font-bold transition-colors"
              >
                타이틀로 돌아가기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Level Up Notification */}
      {levelUpInfo && (
        <div
          className="fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-bounce cursor-pointer"
          onClick={dismissLevelUp}
        >
          <div className="bg-amber-900/90 border border-amber-600 rounded-xl px-6 py-3 shadow-lg shadow-amber-900/50 text-center">
            <div className="text-amber-400 font-bold text-lg">Level Up!</div>
            <div className="text-amber-300 text-sm">
              Lv.{levelUpInfo.newLevel} 달성! HP가 {levelUpInfo.newMaxHp}으로 회복되었습니다.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
