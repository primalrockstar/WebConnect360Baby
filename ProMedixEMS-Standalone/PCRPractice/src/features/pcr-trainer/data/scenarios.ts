import { ScenarioDetails } from '../types';

export const pcrScenarios: ScenarioDetails[] = [
  {
    id: 'pcr-trauma-001',
    title: 'MVC with multi-system trauma',
    category: 'trauma',
    difficulty: 'medic',
    durationMinutes: 25,
    tags: ['MVC', 'multi-trauma', 'rapid transport'],
    chiefComplaint: '25 y/o restrained driver with abdominal pain after high-speed MVC',
    sceneDescription: 'Two-vehicle collision on wet highway, heavy front-end damage, airbags deployed, patient self-extricated but lying supine near vehicle.',
    patientHistory: 'No known medical history, denies medications, NKDA, last oral intake coffee 2 hrs ago.',
    assessmentFindings: [
      'Airway patent but patient speaking in short sentences',
      'Breathing rapid and shallow with diminished sounds on left',
      'Skin pale, diaphoretic, cap refill >3 seconds',
      'Abdomen rigid with guarding LLQ',
      'Pelvic instability noted, deformity left femur'
    ],
    vitalSets: [
      { time: '08:12', bloodPressure: '96/58', heartRate: 128, respiratoryRate: 28, oxygenSaturation: 92, painScore: 9 },
      { time: '08:18', bloodPressure: '88/54', heartRate: 132, respiratoryRate: 30, oxygenSaturation: 94, painScore: 8 }
    ],
    interventions: [
      'Manual cervical stabilization, application of C-collar',
      'Rapid trauma assessment and exposure, hemorrhage control',
      'High-flow oxygen via non-rebreather, assisted ventilations PRN',
      'Needle decompression considered for absent lung sounds',
      'Traction splint applied to left femur',
      'IV access with warmed fluids en route'
    ],
    complications: [
      'Crew must manage scene hazards during rain',
      'Simultaneous extrication of passenger by fire department',
      'Patient intermittently confused and agitated'
    ],
    obstacles: [
      'Traffic management delaying transport departure',
      'Limited lighting for abdominal assessment',
      'Family on scene requesting transport updates'
    ],
    learningObjectives: [
      'Demonstrate trauma narrative structure emphasizing MOI and serial vitals',
      'Document critical interventions with timestamps and responses',
      'Address consent, mental status changes, and transport priority'
    ],
    modelPcrId: 'model-pcr-trauma-001'
  },
  {
    id: 'pcr-medical-002',
    title: 'Hyperglycemia with altered mental status',
    category: 'medical',
    difficulty: 'aemt',
    durationMinutes: 18,
    tags: ['diabetes', 'altered', 'family report'],
    chiefComplaint: '62 y/o female found confused with fruity odor on breath',
    sceneDescription: 'Residential apartment, family states patient lethargic for 2 days, multiple medication bottles present.',
    patientHistory: 'Hx: Type II DM, HTN. Meds: Metformin, Lisinopril, insulin glargine. Allergic to PCN.',
    assessmentFindings: [
      'Patient responds to pain, slurred speech, dry mucous membranes',
      'Rapid, deep respirations (Kussmaul)',
      'Skin warm, flushed, poor turgor',
      'Glucose meter reads HI (>600 mg/dL)',
      '12-lead shows sinus tachycardia'
    ],
    vitalSets: [
      { time: '11:02', bloodPressure: '104/66', heartRate: 118, respiratoryRate: 30, oxygenSaturation: 96, temperature: 99.1 },
      { time: '11:14', bloodPressure: '100/60', heartRate: 122, respiratoryRate: 28, oxygenSaturation: 97 }
    ],
    interventions: [
      'Airway positioning and suction set-up',
      'High-flow oxygen titrated to 94%',
      'Establish large-bore IV, begin isotonic fluid bolus',
      'Monitor cardiac rhythm and EtCO2',
      'Consult med control regarding insulin pump found attached'
    ],
    complications: [
      'Family members repeatedly asking to ride along',
      'Apartment clutter limits stretcher approach'
    ],
    obstacles: [
      'Language barrier—family translates',
      'Need to gather medications/insulin for hospital team'
    ],
    learningObjectives: [
      'Capture SAMPLE/OPQRST data despite altered patient',
      'Document provider decision-making for suspected DKA',
      'Describe responses to fluid therapy and airway management'
    ],
    modelPcrId: 'model-pcr-medical-002'
  },
  {
    id: 'pcr-airway-003',
    title: 'Pediatric asthma exacerbation',
    category: 'airway',
    difficulty: 'basic',
    durationMinutes: 15,
    tags: ['peds', 'airway', 'asthma'],
    chiefComplaint: '9 y/o male with audible wheezing unrelieved by inhaler',
    sceneDescription: 'School nurse office, child sitting tripod position, anxious classmates nearby.',
    patientHistory: 'Asthma diagnosed age 5, recent URI, using albuterol inhaler q4h. No allergies noted.',
    assessmentFindings: [
      'Accessory muscle use, two-word dyspnea',
      'Expiratory wheezes with diminished air movement',
      'Pulse oximetry 90% RA, HR 132',
      'Skin warm, mild retractions, speaks softly',
      'Peak flow unavailable'
    ],
    vitalSets: [
      { time: '14:48', bloodPressure: '108/70', heartRate: 132, respiratoryRate: 32, oxygenSaturation: 90 },
      { time: '14:56', bloodPressure: '110/68', heartRate: 124, respiratoryRate: 26, oxygenSaturation: 95 }
    ],
    interventions: [
      'Coach pursed-lip breathing, administer nebulized albuterol/ipratropium',
      'Assist with spacer device, monitor response',
      'Contact mother, prepare for transport to pediatric facility'
    ],
    complications: [
      'Child anxious; frequent pauses needed for reassurance',
      'School dismissal causing crowd/noise'
    ],
    obstacles: [
      'Need guardian consent via phone',
      'Limited power outlets for neb setup'
    ],
    learningObjectives: [
      'Describe pediatric airway assessment findings clearly',
      'Document guardian notification and consent process',
      'Record medication dosages, nebulizer setup, and response'
    ],
    modelPcrId: 'model-pcr-airway-003'
  }
];
