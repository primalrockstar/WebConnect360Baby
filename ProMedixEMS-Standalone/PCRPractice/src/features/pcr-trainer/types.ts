import type { ReactNode } from 'react';

export type ScenarioCategory = 'trauma' | 'medical' | 'airway' | 'ob-peds' | 'cardiac';
export type ScenarioDifficulty = 'basic' | 'aemt' | 'medic';

export interface PcrScenarioSummary {
  id: string;
  title: string;
  category: ScenarioCategory;
  difficulty: ScenarioDifficulty;
  durationMinutes: number;
  tags: string[];
}

export interface VitalSet {
  time: string;
  bloodPressure?: string;
  heartRate?: number;
  respiratoryRate?: number;
  temperature?: number;
  oxygenSaturation?: number;
  endTidalCO2?: number;
  bloodGlucose?: number;
  painScore?: number;
}

export interface ScenarioDetails extends PcrScenarioSummary {
  chiefComplaint: string;
  sceneDescription: string;
  patientHistory: string;
  assessmentFindings: string[];
  vitalSets: VitalSet[];
  interventions: string[];
  complications: string[];
  obstacles: string[];
  learningObjectives: string[];
  modelPcrId: string;
}

export interface ModelPcr {
  id: string;
  scenarioId: string;
  title: string;
  body: string;
}

export interface PcrSectionTemplate {
  id: string;
  title: string;
  placeholder: string;
  hint: string;
  reminder?: ReactNode;
}

export interface NarrativeDraft {
  scenarioId: string;
  updatedAt: number;
  sections: Record<string, string>;
}

export interface ScoringRuleResult {
  id: string;
  label: string;
  passed: boolean;
  details: string;
}

export interface ScoringResult {
  score: number;
  level: 'needs-work' | 'developing' | 'competent' | 'strong';
  missingElements: string[];
  suggestions: string[];
  rules: ScoringRuleResult[];
}

export interface FeedbackContext {
  scenario: ScenarioDetails;
  draft: NarrativeDraft;
}
