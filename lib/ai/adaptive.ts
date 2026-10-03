export interface TraineeProfile {
  quizScore: number;
  learningStyle: 'video' | 'text' | 'audio';
  language: 'en' | 'hi' | 'mr';
  network: 'fast' | 'slow';
  device: 'smart' | 'basic';
  lowDataMode: boolean;
  currentModule?: number;
  skills?: Record<string, { current: number; target: number }>;
}

export interface Lesson {
  id: string;
  module: number;
  title: Record<string, string>;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  standardDuration: string;
  topics: string[];
  formats: Record<string, string>;
}

export interface AdaptiveEvaluation {
  profile: TraineeProfile;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  pace: 'Slow' | 'Normal' | 'Fast';
  contentFormat: string;
  formatLabel: string;
  dataSavedMb: number;
  weakestSkill: {
    key: string;
    name: Record<string, string>;
    current: number;
    target: number;
    gap: number;
  };
  recommendedLessons: Lesson[];
  explanations: Record<string, string[]>;
  milestones: Array<{
    step: number;
    title: Record<string, string>;
    desc: Record<string, string>;
    status: string;
    targetSkill: string;
  }>;
}

// Re-export JS engine
import * as AdaptiveEngine from './adaptive.js';
export default AdaptiveEngine;
