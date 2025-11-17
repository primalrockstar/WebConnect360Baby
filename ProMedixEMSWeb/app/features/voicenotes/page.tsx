import Link from 'next/link';

export default function VoiceNotesPage() {
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
          <div className="mb-4 text-6xl">🎙️</div>
          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">
            VoiceNotes
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Record and manage voice notes for patient care documentation
          </p>
        </div>

        {/* Content */}
        <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            About VoiceNotes
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              VoiceNotes is a powerful tool designed specifically for EMS professionals to quickly
              and efficiently document patient encounters using voice recording technology.
            </p>
            <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
              Key Features:
            </h3>
            <ul className="list-inside list-disc space-y-2">
              <li>Quick voice recording with one-tap activation</li>
              <li>Automatic transcription of voice notes to text</li>
              <li>Organization by date, patient, or incident type</li>
              <li>Secure cloud storage with HIPAA compliance</li>
              <li>Easy integration with PCR (Patient Care Report) systems</li>
              <li>Offline recording with automatic sync when connection is restored</li>
            </ul>
            <div className="mt-8 rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
              <p className="text-sm text-blue-900 dark:text-blue-200">
                <strong>Coming Soon:</strong> Full implementation of VoiceNotes features with advanced
                speech-to-text capabilities and seamless integration with your existing workflow.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
