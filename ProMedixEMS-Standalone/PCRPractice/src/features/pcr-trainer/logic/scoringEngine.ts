import { FeedbackContext, ScoringResult } from '../types';
import { pcrTrainerConfig } from '../pcrTrainer.config';

const wordTokens = (text: string) => text.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);

const keywordPresent = (text: string, keywords: string[]) => {
  const tokens = wordTokens(text);
  return keywords.some((keyword) => tokens.includes(keyword.toLowerCase()));
};

const sectionLength = (value: string) => (value?.trim().length ?? 0);

const sceneKeywords = ['scene', 'safe', 'ppe', 'consent', 'hazard', 'bystander'];
const assessmentKeywords = ['airway', 'breathing', 'circulation', 'vitals', 'gcs'];
const historyKeywords = ['sample', 'opqrst', 'medications', 'allergies', 'history'];
const decisionKeywords = ['because', 'due to', 'therefore', 'consulted', 'per protocol'];
const transportKeywords = ['transport', 'destination', 'med control', 'care', 'handoff'];

const buildRuleResults = ({ scenario, draft }: FeedbackContext) => {
  const combined = Object.values(draft.sections).join(' ').toLowerCase();
  const ruleWeights = pcrTrainerConfig.scoring.ruleWeights;

  const tokensFromChiefComplaint = wordTokens(scenario.chiefComplaint).filter((word) => word.length > 3);

  const rules = [
    {
      id: 'chiefComplaint',
      label: 'Chief complaint documented',
      passed: tokensFromChiefComplaint.some((token) => combined.includes(token)),
      weight: ruleWeights.chiefComplaint,
      details: 'Ensure the patient\'s stated complaint appears early in the narrative.'
    },
    {
      id: 'history',
      label: 'History includes SAMPLE/OPQRST elements',
      passed: keywordPresent(draft.sections.history ?? '', historyKeywords),
      weight: ruleWeights.history,
      details: 'History should reference SAMPLE or OPQRST data points.'
    },
    {
      id: 'assessment',
      label: 'Objective assessment findings recorded',
      passed: keywordPresent(draft.sections.assessment ?? '', assessmentKeywords) && sectionLength(draft.sections.assessment ?? '') > 120,
      weight: ruleWeights.assessment,
      details: 'Include ABCs, vital trends, and pertinent positives/negatives.'
    },
    {
      id: 'interventions',
      label: 'Interventions tied to patient response',
      passed: sectionLength(draft.sections.interventions ?? '') > 80 && (draft.sections.response ?? '').includes('response'),
      weight: ruleWeights.interventions,
      details: 'Pair each treatment with an observed response or no-change statement.'
    },
    {
      id: 'decisionMaking',
      label: 'Medical decision-making explained',
      passed: keywordPresent(draft.sections.response ?? '', decisionKeywords),
      weight: ruleWeights.decisionMaking,
      details: 'Explain why interventions were chosen and how transport decisions were made.'
    },
    {
      id: 'sceneSafety',
      label: 'Scene safety + consent addressed',
      passed: keywordPresent(`${draft.sections.dispatch} ${draft.sections.scene}`, sceneKeywords),
      weight: ruleWeights.sceneSafety,
      details: 'Document PPE usage, hazards, and consent discussions.'
    },
    {
      id: 'transport',
      label: 'Transport & transfer documented',
      passed: keywordPresent(`${draft.sections.transport} ${draft.sections.transfer}`, transportKeywords) && sectionLength(draft.sections.transfer ?? '') > 40,
      weight: ruleWeights.transport,
      details: 'Capture destination, condition en route, and receiving clinician.'
    }
  ];

  return rules;
};

export const scoreNarrative = (context: FeedbackContext): ScoringResult => {
  const rules = buildRuleResults(context);
  const totalWeight = Object.values(pcrTrainerConfig.scoring.ruleWeights).reduce((sum, weight) => sum + weight, 0);
  const achieved = rules.reduce((sum, rule) => sum + (rule.passed ? rule.weight : 0), 0);
  const score = Math.round((achieved / totalWeight) * pcrTrainerConfig.scoring.perfectScore);

  const missingElements = rules.filter((rule) => !rule.passed).map((rule) => rule.label);
  const suggestions = rules
    .filter((rule) => !rule.passed)
    .map((rule) => rule.details);

  const level = score >= 90 ? 'strong' : score >= 75 ? 'competent' : score >= 60 ? 'developing' : 'needs-work';

  return {
    score,
    level,
    missingElements,
    suggestions,
    rules: rules.map(({ id, label, passed, details }) => ({ id, label, passed, details })),
  };
};
