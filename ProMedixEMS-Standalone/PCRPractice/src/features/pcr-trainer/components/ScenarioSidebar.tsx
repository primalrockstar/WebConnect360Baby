import React from 'react';
import { Filter, Shuffle, ListChecks } from 'lucide-react';
import { ScenarioDetails, ScoringResult } from '../types';

interface ScenarioSidebarProps {
  scenario: ScenarioDetails;
  scenarios: ScenarioDetails[];
  activeScenarioId: string;
  onSelect: (id: string) => void;
  filters: {
    category?: string;
    difficulty?: string;
    query: string;
  };
  onFilterChange: (type: 'category' | 'difficulty' | 'query', value: string) => void;
  onRandomScenario: () => void;
  liveScore: ScoringResult;
}

const categoryOptions = [
  { label: 'All', value: 'all' },
  { label: 'Trauma', value: 'trauma' },
  { label: 'Medical', value: 'medical' },
  { label: 'Airway', value: 'airway' },
  { label: 'OB/Peds', value: 'ob-peds' },
  { label: 'Cardiac', value: 'cardiac' }
];

const difficultyOptions = [
  { label: 'All', value: 'all' },
  { label: 'Basic', value: 'basic' },
  { label: 'AEMT', value: 'aemt' },
  { label: 'Medic', value: 'medic' }
];

export const ScenarioSidebar: React.FC<ScenarioSidebarProps> = ({
  scenario,
  scenarios,
  activeScenarioId,
  onSelect,
  filters,
  onFilterChange,
  onRandomScenario,
  liveScore,
}) => {
  return (
    <aside className="space-y-5">
      <div className="rounded-3xl border border-blue-100 bg-white shadow-xl p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-blue-900 uppercase tracking-widest flex items-center gap-2">
            <Filter className="w-4 h-4" /> Scenario Filters
          </h2>
          <button
            onClick={onRandomScenario}
            className="text-xs inline-flex items-center gap-1 px-3 py-1 rounded-full border border-blue-200 text-blue-700 hover:bg-blue-50"
          >
            <Shuffle className="w-3 h-3" /> Random
          </button>
        </div>
        <input
          type="search"
          placeholder="Search scenario titles"
          value={filters.query}
          onChange={(event) => onFilterChange('query', event.target.value)}
          className="w-full rounded-xl border border-blue-100 px-3 py-2 text-sm"
        />
        <div className="flex flex-wrap gap-2">
          {categoryOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onFilterChange('category', option.value)}
              className={`px-3 py-1 rounded-full text-xs border ${
                filters.category === option.value
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'border-blue-100 text-blue-700'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {difficultyOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onFilterChange('difficulty', option.value)}
              className={`px-3 py-1 rounded-full text-xs border ${
                filters.difficulty === option.value
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'border-blue-100 text-blue-700'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        <div className="max-h-56 overflow-y-auto space-y-2 pr-1">
          {scenarios.map((entry) => (
            <button
              key={entry.id}
              onClick={() => onSelect(entry.id)}
              className={`w-full text-left px-3 py-2 rounded-2xl border ${
                entry.id === activeScenarioId ? 'border-blue-500 bg-blue-50 shadow' : 'border-blue-100 hover:border-blue-200'
              }`}
            >
              <p className="text-sm font-semibold text-blue-900">{entry.title}</p>
              <p className="text-xs text-slate-500">{entry.category.toUpperCase()} • {entry.difficulty.toUpperCase()}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-blue-100 bg-white shadow-xl p-5 space-y-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-blue-500">Active Scenario</p>
          <h3 className="text-lg font-semibold text-blue-900">{scenario.title}</h3>
          <p className="text-sm text-slate-500">Chief complaint: {scenario.chiefComplaint}</p>
        </div>
        <div className="space-y-2 text-sm text-slate-600">
          <p>{scenario.sceneDescription}</p>
          <p>{scenario.patientHistory}</p>
          <div className="text-xs font-mono bg-slate-50 border border-slate-200 rounded-2xl p-3">
            {scenario.vitalSets.map((set) => (
              <div key={set.time} className="mb-2 last:mb-0">
                <strong>{set.time}</strong>: BP {set.bloodPressure ?? '—'} | HR {set.heartRate ?? '—'} | RR {set.respiratoryRate ?? '—'} | SpO2 {set.oxygenSaturation ?? '—'}%
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-blue-900 uppercase tracking-widest flex items-center gap-2">
            <ListChecks className="w-4 h-4" /> Live Requirements
          </p>
          <ul className="mt-2 space-y-1 text-sm">
            {liveScore.rules.map((rule) => (
              <li key={rule.id} className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${
                    rule.passed ? 'bg-emerald-500' : 'bg-slate-300'
                  }`}
                />
                <span className={rule.passed ? 'text-slate-600' : 'text-slate-500'}>{rule.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};
