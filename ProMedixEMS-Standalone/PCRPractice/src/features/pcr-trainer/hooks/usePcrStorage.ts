import { useCallback, useMemo, useRef } from 'react';
import { NarrativeDraft } from '../types';
import { pcrTrainerConfig } from '../pcrTrainer.config';

const getStore = (): Record<string, NarrativeDraft> => {
  try {
    const raw = localStorage.getItem(pcrTrainerConfig.storageKey);
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.warn('Unable to parse PCR drafts from storage', error);
    return {};
  }
};

const writeStore = (drafts: Record<string, NarrativeDraft>) => {
  try {
    localStorage.setItem(pcrTrainerConfig.storageKey, JSON.stringify(drafts));
  } catch (error) {
    console.warn('Unable to persist PCR drafts', error);
  }
};

export const usePcrStorage = () => {
  const cacheRef = useRef<Record<string, NarrativeDraft>>(getStore());

  const loadDraft = useCallback((scenarioId: string): NarrativeDraft | null => {
    cacheRef.current = cacheRef.current ?? getStore();
    return cacheRef.current[scenarioId] ?? null;
  }, []);

  const saveDraft = useCallback((draft: NarrativeDraft) => {
    cacheRef.current = { ...cacheRef.current, [draft.scenarioId]: draft };
    writeStore(cacheRef.current);
  }, []);

  const clearDraft = useCallback((scenarioId: string) => {
    if (!cacheRef.current[scenarioId]) return;
    const { [scenarioId]: _removed, ...rest } = cacheRef.current;
    cacheRef.current = rest;
    writeStore(rest);
  }, []);

  return useMemo(
    () => ({ loadDraft, saveDraft, clearDraft }),
    [loadDraft, saveDraft, clearDraft]
  );
};
