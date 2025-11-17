import Link from 'next/link';

export default function FlashcardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link 
          href="/"
          className="mb-8 inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Suite
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 text-6xl">📚</div>
          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">
            Flashcards
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Interactive flashcards for studying EMS concepts and procedures
          </p>
        </div>

        {/* Content */}
        <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            About Flashcards
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Our Flashcards feature provides an effective and engaging way to study and memorize
              critical EMS knowledge, from basic protocols to advanced medical procedures.
            </p>
            <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
              Key Features:
            </h3>
            <ul className="list-inside list-disc space-y-2">
              <li>Comprehensive flashcard decks for EMT-B, AEMT, and Paramedic levels</li>
              <li>Spaced repetition algorithm for optimal retention</li>
              <li>Custom deck creation for personalized study</li>
              <li>Track your progress and mastery level for each card</li>
              <li>Study mode with shuffle and timer options</li>
              <li>Multimedia cards with images and diagrams</li>
              <li>Mobile-friendly for studying on the go</li>
            </ul>
            <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
              Study Categories:
            </h3>
            <ul className="list-inside list-disc space-y-2">
              <li>Anatomy and Physiology</li>
              <li>Pharmacology and Medications</li>
              <li>Medical Emergencies</li>
              <li>Trauma Assessment and Management</li>
              <li>Airway Management</li>
              <li>Cardiac Emergencies and ECG Interpretation</li>
              <li>Pediatric and Geriatric Considerations</li>
              <li>EMS Operations and Safety</li>
            </ul>
            <div className="mt-8 rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
              <p className="text-sm text-blue-900 dark:text-blue-200">
                <strong>Coming Soon:</strong> Full flashcard system with thousands of cards,
                collaborative study features, and exam preparation modes.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
