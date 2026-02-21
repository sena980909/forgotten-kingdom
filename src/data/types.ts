export const SAVE_KEY = "forgotten-kingdom-save";

export interface Choice {
  id: string;
  text: string;
  nextSceneId: string;
  isCorrect?: boolean;
  explanation?: string;
  effect?: {
    knowledge?: number;
    hp?: number;
  };
}

export interface Scene {
  id: string;
  text: string;
  speaker?: string;
  choices?: Choice[];
  nextSceneId?: string; // auto-advance (no choices)
  isEnding?: boolean;
  springConcept?: string; // Spring 개념 요약 (학습 포인트)
}

export interface Chapter {
  id: number;
  title: string;
  subtitle: string;
  springTopic: string;
  scenes: Record<string, Scene>;
  firstSceneId: string;
}

export interface GameState {
  playerName: string;
  currentChapter: number;
  currentSceneId: string;
  hp: number;
  maxHp: number;
  knowledge: number;
  level: number;
  completedChapters: number[];
  learnedConcepts: string[];
  choiceHistory: { sceneId: string; choiceId: string }[];
}

export const INITIAL_GAME_STATE: Omit<GameState, "playerName"> = {
  currentChapter: 1,
  currentSceneId: "intro",
  hp: 100,
  maxHp: 100,
  knowledge: 0,
  level: 1,
  completedChapters: [],
  learnedConcepts: [],
  choiceHistory: [],
};
