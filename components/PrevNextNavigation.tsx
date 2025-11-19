import Link from 'next/link';
import { Topic } from '@/lib/types';

interface PrevNextNavigationProps {
  previous?: { topic: Topic; moduleId: string; unitId?: string } | null;
  next?: { topic: Topic; moduleId: string; unitId?: string } | null;
}

export default function PrevNextNavigation({ previous, next }: PrevNextNavigationProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Previous */}
        <div>
          {previous ? (
            <Link
              href={`/topic/${previous.topic.id}`}
              className="group block p-5 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Anterior</span>
              </div>
              <div className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {previous.topic.title}
              </div>
            </Link>
          ) : (
            <div className="p-5 rounded-lg border-2 border-gray-200 dark:border-gray-700 opacity-40 cursor-not-allowed">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Anterior</span>
              </div>
              <div className="text-gray-400 dark:text-gray-600 text-sm">Nenhum conteúdo anterior</div>
            </div>
          )}
        </div>

        {/* Next */}
        <div>
          {next ? (
            <Link
              href={`/topic/${next.topic.id}`}
              className="group block p-5 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:shadow-md transition-all duration-200 text-right"
            >
              <div className="flex items-center justify-end space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <span>Próximo</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                {next.topic.title}
              </div>
            </Link>
          ) : (
            <div className="p-5 rounded-lg border-2 border-gray-200 dark:border-gray-700 opacity-40 cursor-not-allowed text-right">
              <div className="flex items-center justify-end space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                <span>Próximo</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="text-gray-400 dark:text-gray-600 text-sm">Nenhum conteúdo seguinte</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

