import React from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { ModelPcr } from '../types';

interface ModelPcrPanelProps {
  model?: ModelPcr | null;
  expanded: boolean;
  onToggle: () => void;
}

export const ModelPcrPanel: React.FC<ModelPcrPanelProps> = ({ model, expanded, onToggle }) => {
  if (!model) return null;
  return (
    <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Model PCR</p>
          <h3 className="text-lg font-semibold">{model.title}</h3>
        </div>
        <button
          onClick={onToggle}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-sm"
        >
          {expanded ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />} {expanded ? 'Hide' : 'Show'}
        </button>
      </div>
      {expanded && (
        <pre className="mt-4 whitespace-pre-wrap text-sm text-slate-100 bg-white/10 rounded-2xl p-4 border border-white/10 max-h-64 overflow-y-auto">
          {model.body}
        </pre>
      )}
    </div>
  );
};
