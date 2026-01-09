import React, { useEffect, useMemo, useState } from 'react';
import {
  Activity,
  AlertTriangle,
  ClipboardList,
  Clock,
  FileText,
  MapPin,
  Stethoscope
} from 'lucide-react';
import { GlassCard } from '../ui/ModernGlassComponents';
import { ModernButton } from '../ui/ModernGlassComponents';
import {
  PCR_DOCUMENTATION_SCENARIOS,
  PCR_DOCUMENTATION_TEMPLATES,
  PCRDocumentationScenario,
  PCRTemplateKey
} from '../../data/tools/pcr-documentation';

const collectFieldPaths = (value: unknown, prefix = '', paths = new Set<string>()): Set<string> => {
  if (value === null || value === undefined) {
    if (prefix) paths.add(prefix);
    return paths;
  }

  if (typeof value !== 'object') {
    if (prefix) paths.add(prefix);
    return paths;
  }

  if (Array.isArray(value)) {
    if (prefix) paths.add(`${prefix}[]`);
    if (value.length > 0) {
      collectFieldPaths(value[0], `${prefix}[0]`, paths);
    }
    return paths;
  }

  if (prefix) paths.add(prefix);

  Object.entries(value as Record<string, unknown>).forEach(([key, nested]) => {
    const nextPrefix = prefix ? `${prefix}.${key}` : key;
    collectFieldPaths(nested, nextPrefix, paths);
  });

  return paths;
};

