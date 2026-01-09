// Real ProMedix EMS Curriculum Structure
// Based on actual STUDY_NOTES_MODULE_MAP.md from production repository

export interface ModuleData {
  moduleNumber: number;
  title: string;
  chapters: number[];
  chapterCount: number;
  description: string;
  learningObjectives: string[];
  duration: string;
  color: string;
}

export interface ChapterData {
  chapterNumber: number;
  moduleNumber: number;
  title: string;
  description: string;
  topics: string[];
  duration: string;
  practicalFocus: string[];
  assessmentType: string[];
}

// Real Module Structure from STUDY_NOTES_MODULE_MAP.md
export const REAL_PROMEDIX_MODULES: ModuleData[] = [
  {
    moduleNumber: 1,
    title: 'Foundations of EMS Practice',
    chapters: [1, 2, 3, 4],
    chapterCount: 4,
    description: 'Broad orientation topics grouped so learners see system, safety, legal, and communications content together.',
    learningObjectives: [
      'Understand EMS system components and operations',
      'Master safety protocols and wellness strategies',
      'Apply legal and ethical frameworks',
      'Demonstrate professional communication'
    ],
    duration: '4 weeks',
    color: 'blue'
  },
  {
    moduleNumber: 2,
    title: 'Clinical Foundations',
    chapters: [5, 6, 7, 8, 9],
    chapterCount: 5,
    description: 'Core science and movement skills; additional chapter (9) carries interprofessional competencies that bridge Module 1 and assessment content.',
    learningObjectives: [
      'Master medical terminology and anatomy',
      'Understand body systems and physiology',
      'Apply lifespan development principles',
      'Demonstrate safe transport techniques',
      'Practice team collaboration skills'
    ],
    duration: '5 weeks',
    color: 'green'
  },
  {
    moduleNumber: 3,
    title: 'Patient Assessment Mastery',
    chapters: [10],
    chapterCount: 1,
    description: 'Dedicated full-length module for comprehensive assessment; typically taught over several lab sessions so the chapter stands alone.',
    learningObjectives: [
      'Conduct systematic patient assessments',
      'Apply critical thinking in emergency situations',
      'Master assessment documentation',
      'Integrate assessment findings for treatment decisions'
    ],
    duration: '3 weeks',
    color: 'purple'
  },
  {
    moduleNumber: 4,
    title: 'Airway & Ventilatory Management',
    chapters: [11],
    chapterCount: 1,
    description: 'Airway mastery is a standalone block with extensive lab practice; keeping a single focus clarifies priorities.',
    learningObjectives: [
      'Master airway assessment techniques',
      'Demonstrate basic airway management',
      'Perform advanced airway procedures',
      'Provide ventilatory support'
    ],
    duration: '4 weeks',
    color: 'red'
  },
  {
    moduleNumber: 5,
    title: 'Pharmacology for EMT-B',
    chapters: [12],
    chapterCount: 1,
    description: 'Medication administration scope for EMT-B is concentrated into one detailed unit.',
    learningObjectives: [
      'Understand pharmacological principles',
      'Master EMT-B medication scope',
      'Demonstrate safe medication administration',
      'Recognize contraindications and adverse effects'
    ],
    duration: '3 weeks',
    color: 'orange'
  },
  {
    moduleNumber: 6,
    title: 'Shock & Circulatory Management',
    chapters: [13, 14],
    chapterCount: 2,
    description: 'Shock physiology and BLS life support are paired because protocol updates overlap heavily.',
    learningObjectives: [
      'Recognize and treat shock states',
      'Master BLS resuscitation protocols',
      'Understand circulatory physiology',
      'Apply team-based resuscitation'
    ],
    duration: '4 weeks',
    color: 'teal'
  },
  {
    moduleNumber: 7,
    title: 'Medical Emergency Response',
    chapters: [15, 16, 17],
    chapterCount: 3,
    description: 'Respiratory and cardiovascular crises live together for systems-based review.',
    learningObjectives: [
      'Manage respiratory emergencies',
      'Treat cardiovascular conditions',
      'Assess neurological presentations',
      'Apply medical emergency protocols'
    ],
    duration: '5 weeks',
    color: 'indigo'
  },
  {
    moduleNumber: 8,
    title: 'Neurologic & Systemic Emergencies',
    chapters: [18, 19, 20],
    chapterCount: 3,
    description: 'High-acuity neurologic, abdominal, metabolic, and hematologic conditions.',
    learningObjectives: [
      'Assess gastrointestinal emergencies',
      'Manage endocrine crises',
      'Treat immunologic reactions',
      'Apply advanced assessment techniques'
    ],
    duration: '5 weeks',
    color: 'violet'
  },
  {
    moduleNumber: 9,
    title: 'Specialized Emergency Care',
    chapters: [21, 22, 23, 24],
    chapterCount: 4,
    description: 'Allergic, toxicological, behavioral, and gynecologic emergencies frequently taught as a specialty block.',
    learningObjectives: [
      'Manage toxicological emergencies',
      'Handle behavioral health crises',
      'Treat allergic reactions',
      'Address gynecologic emergencies'
    ],
    duration: '6 weeks',
    color: 'pink'
  },
  {
    moduleNumber: 10,
    title: 'Trauma Response Principles',
    chapters: [25, 26, 27],
    chapterCount: 3,
    description: 'Trauma system fundamentals with hemorrhage and soft tissue management.',
    learningObjectives: [
      'Understand trauma systems',
      'Control hemorrhage effectively',
      'Manage soft tissue injuries',
      'Apply trauma assessment protocols'
    ],
    duration: '5 weeks',
    color: 'amber'
  },
  {
    moduleNumber: 11,
    title: 'Traumatic Injury Management',
    chapters: [28, 29, 30],
    chapterCount: 3,
    description: 'Craniofacial, spinal, and thoracic trauma require contiguous emphasis.',
    learningObjectives: [
      'Manage head and facial trauma',
      'Stabilize spinal injuries',
      'Treat thoracic trauma',
      'Apply advanced trauma protocols'
    ],
    duration: '5 weeks',
    color: 'lime'
  },
  {
    moduleNumber: 12,
    title: 'Environmental & Musculoskeletal Emergencies',
    chapters: [31, 32, 33],
    chapterCount: 3,
    description: 'Environmental exposure paired with orthopedic and abdominal trauma follow-ups.',
    learningObjectives: [
      'Treat environmental emergencies',
      'Manage orthopedic injuries',
      'Handle abdominal trauma',
      'Apply specialized treatment protocols'
    ],
    duration: '5 weeks',
    color: 'cyan'
  },
  {
    moduleNumber: 13,
    title: 'Special Patient Populations',
    chapters: [34, 35, 36, 37],
    chapterCount: 4,
    description: 'Obstetric, neonatal, pediatric, geriatric, and special populations consolidated for comparative study.',
    learningObjectives: [
      'Manage obstetric emergencies',
      'Provide neonatal care',
      'Treat pediatric patients',
      'Care for geriatric patients'
    ],
    duration: '6 weeks',
    color: 'emerald'
  },
  {
    moduleNumber: 14,
    title: 'EMS Operations & Disaster Response',
    chapters: [38, 39, 40, 41],
    chapterCount: 4,
    description: 'Operations, technical rescue, ICS, and MCI are operationally linked and typically taught consecutively.',
    learningObjectives: [
      'Master EMS operations protocols',
      'Conduct technical rescue',
      'Apply incident command systems',
      'Manage mass casualty incidents'
    ],
    duration: '6 weeks',
    color: 'slate'
  }
];

