import React, { useState } from 'react';
import { Loader2, Info, Undo2, ClipboardEdit } from 'lucide-react';
import { PcrSectionTemplate } from '../types';

interface NarrativeEditorCardProps {
  sections: Record<string, string>;
  templates: PcrSectionTemplate[];
  onChange: (id: string, value: string) => void;
  onReset: () => void;
  onScore: () => void;
  lastSavedAt: number | null;
  autosaving?: boolean;
}

export const NarrativeEditorCard: React.FC<NarrativeEditorCardProps> = ({
  sections,
  templates,
  onChange,
  onReset,
  onScore,
  lastSavedAt,
  autosaving,
}) => {
  const [expandedHint, setExpandedHint] = useState<string | null>(null);

  return (
    <div className="rounded-3xl border border-blue-100 bg-white shadow-2xl p-6 space-y-6">
      <div className="flex flex-wrap items-center gap-3 justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-blue-500">Narrative Editor</p>
          <p className="text-sm text-slate-500">
            {lastSavedAt ? `Autosaved ${new Date(lastSavedAt).toLocaleTimeString()}` : 'Autosave pending'}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-50"
          >
            <Undo2 className="w-4 h-4" /> Clear
          </button>
          <button
            onClick={onScore}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-600 text-white shadow-lg hover:bg-blue-500"
          >
            <ClipboardEdit className="w-4 h-4" /> Analyze Narrative
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {templates.map((template) => {
          const isExpanded = expandedHint === template.id;
          return (
            <div key={template.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-blue-900 uppercase tracking-widest">
                  {template.title}
                </label>
                <button
                  type="button"
                  onClick={() => setExpandedHint(isExpanded ? null : template.id)}
                  className="text-xs inline-flex items-center gap-1 text-blue-600"
                >
                  <Info className="w-4 h-4" /> {isExpanded ? 'Hide hints' : 'Show hints'}
                </button>
              </div>
              {isExpanded && (
                <div className="text-xs text-slate-600 bg-blue-50 border border-blue-100 rounded-2xl p-3">
                  {template.hint}
                </div>
              )}
              <textarea
                value={sections[template.id] ?? ''}
                onChange={(event) => onChange(template.id, event.target.value)}
                rows={5}
                placeholder={template.placeholder}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm focus:ring-2 focus:ring-blue-200"
              />
            </div>
          );
        })}
      </div>

      {autosaving && (
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Loader2 className="w-3 h-3 animate-spin" /> Autosaving…
        </div>
      )}
    </div>
  );
};
