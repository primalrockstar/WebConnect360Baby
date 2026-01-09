import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { useNarrativeEditor } from '../useNarrativeEditor';
import { narrativeSections } from '../../data/sectionTemplates';
import { pcrTrainerConfig } from '../../pcrTrainer.config';
import { NarrativeDraft } from '../../types';

const scenarioId = 'pcr-trauma-001';

const mockDraftStore: Record<string, NarrativeDraft> = {};
const mockLoadDraft = vi.fn((id: string) => mockDraftStore[id] ?? null);
const mockSaveDraft = vi.fn((draft: NarrativeDraft) => {
  mockDraftStore[draft.scenarioId] = draft;
});
const mockClearDraft = vi.fn((id: string) => {
  delete mockDraftStore[id];
});

vi.mock('../usePcrStorage', () => ({
  usePcrStorage: () => ({
    loadDraft: mockLoadDraft,
    saveDraft: mockSaveDraft,
    clearDraft: mockClearDraft
  })
}));

describe('useNarrativeEditor', () => {
  beforeEach(() => {
    Object.keys(mockDraftStore).forEach((key) => delete mockDraftStore[key]);
    mockLoadDraft.mockClear();
    mockSaveDraft.mockClear();
    mockClearDraft.mockClear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('hydrates sections from previously saved drafts and exposes last saved timestamp', () => {
    const persistedDraft = {
      scenarioId,
      updatedAt: 1700000000000,
      sections: { dispatch: 'Persisted dispatch details', history: 'Documented SAMPLE history' }
    };
    mockDraftStore[scenarioId] = persistedDraft;

    const { result } = renderHook(() => useNarrativeEditor(scenarioId, narrativeSections));

    expect(result.current.sections.dispatch).toBe('Persisted dispatch details');
    expect(result.current.sections.history).toBe('Documented SAMPLE history');
    expect(result.current.lastSavedAt).toBe(1700000000000);
    expect(mockLoadDraft).toHaveBeenCalledWith(scenarioId);
  });

  it('persists dirty sections on demand and via the autosave interval', async () => {
    const recordedIntervals: Array<() => void> = [];
    const intervalSpy = vi.spyOn(window, 'setInterval').mockImplementation((callback: TimerHandler, delay?: number) => {
      const fn = callback as () => void;
      recordedIntervals.push(fn);
      return recordedIntervals.length;
    });
    const clearIntervalSpy = vi.spyOn(window, 'clearInterval').mockImplementation(() => undefined);
    const { result, unmount } = renderHook(() => useNarrativeEditor(scenarioId, narrativeSections));

  expect(intervalSpy).toHaveBeenCalledWith(expect.any(Function), pcrTrainerConfig.autosaveIntervalMs);
  const initialIntervalCalls = recordedIntervals.length;

    act(() => {
      result.current.updateSection('history', 'SAMPLE history with allergies and medications.');
    });

    act(() => {
      result.current.updateSection('assessment', 'Airway, breathing, and circulation documented.');
    });

    act(() => {
      result.current.persistDraft();
    });

    expect(mockSaveDraft).toHaveBeenCalled();
    expect(mockDraftStore[scenarioId].sections.history).toContain('SAMPLE history');

    act(() => {
      result.current.updateSection('scene', 'Scene safe, PPE in place, consent noted with address info.');
    });

    expect(result.current.sections.scene).toContain('Scene safe');

    await act(async () => {});

  expect(recordedIntervals.length).toBeGreaterThan(initialIntervalCalls);

  const intervalCallback = recordedIntervals[recordedIntervals.length - 1];

    const savesBeforeAutosave = mockSaveDraft.mock.calls.length;

    act(() => {
      intervalCallback?.();
    });

    expect(mockSaveDraft.mock.calls.length).toBeGreaterThan(savesBeforeAutosave);
    expect(mockDraftStore[scenarioId].sections.scene).toContain('Scene safe');
    expect(result.current.phiStatus.hasPhiFlag).toBe(true);
    expect(result.current.phiStatus.keyword?.toLowerCase()).toContain('address');

    unmount();
    expect(clearIntervalSpy).toHaveBeenCalled();

    intervalSpy.mockRestore();
    clearIntervalSpy.mockRestore();
  });
});
