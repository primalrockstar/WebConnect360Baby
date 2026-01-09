import { PcrSectionTemplate } from '../types';

export const narrativeSections: PcrSectionTemplate[] = [
  {
    id: 'dispatch',
    title: 'Dispatch Information',
    placeholder: 'Unit dispatched priority 1 for... include time notified/en route/on scene.',
    hint: 'Capture times, responding crew, resource requests, and initial information from dispatch.'
  },
  {
    id: 'scene',
    title: 'Scene Description',
    placeholder: 'Describe environment, hazards, patient location, consent, PPE, and other agencies.',
    hint: 'Document scene safety decisions and how you gained access or mitigated hazards.'
  },
  {
    id: 'assessment',
    title: 'Patient Assessment',
    placeholder: 'General impression, airway/breathing/circulation, vitals, pertinent positives/negatives.',
    hint: 'Use objective language and chronologic order. Include OPQRST/SAMPLE findings when obtainable.'
  },
  {
    id: 'history',
    title: 'History',
    placeholder: 'SAMPLE, OPQRST, meds/allergies, events prior to EMS arrival.',
    hint: 'Quote the patient or historian directly when possible.'
  },
  {
    id: 'interventions',
    title: 'Interventions',
    placeholder: 'Document treatments with times, dosages, device settings, crew members, and patient response.',
    hint: 'Pair each intervention with a reassessment or response statement.'
  },
  {
    id: 'response',
    title: 'Response to Treatment',
    placeholder: 'Trend vitals, describe improvement or deterioration, note clinical decision-making.',
    hint: 'Tie each intervention to the observed effect, even if no change occurred.'
  },
  {
    id: 'transport',
    title: 'Transport',
    placeholder: 'Mode, destination, condition en route, consultations, and ongoing monitoring.',
    hint: 'Include changes during transport and how you prioritized hospital selection.'
  },
  {
    id: 'transfer',
    title: 'Transfer of Care',
    placeholder: 'Report given to..., questions answered, patient belongings, signatures, refusals.',
    hint: 'Document receiving clinician name and any additional orders received.'
  }
];
