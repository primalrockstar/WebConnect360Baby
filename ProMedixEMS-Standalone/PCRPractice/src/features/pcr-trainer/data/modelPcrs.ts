import { ModelPcr } from '../types';

export const modelPcrs: ModelPcr[] = [
  {
    id: 'model-pcr-trauma-001',
    scenarioId: 'pcr-trauma-001',
    title: 'MVC Rapid Trauma — Instructor PCR',
    body: `Dispatch: 08:07 for two-vehicle MVC. Arrived 08:12 to find 25 y/o restrained driver supine on wet pavement, alert to person/place, anxious, \"my stomach hurts\". Airbag deployed, heavy front-end intrusion >18\".

Scene: Ensured BSI/scene safety, requested PD for traffic control. Manual c-spine initiated by E2 J. Singh. Pt moved minimal, complaining of abdominal and left leg pain. No other patients.

Assessment: Airway patent, speaking in short phrases. Respirations 28, shallow, diminished L base, skin pale/diaphoretic. Pulse rapid/thready. Abdomen rigid LLQ with guarding, pelvis unstable, deformity mid-left femur. PMS intact distal LLE. GCS 14 (E4 V4 M6). Initial vitals 08:12 BP 96/58, HR 128, RR 28, SpO2 92% RA.`,
  },
  {
    id: 'model-pcr-medical-002',
    scenarioId: 'pcr-medical-002',
    title: 'Hyperglycemia ALS Example',
    body: `Dispatch 11:00 for 62 y/o female altered. On arrival family reports progressive lethargy since yesterday, medication compliant. Pt found semi-Fowler on couch, responds to loud verbal with mumbled words, dry mucous membranes, fruity odor.

Primary: Airway patent with poor protective reflexes; suction ready. Respirations rapid/deep (Kussmaul). Skin warm/flushed. Secondary reveals insulin pen 08:00 dose, no trauma.

Vitals: 11:02 BP 104/66, HR 118, RR 30, SpO2 96% RA, glucose HI (>600). 11:14 BP 100/60, HR 122, RR 28, SpO2 97%.`,
  },
  {
    id: 'model-pcr-airway-003',
    scenarioId: 'pcr-airway-003',
    title: 'Pediatric Asthma Transport Example',
    body: `Responded 14:44 to elementary school for 9 y/o male with difficulty breathing. Patient seated tripod in nurse office, speaking 2-3 word sentences, audible expiratory wheeze.

Assessment: Airway patent, retractions noted, expiratory wheezes throughout fields, SpO2 90% RA, HR 132, RR 32. PEFR unavailable. Pt anxious but cooperative with coaching.

Interventions: Coach slow breathing, placed on O2 via neb with albuterol 2.5 mg + ipratropium 0.5 mg over 6 min. Repeat vitals 14:56 BP 110/68, HR 124, RR 26, SpO2 95%. Mother contacted/consented.`
  }
];
