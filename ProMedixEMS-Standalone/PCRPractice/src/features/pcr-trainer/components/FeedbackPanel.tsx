import React from 'react';
import { ScoringResult } from '../types';
import { CheckCircle2, AlertTriangle, Info } from 'lucide-react';

interface FeedbackPanelProps {
  result?: ScoringResult | null;
}

const levelCopy: Record<ScoringResult['level'], string> = {
  'needs-work': 'Needs Work',
  developing: 'Developing',
  competent: 'Competent',
  strong: 'Strong',
};

export const FeedbackPanel: React.FC<FeedbackPanelProps> = ({ result }) => {
  if (!result) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-5 text-sm text-slate-500 flex items-center gap-3">
        <Info className="w-4 h-4" /> Run the analysis to receive structured coaching.
      </div>
    );
  }

  const Icon = result.level === 'strong' ? CheckCircle2 : AlertTriangle;
  const accent = result.level === 'strong' ? 'text-emerald-600' : 'text-amber-600';

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-xl p-5 space-y-4">
      <div className="flex items-center gap-3">
        <Icon className={`w-6 h-6 ${accent}`} />
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Intelligent Feedback</p>
          <h3 className="text-2xl font-semibold text-slate-900">{result.score}/100 — {levelCopy[result.level]}</h3>
        </div>
      </div>
      {result.missingElements.length > 0 ? (
        <div>
          <p className="text-sm font-semibold text-slate-800">Improve these areas:</p>
          <ul className="mt-2 list-disc list-inside text-sm text-slate-600 space-y-1">
            {result.suggestions.map((suggestion) => (
              <li key={suggestion}>{suggestion}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-sm text-emerald-600">Excellent work. All core documentation elements are present.</p>
      )}
    </div>
  );
};
