import Link from 'next/link';

export default function PCRLabPage() {
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
          <div className="mb-4 text-6xl">📋</div>
          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">
            PCR Lab
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Patient Care Report laboratory for practice and learning
          </p>
        </div>

        {/* Content */}
        <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
            About PCR Lab
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              PCR Lab is an interactive learning environment where EMS students and professionals
              can practice completing Patient Care Reports in a safe, simulated environment.
            </p>
            <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
              Key Features:
            </h3>
            <ul className="list-inside list-disc space-y-2">
              <li>Realistic patient scenarios based on actual EMS calls</li>
              <li>Step-by-step guidance through PCR documentation</li>
              <li>Instant feedback on documentation quality and completeness</li>
              <li>Practice with various medical emergencies and trauma cases</li>
              <li>Learn proper medical terminology and coding</li>
              <li>Track your progress and identify areas for improvement</li>
              <li>Access to a library of sample PCRs for reference</li>
            </ul>
            <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
              Learning Objectives:
            </h3>
            <ul className="list-inside list-disc space-y-2">
              <li>Master accurate and thorough documentation practices</li>
              <li>Understand legal and ethical considerations in PCR completion</li>
              <li>Develop speed and efficiency in documentation</li>
              <li>Learn to recognize and avoid common documentation errors</li>
            </ul>
            <div className="mt-8 rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
              <p className="text-sm text-blue-900 dark:text-blue-200">
                <strong>Coming Soon:</strong> Interactive PCR Lab with hundreds of scenarios,
                AI-powered feedback, and certification preparation modules.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
