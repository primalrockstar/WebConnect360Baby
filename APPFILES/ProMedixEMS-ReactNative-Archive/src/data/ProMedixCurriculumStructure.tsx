// Real ProMedix EMS Curriculum Structure
// Based on user's actual curriculum organization

export interface ChapterData {
  id: string;
  moduleNumber?: number;
  chapterNumber: number;
  title: string;
  description: string;
  isBonus?: boolean;
  topics: string[];
  learningObjectives: string[];
  nasemsoAlignment: string;
}

export const PROMEDIX_CURRICULUM: ChapterData[] = [
  // Module 1: Foundations of EMS Practice
  {
    id: "module-1",
    moduleNumber: 1,
    chapterNumber: 0,
    title: "Foundations of EMS Practice",
    description: "Introduction to emergency medical services and professional foundations",
    topics: ["EMS History", "Professional Development", "Career Preparation"],
    learningObjectives: ["Understand EMS system evolution", "Define professional roles"],
    nasemsoAlignment: "EMS Professional Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-1",
    chapterNumber: 1,
    title: "EMS Systems Fundamentals", 
    description: "EMS systems organization, roles, and EMT scope of practice",
    topics: ["System Components", "Quality Improvement", "Medical Direction", "EMT Scope"],
    learningObjectives: [
      "Describe EMS system components",
      "Explain quality improvement processes", 
      "Define EMT scope of practice",
      "Identify medical direction roles"
    ],
    nasemsoAlignment: "EMS Systems Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-2", 
    chapterNumber: 2,
    title: "Workforce Safety and Wellness",
    description: "Personal safety, stress management, and wellness protocols for EMTs",
    topics: ["Personal Safety", "Stress Management", "Infectious Disease Control", "Mental Health"],
    learningObjectives: [
      "Implement safety protocols",
      "Manage occupational stress",
      "Practice infection control", 
      "Maintain mental wellness"
    ],
    nasemsoAlignment: "Workforce Safety Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-3",
    chapterNumber: 3, 
    title: "Medical, Legal, and Ethical Issues",
    description: "Consent, confidentiality, advance directives, and ethical decision making",
    topics: ["Informed Consent", "Patient Confidentiality", "Advance Directives", "Ethical Dilemmas"],
    learningObjectives: [
      "Obtain proper consent",
      "Maintain patient confidentiality",
      "Honor advance directives",
      "Resolve ethical conflicts"
    ],
    nasemsoAlignment: "Legal and Ethical Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-4",
    chapterNumber: 4,
    title: "Communications and Documentation", 
    description: "Radio protocols, patient care reports, and professional communication",
    topics: ["Radio Communications", "PCR Documentation", "Interprofessional Communication"],
    learningObjectives: [
      "Use radio protocols effectively",
      "Complete accurate PCRs", 
      "Communicate professionally"
    ],
    nasemsoAlignment: "Communication Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-5",
    chapterNumber: 5,
    title: "Human Body Systems",
    description: "Anatomy, physiology, and body system interactions", 
    topics: ["Cardiovascular System", "Respiratory System", "Nervous System", "Musculoskeletal System"],
    learningObjectives: [
      "Identify anatomical structures",
      "Explain physiological processes",
      "Understand system interactions"
    ],
    nasemsoAlignment: "Anatomy and Physiology Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-6",
    chapterNumber: 6,
    title: "Life Span Development",
    description: "Age-related changes from infancy through geriatric care",
    topics: ["Pediatric Development", "Adult Physiology", "Geriatric Changes", "Age-Specific Care"],
    learningObjectives: [
      "Recognize developmental milestones",
      "Adapt care for different age groups",
      "Understand aging processes"
    ],
    nasemsoAlignment: "Life Span Development Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-7", 
    chapterNumber: 7,
    title: "Principles of Pathophysiology",
    description: "Disease processes, cellular function, and body system failures",
    topics: ["Cellular Injury", "Inflammation", "Perfusion", "Homeostasis"],
    learningObjectives: [
      "Explain disease mechanisms",
      "Recognize pathophysiological changes",
      "Understand compensatory responses"
    ],
    nasemsoAlignment: "Pathophysiology Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-8",
    chapterNumber: 8, 
    title: "Principles of Pharmacology",
    description: "Drug actions, EMT medication administration, and contraindications",
    topics: ["Drug Classifications", "Medication Administration", "Drug Actions", "Contraindications"],
    learningObjectives: [
      "Classify medications by action",
      "Administer medications safely",
      "Recognize contraindications"
    ],
    nasemsoAlignment: "Pharmacology Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-9",
    chapterNumber: 9,
    title: "Airway Management", 
    description: "Basic and advanced airway techniques for all age groups",
    topics: ["Airway Assessment", "Basic Airways", "Oxygen Therapy", "Suction"],
    learningObjectives: [
      "Assess airway patency", 
      "Insert basic airways",
      "Administer oxygen therapy",
      "Perform suction procedures"
    ],
    nasemsoAlignment: "Airway Management Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-10",
    chapterNumber: 10,
    title: "Scene Size-Up and Primary Assessment",
    description: "Scene safety, patient assessment, and critical decision making", 
    topics: ["Scene Safety", "Primary Assessment", "Critical Thinking", "Priority Setting"],
    learningObjectives: [
      "Ensure scene safety",
      "Conduct primary assessment", 
      "Apply critical thinking",
      "Set treatment priorities"
    ],
    nasemsoAlignment: "Assessment Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-11",
    chapterNumber: 11,
    title: "Patient Assessment",
    description: "History taking, secondary assessment, and reassessment procedures",
    topics: ["History Taking", "Physical Examination", "Vital Signs", "Reassessment"], 
    learningObjectives: [
      "Obtain patient history",
      "Perform physical examination",
      "Monitor vital signs",
      "Conduct reassessment"
    ],
    nasemsoAlignment: "Patient Assessment Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-12",
    chapterNumber: 12,
    title: "Shock and Resuscitation",
    description: "Perfusion, shock pathophysiology, and resuscitation techniques",
    topics: ["Shock Pathophysiology", "Shock Recognition", "Resuscitation Principles", "Fluid Management"],
    learningObjectives: [
      "Recognize shock states",
      "Understand shock pathophysiology", 
      "Apply resuscitation principles"
    ],
    nasemsoAlignment: "Shock Management Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-13", 
    chapterNumber: 13,
    title: "BLS Resuscitation",
    description: "CPR, AED use, and basic life support protocols",
    topics: ["CPR Techniques", "AED Operation", "Choking Management", "Team Resuscitation"],
    learningObjectives: [
      "Perform high-quality CPR",
      "Operate AED safely",
      "Manage airway obstructions",
      "Work effectively in resuscitation teams"
    ],
    nasemsoAlignment: "BLS Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-14",
    chapterNumber: 14,
    title: "Medical Overview",
    description: "Medical emergencies assessment and general treatment principles",
    topics: ["Medical Assessment", "Treatment Protocols", "Medication Administration", "Transport Decisions"],
    learningObjectives: [
      "Assess medical emergencies",
      "Apply treatment protocols",
      "Make transport decisions"
    ],
    nasemsoAlignment: "Medical Emergency Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-15",
    chapterNumber: 15, 
    title: "Respiratory Emergencies",
    description: "Breathing disorders, asthma, COPD, and respiratory treatments",
    topics: ["Respiratory Assessment", "Asthma Management", "COPD Care", "Respiratory Medications"],
    learningObjectives: [
      "Assess respiratory distress",
      "Manage asthma attacks",
      "Care for COPD patients",
      "Administer respiratory medications"
    ],
    nasemsoAlignment: "Respiratory Emergency Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-16",
    chapterNumber: 16,
    title: "Cardiovascular Emergencies", 
    description: "Heart conditions, chest pain, and cardiac arrest management",
    topics: ["Chest Pain Assessment", "MI Recognition", "Cardiac Arrest", "Cardiac Medications"],
    learningObjectives: [
      "Assess chest pain",
      "Recognize myocardial infarction",
      "Manage cardiac arrest", 
      "Administer cardiac medications"
    ],
    nasemsoAlignment: "Cardiovascular Emergency Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-17",
    chapterNumber: 17,
    title: "Neurologic Emergencies",
    description: "Stroke, seizures, altered mental status, and neurologic assessment",
    topics: ["Stroke Recognition", "Seizure Management", "Altered Mental Status", "Neurologic Assessment"],
    learningObjectives: [
      "Recognize stroke signs",
      "Manage seizures safely",
      "Assess altered mental status",
      "Perform neurologic assessment"
    ],
    nasemsoAlignment: "Neurologic Emergency Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-18",
    chapterNumber: 18,
    title: "Gastrointestinal and Urologic Emergencies", 
    description: "Abdominal pain, GI bleeding, and urinary system disorders",
    topics: ["Abdominal Assessment", "GI Bleeding", "Kidney Stones", "Urinary Retention"],
    learningObjectives: [
      "Assess abdominal pain",
      "Recognize GI bleeding",
      "Manage urologic emergencies"
    ],
    nasemsoAlignment: "GI/Urologic Emergency Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-19",
    chapterNumber: 19,
    title: "Endocrine and Hematologic Emergencies",
    description: "Diabetes, blood disorders, and endocrine system failures", 
    topics: ["Diabetes Management", "Hypoglycemia", "Blood Disorders", "Endocrine Crises"],
    learningObjectives: [
      "Manage diabetic emergencies",
      "Treat hypoglycemia",
      "Recognize blood disorders"
    ],
    nasemsoAlignment: "Endocrine/Hematologic Standards (NASEMSO 2022)"
  },
  {
    id: "chapter-20",
    chapterNumber: 20,
    title: "Immunologic Emergencies",
    description: "Allergic reactions, anaphylaxis, and immune system disorders",
    topics: ["Allergic Reactions", "Anaphylaxis Management", "Epinephrine Administration", "Immune Disorders"],
    learningObjectives: [
      "Recognize allergic reactions",
      "Manage anaphylaxis",
      "Administer epinephrine"
    ],
    nasemsoAlignment: "Immunologic Emergency Standards (NASEMSO 2022)"
  }
  // Additional chapters would continue following the same pattern...
];

export const getModuleChapters = (moduleNumber: number): ChapterData[] => {
  return PROMEDIX_CURRICULUM.filter(chapter => chapter.moduleNumber === moduleNumber);
};

export const getAllChapters = (): ChapterData[] => {
  return PROMEDIX_CURRICULUM;
};

export const getChapterById = (id: string): ChapterData | undefined => {
  return PROMEDIX_CURRICULUM.find(chapter => chapter.id === id);
};