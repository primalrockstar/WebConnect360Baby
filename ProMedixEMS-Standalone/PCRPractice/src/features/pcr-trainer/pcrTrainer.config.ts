export const pcrTrainerConfig = {
  autosaveIntervalMs: 5000,
  storageKey: 'pcr-trainer-drafts',
  scoring: {
    perfectScore: 100,
    ruleWeights: {
      chiefComplaint: 15,
      history: 15,
      assessment: 15,
      interventions: 20,
      decisionMaking: 15,
      sceneSafety: 10,
      transport: 10
    }
  },
  phiKeywords: ['name:', 'dob', 'ssn', 'address', 'mrn', 'social security'],
  privacyBanner:
    'Training PCR — Do NOT enter real patient identifiers. Narratives are stored locally on this device only.'
} as const;
