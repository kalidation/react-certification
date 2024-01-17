export interface IDifficulty {
  id: string;
  name: EDifficulty;
  value: EDifficultyValue;
}

export enum EDifficulty {
  EASY = "Easy",
  MEDUIM = "Medium",
  HARD = "Hard",
}

export enum EDifficultyValue {
    EASY = "easy",
    MEDUIM = "medium",
    HARD = "hard",
  }
