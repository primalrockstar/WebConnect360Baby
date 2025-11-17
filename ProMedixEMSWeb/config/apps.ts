export interface AppModule {
  id: string;
  title: string;
  description: string;
  status: 'available' | 'coming-soon';
  link?: string;
  icon?: string;
}

export const appModules: AppModule[] = [
  {
    id: 'emt-b',
    title: 'EMT-B',
    description: 'Emergency Medical Technician - Basic certification training and resources',
    status: 'available',
    link: '/emt-b',
    icon: '🚑',
  },
  {
    id: 'aemt',
    title: 'AEMT',
    description: 'Advanced Emergency Medical Technician certification program',
    status: 'coming-soon',
    icon: '⚕️',
  },
  {
    id: 'paramedic',
    title: 'Paramedic',
    description: 'Paramedic certification and advanced life support training',
    status: 'coming-soon',
    icon: '🏥',
  },
  {
    id: 'voicenotes',
    title: 'VoiceNotes',
    description: 'Record and manage voice notes for patient care documentation',
    status: 'available',
    link: '/features/voicenotes',
    icon: '🎙️',
  },
  {
    id: 'pcr-lab',
    title: 'PCR Lab',
    description: 'Patient Care Report laboratory for practice and learning',
    status: 'available',
    link: '/features/pcr-lab',
    icon: '📋',
  },
  {
    id: 'flashcards',
    title: 'Flashcards',
    description: 'Interactive flashcards for studying EMS concepts and procedures',
    status: 'available',
    link: '/features/flashcards',
    icon: '📚',
  },
];