const ModernPCRDocumentationLab: React.FC = () => {
  const categories = useMemo(() => {
    const set = new Set<string>();
    PCR_DOCUMENTATION_SCENARIOS.forEach((scenario) => set.add(scenario.category));
    return ['all', ...Array.from(set).sort()];
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(
    PCR_DOCUMENTATION_SCENARIOS[0]?.id ?? ''
  );
  const [selectedTemplate, setSelectedTemplate] = useState<PCRTemplateKey>('SOAP');

  const filteredScenarios = useMemo(() => {
    if (selectedCategory === 'all') return PCR_DOCUMENTATION_SCENARIOS;
    return PCR_DOCUMENTATION_SCENARIOS.filter((scenario) => scenario.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    if (!filteredScenarios.some((scenario) => scenario.id === selectedScenarioId)) {
      setSelectedScenarioId(filteredScenarios[0]?.id ?? '');
    }
  }, [filteredScenarios, selectedScenarioId]);

  const activeScenario: PCRDocumentationScenario | undefined = useMemo(
    () => PCR_DOCUMENTATION_SCENARIOS.find((scenario) => scenario.id === selectedScenarioId),
    [selectedScenarioId]
  );

  const template = PCR_DOCUMENTATION_TEMPLATES.templates[selectedTemplate];
  const templateSections = useMemo(
    () => Object.keys(template).filter((key) => key !== 'required_fields').sort(),
    [template]
  );

  const requiredFields = useMemo(() => {
    const raw = (template as { required_fields?: unknown }).required_fields;
    return Array.isArray(raw) ? (raw as string[]) : [];
  }, [template]);

  const templatePaths = useMemo(() => {
    const rawPaths = Array.from(collectFieldPaths(template))
      .map((path) => path.replace(/\[0\]/g, '[]'))
      .filter(Boolean);
    const uniquePaths = Array.from(new Set(rawPaths));
    uniquePaths.sort();
    return uniquePaths;
  }, [template]);

  if (!activeScenario) {
    return null;
  }

  return (
    <section className="space-y-10">
      <header className="space-y-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
          <ClipboardList className="h-4 w-4" /> PCR Documentation Practice
        </span>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-blue-950">Narrative Mastery Workshop</h2>
            <p className="max-w-3xl text-base leading-relaxed text-slate-600">
              Pair each documentation template with realistic field incidents. Review dispatch intel, patient trends,
              and critical risk notes before drafting your narrative.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => {
              const isActive = category === selectedCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                    isActive
                      ? 'border-blue-500 bg-blue-600 text-white shadow-lg'
                      : 'border-blue-200 bg-white text-blue-700 hover:border-blue-400 hover:bg-blue-50'
                  }`}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[360px,1fr]">
        <GlassCard className="p-6 space-y-5" intensity="light">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-blue-900">Scenario Library</h3>
            <p className="text-sm text-slate-600">Select a case to review pre-hospital details and documentation priorities.</p>
          </div>
          <div className="space-y-2 max-h-[28rem] overflow-y-auto pr-2">
            {filteredScenarios.map((scenario) => {
              const isActive = scenario.id === selectedScenarioId;
              return (
                <button
                  key={scenario.id}
                  type="button"
                  onClick={() => setSelectedScenarioId(scenario.id)}
                  className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                    isActive
                      ? 'border-blue-400 bg-blue-50 text-blue-900 shadow-inner'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-blue-50/70'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{scenario.title}</span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-blue-500">
                      {scenario.complexity}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">{scenario.dispatch.complaint}</p>
                </button>
              );
            })}
          </div>
        </GlassCard>

        <div className="space-y-6">
          <GlassCard className="p-8 space-y-6" intensity="medium">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <h3 className="text-2xl font-semibold text-blue-900">{activeScenario.title}</h3>
                <p className="text-sm text-blue-500">
                  {activeScenario.category.toUpperCase()} • {activeScenario.complexity.toUpperCase()}
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em]">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">
                  <Clock className="mr-1 inline-block h-3.5 w-3.5" /> {activeScenario.dispatch.time}
                </span>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-700">
                  <MapPin className="mr-1 inline-block h-3.5 w-3.5" /> {activeScenario.dispatch.location}
                </span>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2 rounded-2xl border border-blue-100 bg-white/90 p-4 shadow-inner">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
                  <Activity className="h-4 w-4" /> Dispatch Snapshot
                </h4>
                <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                  <li>{activeScenario.dispatch.complaint}</li>
                  <li>Responding units: {activeScenario.dispatch.respondingUnits.join(', ')}</li>
                  <li>Chief complaint: {activeScenario.chiefComplaint}</li>
                </ul>
              </div>

              <div className="space-y-2 rounded-2xl border border-blue-100 bg-white/90 p-4 shadow-inner">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
                  <Stethoscope className="h-4 w-4" /> Patient Profile
                </h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li>
                    Age {activeScenario.patient.age} • {activeScenario.patient.sex}
                    {activeScenario.patient.weightKg ? ` • ${activeScenario.patient.weightKg} kg` : ''}
                  </li>
                  {activeScenario.patient.pronouns && (
                    <li>Pronouns: {activeScenario.patient.pronouns}</li>
                  )}
                  {activeScenario.patient.language && (
                    <li>Primary language: {activeScenario.patient.language}</li>
                  )}
                  <li className="text-slate-600">{activeScenario.summary}</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2 rounded-2xl border border-slate-200 bg-white/80 p-4">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Primary Findings</h4>
                <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {activeScenario.primaryFindings.map((finding) => (
                    <li key={finding}>{finding}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2 rounded-2xl border border-slate-200 bg-white/80 p-4">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Documentation Focus</h4>
                <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {activeScenario.documentationFocus.map((focus) => (
                    <li key={focus}>{focus}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
                  <Clock className="h-4 w-4" /> Vital Trends
                </h4>
                <div className="space-y-2 text-sm text-blue-900">
                  {activeScenario.vitals.map((vital) => (
                    <div
                      key={`${activeScenario.id}-vital-${vital.time}`}
                      className="rounded-xl border border-blue-100 bg-white/80 px-3 py-2 shadow-inner"
                    >
                      <p className="font-semibold">{vital.time}</p>
                      <p>BP {vital.bp} • HR {vital.pulse} • RR {vital.respirations}</p>
                      <p>
                        {typeof vital.spo2 === 'number' ? `SpO₂ ${vital.spo2}% ` : ''}
                        {typeof vital.tempC === 'number' ? `• Temp ${vital.tempC}°C ` : ''}
                        {typeof vital.gcs === 'string' ? `• GCS ${vital.gcs} ` : ''}
                        {typeof vital.glucose === 'number' ? `• Glucose ${vital.glucose} mg/dL ` : ''}
                        {typeof vital.painScore === 'number' ? `• Pain ${vital.painScore}/10` : ''}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
                  <FileText className="h-4 w-4" /> Interventions Timeline
                </h4>
                <div className="space-y-2 text-sm text-blue-900">
                  {activeScenario.interventions.map((action) => (
                    <div
                      key={`${activeScenario.id}-intervention-${action.time}-${action.action}`}
                      className="rounded-xl border border-blue-100 bg-white/80 px-3 py-2 shadow-inner"
                    >
                      <p className="font-semibold">{action.time}</p>
                      <p>{action.action}</p>
                      {action.response && <p className="text-sm text-slate-600">Response: {action.response}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-2 rounded-2xl border border-rose-200/70 bg-rose-50/80 p-4">
              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-rose-600">
                <AlertTriangle className="h-4 w-4" /> Risk Alerts & Narrative Tips
              </h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-rose-500">Risk Alerts</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-rose-900">
                    {activeScenario.riskAlerts.map((alert) => (
                      <li key={alert}>{alert}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Narrative Tips</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {activeScenario.narrativeTips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8 space-y-6" intensity="light">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-blue-900">Template Reference</h3>
                <p className="text-sm text-slate-600">
                  Compare SOAP, CHART, or Hybrid frameworks. Each list shows high-value data points to hit in your
                  narrative.
                </p>
              </div>
              <div className="flex gap-2">
                {(['SOAP', 'CHART', 'HYBRID'] as PCRTemplateKey[]).map((key) => (
                  <ModernButton
                    key={key}
                    variant={selectedTemplate === key ? 'gradient' : 'glass'}
                    size="sm"
                    onClick={() => setSelectedTemplate(key)}
                  >
                    {key}
                  </ModernButton>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2 rounded-2xl border border-blue-100 bg-white/85 p-4 shadow-inner">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-blue-600">Top-Level Sections</h4>
                <ul className="space-y-1 text-sm text-slate-700">
                  {templateSections.map((section) => (
                    <li key={section}>{section}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2 rounded-2xl border border-blue-100 bg-white/85 p-4 shadow-inner">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-blue-600">Required Fields</h4>
                {requiredFields.length > 0 ? (
                  <ul className="space-y-1 text-sm text-slate-700">
                    {requiredFields.map((field) => (
                      <li key={field}>{field}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-slate-500">No mandatory elements listed.</p>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500">
                <span>Structure Map</span>
                <span>{templatePaths.length} data hooks</span>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 max-h-64 overflow-y-auto">
                <ul className="space-y-1">
                  {templatePaths.slice(0, 80).map((path) => (
                    <li key={path}>{path}</li>
                  ))}
                  {templatePaths.length > 80 && (
                    <li className="text-slate-400">… {templatePaths.length - 80} additional paths</li>
                  )}
                </ul>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default ModernPCRDocumentationLab;
