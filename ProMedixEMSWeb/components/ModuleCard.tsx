import Link from 'next/link';
import { AppModule } from '@/config/apps';

interface ModuleCardProps {
  module: AppModule;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  const isAvailable = module.status === 'available';

  const cardContent = (
    <>
      {/* Status Badge */}
      {!isAvailable && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
            Coming Soon
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="mb-4 text-5xl">
        {module.icon}
      </div>

      {/* Title */}
      <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
        {module.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {module.description}
      </p>

      {/* Available indicator */}
      {isAvailable && (
        <div className="mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
          <span>Explore</span>
          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </>
  );

  const baseClassName = `
    relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all
    dark:border-gray-800 dark:bg-gray-900
    ${isAvailable ? 'hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 cursor-pointer' : 'opacity-75'}
  `;

  if (isAvailable && module.link) {
    return (
      <Link href={module.link} className={baseClassName}>
        {cardContent}
      </Link>
    );
  }

  return (
    <div className={baseClassName}>
      {cardContent}
    </div>
  );
}
