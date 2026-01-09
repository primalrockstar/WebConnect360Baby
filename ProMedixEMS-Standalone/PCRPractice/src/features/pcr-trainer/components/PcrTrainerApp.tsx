import React, { useMemo, useState, useEffect } from 'react';
import { pcrScenarios } from '../data/scenarios';
import { narrativeSections } from '../data/sectionTemplates';
import { ScenarioSidebar } from './ScenarioSidebar';
import { NarrativeEditorCard } from './NarrativeEditorCard';
import { ModelPcrPanel } from './ModelPcrPanel';
import { FeedbackPanel } from './FeedbackPanel';
import { ExportActions } from './ExportActions';
import { PrivacyBanner } from './PrivacyBanner';
import { useScenarioFilters } from '../hooks/useScenarioFilters';
import { useNarrativeEditor } from '../hooks/useNarrativeEditor';
import { scoreNarrative } from '../logic/scoringEngine';
import { modelPcrs } from '../data/modelPcrs';
import { ScoringResult } from '../types';

const PcrTrainerApp: React.FC = () => {
  const { filtered, filters, setCategory, setDifficulty, setQuery, pickRandomScenario } = useScenarioFilters(pcrScenarios);
  const [activeScenarioId, setActiveScenarioId] = useState(pcrScenarios[0]?.id ?? '');
  const [modelExpanded, setModelExpanded] = useState(false);
  const [lockedScore, setLockedScore] = useState<ScoringResult | null>(null);

  useEffect(() => {
    if (!filtered.find((scenario) => scenario.id === activeScenarioId) && filtered.length) {
      setActiveScenarioId(filtered[0].id);
    }
  }, [filtered, activeScenarioId]);

  const scenario = useMemo(() => filtered.find((entry) => entry.id === activeScenarioId) ?? pcrScenarios[0], [filtered, activeScenarioId]);
  const { sections, updateSection, resetSections, lastSavedAt, persistDraft, clearDraft, phiStatus } = useNarrativeEditor(
    scenario?.id ?? '',
    narrativeSections
  );

  const liveDraft = useMemo(() => ({ scenarioId: scenario?.id ?? 'unknown', updatedAt: Date.now(), sections }), [sections, scenario?.id]);

  const liveScore = useMemo(() => (scenario ? scoreNarrative({ scenario, draft: liveDraft }) : null), [scenario, liveDraft]);

  const runScoring = () => {
    if (!scenario) return;
    const result = scoreNarrative({ scenario, draft: liveDraft });
    setLockedScore(result);
    persistDraft();
  };

  const handleRandomScenario = () => {
    const random = pickRandomScenario();
    if (random) {
      setActiveScenarioId(random.id);
      setModelExpanded(false);
      setLockedScore(null);
    }
  };

  const model = modelPcrs.find((entry) => entry.id === scenario?.modelPcrId);

  if (!scenario || !liveScore) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-transparent dark:via-transparent dark:to-transparent py-10 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="space-y-3 text-center">
          <p className="inline-flex items-center justify-center px-4 py-1 text-xs tracking-[0.4em] uppercase rounded-full border border-blue-200 bg-white text-blue-700 dark:bg-white/5 dark:border-white/10 dark:text-blue-300">
            ProMedix PCR Trainer
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 dark:text-white">Professional Patient Care Report Studio</h1>
          <p className="text-slate-600 max-w-3xl mx-auto dark:text-slate-300">
            Author complete EMS narratives, receive intelligent coaching, and export clean documentation. Built to embed inside ProMedix EMS or run as a stand-alone workflow.
          </p>
        </header>

        <PrivacyBanner hasPhiFlag={phiStatus.hasPhiFlag} keyword={phiStatus.keyword} />

        <section className="grid gap-6 lg:grid-cols-[320px,1fr]">
          <ScenarioSidebar
            scenario={scenario}
            scenarios={filtered}
            activeScenarioId={activeScenarioId}
            onSelect={(id) => {
              setActiveScenarioId(id);
              setLockedScore(null);
              setModelExpanded(false);
            }}
            filters={filters}
            onFilterChange={(type, value) => {
              if (type === 'category') setCategory(value as any);
              if (type === 'difficulty') setDifficulty(value as any);
              if (type === 'query') setQuery(value);
            }}
            onRandomScenario={handleRandomScenario}
            liveScore={liveScore}
          />

          <div className="space-y-6">
            <NarrativeEditorCard
              sections={sections}
              templates={narrativeSections}
              onChange={updateSection}
              onReset={() => {
                resetSections();
                clearDraft(scenario.id);
                setLockedScore(null);
              }}
              onScore={runScoring}
              lastSavedAt={lastSavedAt}
            />

            <FeedbackPanel result={lockedScore} />

            <ExportActions scenario={scenario} draft={liveDraft} score={lockedScore ?? liveScore} />

            <ModelPcrPanel model={model ?? null} expanded={modelExpanded} onToggle={() => setModelExpanded((prev) => !prev)} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default PcrTrainerApp;
export { PcrTrainerApp };
