import { describe, expect, it } from 'vitest';
import { scoreNarrative } from '../scoringEngine';
import { NarrativeDraft, ScenarioDetails } from '../../types';

const scenario: ScenarioDetails = {
  id: 'scenario-alpha',
  title: 'Cardiac discomfort at cafe',
  category: 'cardiac',
  difficulty: 'medic',
  durationMinutes: 18,
  tags: ['cardiac', 'medical', 'chest-pain'],
  chiefComplaint: 'Crushing chest pain with shortness of breath',
  sceneDescription: 'Busy cafe with concerned staff, scene is safe on arrival.',
  patientHistory: 'HTN, HLD, compliant with meds, no recent admissions.',
  assessmentFindings: ['Diaphoretic', 'Pale', 'Irregular pulse'],
  vitalSets: [
    { time: '14:31', bloodPressure: '158/92', heartRate: 104, respiratoryRate: 24, oxygenSaturation: 93 }
  ],
  interventions: ['Aspirin 324 mg', 'Nitro 0.4 mg SL', 'Oxygen NRB 15 LPM'],
  complications: [],
  obstacles: ['Heavy foot traffic during loading'],
  learningObjectives: ['Document STEMI care rationale', 'Link interventions to response'],
  modelPcrId: 'model-alpha'
};

const makeDraft = (sections: Record<string, string>): NarrativeDraft => ({
  scenarioId: scenario.id,
  updatedAt: Date.now(),
  sections
});

describe('scoreNarrative', () => {
  it('awards a perfect score when every rule is satisfied', () => {
    const result = scoreNarrative({
      scenario,
      draft: makeDraft({
        dispatch: 'Scene safe with PPE donned, consent obtained immediately for cardiac chest pain complaint.',
        scene: 'Scene safe, bystanders cleared, hazards mitigated, patient seated at table.',
        history: 'SAMPLE obtained with medications, allergies, past history, and OPQRST covering onset, provocation, quality, radiation, severity, time.',
        assessment:
          'Airway patent, breathing labored but effective, circulation intact with strong radial pulse. Vitals trending q5 with full set charted including GCS 15 and ETCO2 35. Skin cool, moist. Lung sounds clear. '
          + 'Reassessment includes airway/breathing/circulation language with detailed metrics.',
        interventions:
          'Administered aspirin, nitro, and oxygen while monitoring response; IV established with saline lock and cardiac monitor placed with 12-lead transmitted.',
        response: 'Because of persistent ischemic pain and due to ST elevations, treatments escalated per protocol and patient response documented after each intervention.',
        transport: 'Transport initiated to cardiac center with med control consulted for cath lab activation; care transitioned en route.',
        transfer: 'Transfer of care at 15:02 to Dr. Smith with full report, destination documented along with handoff summary exceeding forty characters.'
      })
    });

    expect(result.score).toBe(100);
    expect(result.level).toBe('strong');
    expect(result.missingElements).toHaveLength(0);
  });

  it('identifies missing documentation when sections are incomplete', () => {
    const result = scoreNarrative({
      scenario,
      draft: makeDraft({
        dispatch: 'Patient found sitting with mild discomfort.',
        scene: '',
        history: 'Brief story only.',
        assessment: 'Vitals noted.',
        interventions: 'Oxygen applied.',
        response: 'Patient felt better.',
        transport: '',
        transfer: ''
      })
    });

    expect(result.score).toBeLessThan(60);
    expect(result.level).toBe('needs-work');
    expect(result.missingElements).toContain('History includes SAMPLE/OPQRST elements');
    expect(result.missingElements).toContain('Transport & transfer documented');
  });
});
