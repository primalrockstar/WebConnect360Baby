import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { NarrativeDraft, PcrSectionTemplate } from '../types';
import { usePcrStorage } from './usePcrStorage';
import { usePhiScanner } from './usePhiScanner';
import { pcrTrainerConfig } from '../pcrTrainer.config';

const buildEmptySections = (templates: PcrSectionTemplate[]) =>
  templates.reduce<Record<string, string>>((acc, template) => {
    acc[template.id] = '';
    return acc;
  }, {});

export const useNarrativeEditor = (scenarioId: string, templates: PcrSectionTemplate[]) => {
  const { loadDraft, saveDraft, clearDraft } = usePcrStorage();
  const [sections, setSections] = useState<Record<string, string>>(() => buildEmptySections(templates));
  const [lastSavedAt, setLastSavedAt] = useState<number | null>(null);
  const dirtyRef = useRef(false);
  const persistDraftRef = useRef<() => void>();

  useEffect(() => {
    const stored = scenarioId ? loadDraft(scenarioId) : null;
    setSections(stored?.sections ?? buildEmptySections(templates));
    setLastSavedAt(stored?.updatedAt ?? null);
    dirtyRef.current = false;
  }, [scenarioId, templates, loadDraft]);

  const updateSection = useCallback((id: string, value: string) => {
    setSections((prev) => ({ ...prev, [id]: value }));
    dirtyRef.current = true;
  }, []);

  const resetSections = useCallback(() => {
    setSections(buildEmptySections(templates));
    dirtyRef.current = true;
  }, [templates]);

  const persistDraft = useCallback(() => {
    if (!scenarioId || !dirtyRef.current) return;
    const draft: NarrativeDraft = {
      scenarioId,
      updatedAt: Date.now(),
      sections,
    };
    saveDraft(draft);
    setLastSavedAt(draft.updatedAt);
    dirtyRef.current = false;
  }, [scenarioId, sections, saveDraft]);

  useEffect(() => {
    persistDraftRef.current = persistDraft;
  }, [persistDraft]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      persistDraft();
    }, pcrTrainerConfig.autosaveIntervalMs);
    return () => window.clearInterval(interval);
  }, [persistDraft]);

  useEffect(() => {
    return () => {
      persistDraftRef.current?.();
    };
  }, []);

  const combinedText = useMemo(() => Object.values(sections).join(' \n'), [sections]);
  const phiStatus = usePhiScanner(combinedText);

  return {
    sections,
    lastSavedAt,
    updateSection,
    resetSections,
    persistDraft,
    clearDraft,
    phiStatus,
  };
};
