export interface Candidate {
  id: string;
  name: string;
  nameHi?: string;
  nameMr?: string;
  role: string;
  roleHi?: string;
  roleMr?: string;
  skills: string[];
  certificateId: string;
  certificateName: string;
  certificateValid: boolean;
  assessmentScore: number;
  attendancePct: number;
  expectedSalary?: string;
  avatarInitials?: string;
}

export interface JobRole {
  id: string;
  title: Record<string, string>;
  company: string;
  salary: string;
  requiredSkills: string[];
  minScore: number;
  minAttendance: number;
  targetCertificate: string;
}

export interface MatchEvidence {
  totalMatchPct: number;
  breakdown: {
    skills: { score: number; max: number; pct: number; matchedList: string[]; requiredList: string[] };
    certificate: { score: number; max: number; pct: number; id: string; name: string; status: string; verifyUrl: string };
    assessment: { score: number; max: number; actualPct: number };
    attendance: { score: number; max: number; actualPct: number };
  };
  evidenceText: Record<string, string>;
}

import * as CareerMatchingEngine from './matching.js';
export default CareerMatchingEngine;