// Real Chapter Details based on actual curriculum
export const REAL_PROMEDIX_CHAPTERS: ChapterData[] = [
  // Module 1: Foundations of EMS Practice
  {
    chapterNumber: 1,
    moduleNumber: 1,
    title: 'EMS Ecosystem Essentials',
    description: 'EMS systems organization, roles, quality improvement, and EMT scope of practice',
    topics: ['EMS History', 'System Components', 'Quality Improvement', 'Medical Direction', 'EMT Scope'],
    duration: '1 week',
    practicalFocus: ['System Navigation', 'Professional Communication'],
    assessmentType: ['Written Exam', 'Case Study']
  },
  {
    chapterNumber: 2,
    moduleNumber: 1,
    title: 'Safety Protocols for Responders',
    description: 'Personal safety, stress management, infectious disease control, and wellness protocols',
    topics: ['Personal Safety', 'Stress Management', 'Infectious Disease Control', 'Mental Health', 'Physical Fitness'],
    duration: '1 week',
    practicalFocus: ['Safety Protocols', 'Stress Management Techniques'],
    assessmentType: ['Practical Skills', 'Written Exam']
  },
  {
    chapterNumber: 3,
    moduleNumber: 1,
    title: 'Legal Frameworks in Emergency Care',
    description: 'Consent, confidentiality, advance directives, and ethical decision making',
    topics: ['Informed Consent', 'Patient Confidentiality', 'Advance Directives', 'Ethical Dilemmas', 'Legal Liability'],
    duration: '1 week',
    practicalFocus: ['Legal Documentation', 'Ethical Decision Making'],
    assessmentType: ['Case Studies', 'Ethics Scenarios']
  },
  {
    chapterNumber: 4,
    moduleNumber: 1,
    title: 'Documentation & Field Reporting',
    description: 'Radio protocols, patient care reports, and professional communication',
    topics: ['Radio Communications', 'PCR Documentation', 'Professional Communication', 'Data Collection'],
    duration: '1 week',
    practicalFocus: ['Radio Operations', 'PCR Completion', 'Professional Communication'],
    assessmentType: ['Documentation Practice', 'Communication Skills']
  },
  // Module 2: Clinical Foundations
  {
    chapterNumber: 5,
    moduleNumber: 2,
    title: 'Essential Terminology for Responders',
    description: 'Medical terminology, anatomical references, and professional language',
    topics: ['Medical Terminology', 'Anatomical Positions', 'Directional Terms', 'Body Planes', 'Clinical Language'],
    duration: '1 week',
    practicalFocus: ['Terminology Application', 'Professional Communication'],
    assessmentType: ['Terminology Quiz', 'Practical Application']
  },
  {
    chapterNumber: 6,
    moduleNumber: 2,
    title: 'Body Systems for Emergency Care',
    description: 'Anatomy, physiology, and system interactions relevant to emergency care',
    topics: ['Cardiovascular System', 'Respiratory System', 'Nervous System', 'Musculoskeletal System', 'Other Systems'],
    duration: '1 week',
    practicalFocus: ['System Assessment', 'Physical Examination'],
    assessmentType: ['Anatomy Practical', 'System Integration']
  },
  {
    chapterNumber: 7,
    moduleNumber: 2,
    title: 'Lifespan Considerations in EMS',
    description: 'Age-related changes and considerations from neonatal through geriatric care',
    topics: ['Neonatal Development', 'Pediatric Considerations', 'Adult Physiology', 'Geriatric Changes', 'Age-Specific Protocols'],
    duration: '1 week',
    practicalFocus: ['Age-Appropriate Assessment', 'Communication Techniques'],
    assessmentType: ['Age-Group Scenarios', 'Communication Skills']
  },
  {
    chapterNumber: 8,
    moduleNumber: 2,
    title: 'Safe Transport Techniques',
    description: 'Patient movement, lifting, and transport safety protocols',
    topics: ['Body Mechanics', 'Patient Lifting', 'Transfer Techniques', 'Equipment Use', 'Safety Protocols'],
    duration: '1 week',
    practicalFocus: ['Lifting Techniques', 'Equipment Operation', 'Safety Protocols'],
    assessmentType: ['Practical Skills', 'Safety Assessment']
  },
  {
    chapterNumber: 9,
    moduleNumber: 2,
    title: 'Healthcare Team Dynamics',
    description: 'Interprofessional collaboration, team communication, and role clarity',
    topics: ['Team Roles', 'Communication Strategies', 'Conflict Resolution', 'Professional Boundaries', 'Collaboration'],
    duration: '1 week',
    practicalFocus: ['Team Communication', 'Role Playing', 'Collaboration Exercises'],
    assessmentType: ['Team Scenarios', 'Communication Assessment']
  },
  // Module 3: Patient Assessment Mastery
  {
    chapterNumber: 10,
    moduleNumber: 3,
    title: 'Comprehensive Patient Assessment',
    description: 'Systematic patient evaluation, clinical reasoning, and documentation',
    topics: ['Scene Size-up', 'Primary Assessment', 'Secondary Assessment', 'Reassessment', 'Clinical Decision Making'],
    duration: '3 weeks',
    practicalFocus: ['Assessment Skills', 'Clinical Reasoning', 'Documentation'],
    assessmentType: ['Assessment Practicals', 'Clinical Scenarios', 'Documentation Review']
  },
  // Module 4: Airway & Ventilatory Management
  {
    chapterNumber: 11,
    moduleNumber: 4,
    title: 'Airway Management Techniques',
    description: 'Comprehensive airway assessment, management, and ventilatory support',
    topics: ['Airway Anatomy', 'Assessment Techniques', 'Basic Airways', 'Advanced Airways', 'Ventilatory Support'],
    duration: '4 weeks',
    practicalFocus: ['Airway Skills', 'Ventilation Techniques', 'Equipment Proficiency'],
    assessmentType: ['Skills Practicals', 'Scenario-Based Assessment', 'Equipment Competency']
  },
  // Module 5: Pharmacology
  {
    chapterNumber: 12,
    moduleNumber: 5,
    title: 'EMT-B Medication Administration',
    description: 'Pharmacological principles and EMT-B medication scope',
    topics: ['Pharmacology Basics', 'EMT-B Medications', 'Administration Routes', 'Contraindications', 'Documentation'],
    duration: '3 weeks',
    practicalFocus: ['Medication Administration', 'Dosage Calculations', 'Safety Protocols'],
    assessmentType: ['Medication Practicals', 'Calculation Tests', 'Safety Assessment']
  }
];

// Utility functions
export const getModuleByNumber = (moduleNumber: number): ModuleData | undefined => {
  return REAL_PROMEDIX_MODULES.find(module => module.moduleNumber === moduleNumber);
};

export const getChaptersByModule = (moduleNumber: number): ChapterData[] => {
  return REAL_PROMEDIX_CHAPTERS.filter(chapter => chapter.moduleNumber === moduleNumber);
};

export const getChapterByNumber = (chapterNumber: number): ChapterData | undefined => {
  return REAL_PROMEDIX_CHAPTERS.find(chapter => chapter.chapterNumber === chapterNumber);
};

export const getTotalChapters = (): number => {
  return REAL_PROMEDIX_CHAPTERS.length;
};

export const getTotalModules = (): number => {
  return REAL_PROMEDIX_MODULES.length;
};