import React from 'react';
import { Download, FileText, Printer, Save } from 'lucide-react';
import { ScenarioDetails, NarrativeDraft, ScoringResult } from '../types';
import { exportNarrativePdf, exportNarrativeMarkdown, openPrintFriendly, saveJsonLocal } from '../logic/exporters';

interface ExportActionsProps {
  scenario: ScenarioDetails;
  draft: NarrativeDraft;
  score?: ScoringResult | null;
}

export const ExportActions: React.FC<ExportActionsProps> = ({ scenario, draft, score }) => {
  const disabled = Object.values(draft.sections).every((value) => !value?.trim());

  return (
    <div className="rounded-3xl border border-blue-100 bg-white shadow-xl p-4 flex flex-wrap gap-3">
      <button
        disabled={disabled}
        onClick={() => exportNarrativePdf(scenario, draft, score ?? undefined)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-blue-200 text-blue-700 disabled:opacity-40"
      >
        <Download className="w-4 h-4" /> PDF
      </button>
      <button
        disabled={disabled}
        onClick={() => exportNarrativeMarkdown(scenario, draft, score ?? undefined)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-blue-200 text-blue-700 disabled:opacity-40"
      >
        <FileText className="w-4 h-4" /> Markdown
      </button>
      <button
        disabled={disabled}
        onClick={() => openPrintFriendly(scenario, draft, score ?? undefined)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-blue-200 text-blue-700 disabled:opacity-40"
      >
        <Printer className="w-4 h-4" /> Print
      </button>
      <button
        disabled={disabled}
        onClick={() => saveJsonLocal(scenario, draft, score ?? undefined)}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-blue-200 text-blue-700 disabled:opacity-40"
      >
        <Save className="w-4 h-4" /> Save JSON
      </button>
    </div>
  );
};
