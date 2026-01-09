import jsPDF from 'jspdf';
import { NarrativeDraft, ScenarioDetails, ScoringResult } from '../types';

export const serializeNarrative = (scenario: ScenarioDetails, draft: NarrativeDraft, score?: ScoringResult) => {
  const sections = Object.entries(draft.sections)
    .map(([key, value]) => `${key.toUpperCase()}\n${value.trim() || '[Not documented]'}\n`)
    .join('\n');

  const header = `Scenario: ${scenario.title}\nCategory: ${scenario.category.toUpperCase()} — Difficulty: ${scenario.difficulty.toUpperCase()}\nChief Complaint: ${scenario.chiefComplaint}\n`;
  const footer = score
    ? `\nScoring Summary: ${score.score}/100 (${score.level})\nMissing: ${score.missingElements.join(', ') || 'None'}\n`
    : '';

  return `${header}\n${sections}${footer}`;
};

export const exportNarrativePdf = (scenario: ScenarioDetails, draft: NarrativeDraft, score?: ScoringResult) => {
  const doc = new jsPDF({ compress: true, unit: 'pt', format: 'letter' });
  const lines = doc.splitTextToSize(serializeNarrative(scenario, draft, score), 500);
  doc.text(lines, 40, 60);
  doc.save(`${scenario.id}-pcr.pdf`);
};

export const exportNarrativeMarkdown = (scenario: ScenarioDetails, draft: NarrativeDraft, score?: ScoringResult) => {
  const content = serializeNarrative(scenario, draft, score);
  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${scenario.id}-pcr.md`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
};

export const openPrintFriendly = (scenario: ScenarioDetails, draft: NarrativeDraft, score?: ScoringResult) => {
  const win = window.open('', '_blank');
  if (!win) return;
  win.document.write(`<!DOCTYPE html><html><head><title>PCR Print</title><style>body{font-family:system-ui;padding:24px;line-height:1.5;} h2{margin-top:24px;}</style></head><body>`);
  win.document.write(`<h1>${scenario.title}</h1><p><strong>Chief Complaint:</strong> ${scenario.chiefComplaint}</p>`);
  Object.entries(draft.sections).forEach(([key, value]) => {
    win.document.write(`<h2>${key}</h2><p>${(value || '').replace(/\n/g, '<br/>')}</p>`);
  });
  if (score) {
    win.document.write(`<h2>Scoring</h2><p>${score.score}/100 — ${score.level}</p>`);
  }
  win.document.write('</body></html>');
  win.document.close();
  win.print();
};

export const saveJsonLocal = (scenario: ScenarioDetails, draft: NarrativeDraft, score?: ScoringResult) => {
  const payload = { scenarioId: scenario.id, draft, score };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `${scenario.id}-pcr.json`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
};
