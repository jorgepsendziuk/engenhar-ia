import Link from 'next/link';
import { Module } from '@/lib/types';

interface ModuleCardProps {
  module: Module;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  const totalTopics = module.topics.length + 
    module.units.reduce((acc, unit) => acc + unit.topics.length, 0);
  
  return (
    <Link href={`/module/${module.id}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 cursor-pointer h-full group">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
              <span className="text-blue-600 dark:text-blue-300 font-bold text-lg">
                {module.number}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {module.title}
              </h3>
            </div>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-4">
          <span>
            {module.units.length > 0 ? `${module.units.length} unidades` : 'Sem unidades'}
          </span>
          <span>•</span>
          <span>{totalTopics} tópicos</span>
        </div>
      </div>
    </Link>
  );
}

