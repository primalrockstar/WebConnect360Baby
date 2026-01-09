import { afterEach, describe, expect, it, vi } from 'vitest';
import { serializeNarrative, exportNarrativeMarkdown, saveJsonLocal } from '../exporters';
import { NarrativeDraft, ScenarioDetails, ScoringResult } from '../../types';

const scenario: ScenarioDetails = {
  id: 'scenario-export',
  title: 'Multi-system trauma',
  category: 'trauma',
  difficulty: 'aemt',
  durationMinutes: 25,
  tags: ['trauma', 'transport'],
  chiefComplaint: 'Severe leg pain after MVC',
  sceneDescription: 'Busy highway with leaking fluids, scene secured by fire.',
  patientHistory: 'Limited history due to acuity.',
  assessmentFindings: ['Open fracture', 'Diminished pedal pulse'],
  vitalSets: [{ time: '17:05', bloodPressure: '96/60', heartRate: 118, respiratoryRate: 26 }],
  interventions: ['Tourniquet', 'Pain control'],
  complications: [],
  obstacles: ['Traffic delays'],
  learningObjectives: ['Document trauma decision-making'],
  modelPcrId: 'model-export'
};

const draft: NarrativeDraft = {
  scenarioId: scenario.id,
  updatedAt: Date.now(),
  sections: {
    history: 'Limited SAMPLE obtained.',
    assessment: 'Detailed assessment text with vitals.',
    transport: 'Ground transport emergent.',
    transfer: 'Handoff to trauma surgeon.',
    response: 'Patient condition unchanged.'
  }
};

const score: ScoringResult = {
  score: 82,
  level: 'competent',
  missingElements: ['Scene safety'],
  suggestions: ['Add more detail'],
  rules: []
};

afterEach(() => {
  vi.restoreAllMocks();
  document.body.innerHTML = '';
});

describe('exporters', () => {
  it('serializeNarrative renders scenario metadata and sections', () => {
    const text = serializeNarrative(scenario, draft, score);
    expect(text).toContain('Scenario: Multi-system trauma');
    expect(text).toContain('Category: TRAUMA — Difficulty: AEMT');
    expect(text).toContain('HISTORY');
    expect(text).toContain('Scoring Summary: 82/100 (competent)');
  });

  it('exportNarrativeMarkdown triggers a markdown download', () => {
    const anchor = document.createElement('a');
    const clickSpy = vi.spyOn(anchor, 'click').mockImplementation(() => undefined);
    vi.spyOn(document, 'createElement').mockReturnValue(anchor);
    const appendSpy = vi.spyOn(document.body, 'appendChild');
    const removeSpy = vi.spyOn(document.body, 'removeChild');
    const createObjectURLSpy = vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:markdown');
    const revokeSpy = vi.spyOn(URL, 'revokeObjectURL');

    exportNarrativeMarkdown(scenario, draft, score);

    expect(createObjectURLSpy).toHaveBeenCalled();
    expect(anchor.download).toBe('scenario-export-pcr.md');
    expect(clickSpy).toHaveBeenCalled();
    expect(appendSpy).toHaveBeenCalledWith(anchor);
    expect(removeSpy).toHaveBeenCalledWith(anchor);
    expect(revokeSpy).toHaveBeenCalledWith('blob:markdown');
  });

  it('saveJsonLocal writes a JSON payload containing the draft', () => {
    const originalBlob = globalThis.Blob;
    let capturedParts: any[] = [];
    class MockBlob {
      public readonly type: string;
      public readonly parts: any[];
      constructor(parts: any[], options?: BlobPropertyBag) {
        this.parts = parts;
        this.type = options?.type ?? '';
        capturedParts = parts;
      }
    }
    (globalThis as any).Blob = MockBlob as any;

    const createObjectURLSpy = vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:json');
    vi.spyOn(URL, 'revokeObjectURL');
    const anchor = document.createElement('a');
    vi.spyOn(document, 'createElement').mockReturnValue(anchor);

    try {
      saveJsonLocal(scenario, draft, score);
    } finally {
      (globalThis as any).Blob = originalBlob;
    }

    expect(createObjectURLSpy).toHaveBeenCalled();
    const contents = capturedParts.join('');
    const parsed = JSON.parse(contents);

    expect(parsed.scenarioId).toBe('scenario-export');
    expect(parsed.score?.score).toBe(82);
    expect(anchor.download).toBe('scenario-export-pcr.json');
  });
});
