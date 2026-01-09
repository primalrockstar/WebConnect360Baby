import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { usePcrStorage } from '../usePcrStorage';
import { pcrTrainerConfig } from '../../pcrTrainer.config';
import { NarrativeDraft } from '../../types';

const storageKey = pcrTrainerConfig.storageKey;

describe('usePcrStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('persists drafts to localStorage and retrieves them', () => {
    const { result } = renderHook(() => usePcrStorage());
    const draft: NarrativeDraft = {
      scenarioId: 'scenario-one',
      updatedAt: Date.now(),
      sections: { history: 'SAMPLE collected', assessment: 'Airway patent' }
    };

    act(() => {
      result.current.saveDraft(draft);
    });

    const persisted = JSON.parse(localStorage.getItem(storageKey) ?? '{}');
    expect(persisted['scenario-one']).toMatchObject({ sections: draft.sections });

    const loaded = result.current.loadDraft('scenario-one');
    expect(loaded).toMatchObject({ sections: draft.sections });
  });

  it('clears individual drafts while preserving others', () => {
    const { result } = renderHook(() => usePcrStorage());
    const alphaDraft: NarrativeDraft = { scenarioId: 'alpha', updatedAt: Date.now(), sections: { dispatch: 'Scene safe' } };
    const bravoDraft: NarrativeDraft = { scenarioId: 'bravo', updatedAt: Date.now(), sections: { assessment: 'Stable' } };

    act(() => {
      result.current.saveDraft(alphaDraft);
      result.current.saveDraft(bravoDraft);
    });

    act(() => {
      result.current.clearDraft('alpha');
    });

    expect(result.current.loadDraft('alpha')).toBeNull();
    expect(result.current.loadDraft('bravo')).toMatchObject({ sections: bravoDraft.sections });

    const persisted = JSON.parse(localStorage.getItem(storageKey) ?? '{}');
    expect(persisted.alpha).toBeUndefined();
    expect(persisted.bravo.sections.assessment).toBe('Stable');
  });
});
