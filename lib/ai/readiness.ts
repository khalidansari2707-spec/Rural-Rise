export interface ChecklistItem {
  id: string;
  title: Record<string, string>;
  desc: Record<string, string>;
  weight: number;
  score: number;
  thresholds: { green: number; saffron: number };
  status: 'green' | 'saffron' | 'red';
  icon: string;
  metric: string;
}

export interface ActionCard {
  id: string;
  category: string;
  title: Record<string, string>;
  impactDescription: string;
  impactScoreBoost: number;
  affectedItem: string;
  status: 'pending' | 'completed';
}

export interface ReadinessState {
  overallScore: number;
  overallStatus: 'green' | 'saffron' | 'red';
  checklistItems: ChecklistItem[];
  actionCards: ActionCard[];
  districts: Array<{ name: string; nameHi: string; nameMr: string; score: number; status: string }>;
  outcomes: {
    learningGainPct: number;
    skillGapClosedPct: number;
    placementRatePct: number;
  };
}

import * as AIReadinessEngine from './readiness.js';
export default AIReadinessEngine;
