import { appModules } from '@/config/apps';
import ModuleCard from '@/components/ModuleCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">
            ProMedix EMS Suite
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your comprehensive Emergency Medical Services training platform
          </p>
        </div>

        {/* Module Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {appModules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>ProMedix EMS &copy; 2024 - Empowering EMS Professionals</p>
        </div>
      </main>
    </div>
  );
}
