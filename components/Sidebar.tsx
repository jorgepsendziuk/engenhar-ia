'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CourseStructure, Module, Unit, Topic } from '@/lib/types';
import { getCourseStructure, getModuleForTopic, getUnitForTopic } from '@/lib/course-data';

interface SidebarProps {
  currentTopicId?: string;
}

export default function Sidebar({ currentTopicId }: SidebarProps) {
  const [expandedModules, setExpandedModules] = useState<Set<string>>(new Set());
  const [expandedUnits, setExpandedUnits] = useState<Set<string>>(new Set());
  const pathname = usePathname();
  const courseStructure = getCourseStructure();

  // Expandir automaticamente o módulo e unidade do tópico atual
  useEffect(() => {
    if (currentTopicId) {
      const module = getModuleForTopic(currentTopicId);
      const unit = getUnitForTopic(currentTopicId);
      
      if (module) {
        setExpandedModules(prev => new Set(prev).add(module.id));
      }
      
      if (unit) {
        setExpandedUnits(prev => new Set(prev).add(unit.id));
      }
    }
  }, [currentTopicId]);

  const toggleModule = (moduleId: string) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  const toggleUnit = (unitId: string) => {
    const newExpanded = new Set(expandedUnits);
    if (newExpanded.has(unitId)) {
      newExpanded.delete(unitId);
    } else {
      newExpanded.add(unitId);
    }
    setExpandedUnits(newExpanded);
  };

  const isTopicActive = (topicId: string) => {
    return pathname === `/topic/${topicId}` || currentTopicId === topicId;
  };

  const isModuleActive = (module: Module) => {
    return pathname === `/module/${module.id}`;
  };

  return (
    <aside className="hidden lg:block w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen overflow-y-auto sticky top-0 scroll-smooth">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-800">
        <Link href="/" className="block group">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Engenharia de IA
          </h2>
        </Link>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Curso Online
        </p>
      </div>

      <nav className="p-2">
        {courseStructure.modules.map((module) => (
          <div key={module.id} className="mb-1">
            {/* Module Header */}
            <div className="flex items-center">
              <button
                onClick={() => toggleModule(module.id)}
                className={`flex-1 flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isModuleActive(module)
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <span className="text-xs text-gray-400 w-6">
                  {expandedModules.has(module.id) ? '▼' : '▶'}
                </span>
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 rounded text-blue-600 dark:text-blue-300 text-xs font-bold flex items-center justify-center">
                  {module.number}
                </span>
                <Link
                  href={`/module/${module.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 text-left truncate"
                >
                  {module.title}
                </Link>
              </button>
            </div>

            {/* Module Content */}
            {expandedModules.has(module.id) && (
              <div className="ml-4 mt-1 space-y-1">
                {/* Topics diretamente no módulo */}
                {module.topics.length > 0 && (
                  <div className="ml-6">
                    {module.topics.map((topic) => (
                      <Link
                        key={topic.id}
                        href={`/topic/${topic.id}`}
                        className={`block px-3 py-1.5 rounded-md text-sm transition-colors ${
                          isTopicActive(topic.id)
                            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        <span className="text-blue-500 mr-2">●</span>
                        {topic.title}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Units */}
                {module.units.map((unit) => (
                  <div key={unit.id} className="ml-2">
                    <button
                      onClick={() => toggleUnit(unit.id)}
                      className="w-full flex items-center space-x-2 px-3 py-1.5 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <span className="text-xs text-gray-400">
                        {expandedUnits.has(unit.id) ? '▼' : '▶'}
                      </span>
                      <span className="flex-1 text-left truncate">{unit.title}</span>
                    </button>

                    {expandedUnits.has(unit.id) && (
                      <div className="ml-6 mt-1">
                        {unit.topics.map((topic) => (
                          <Link
                            key={topic.id}
                            href={`/topic/${topic.id}`}
                            className={`block px-3 py-1.5 rounded-md text-sm transition-colors ${
                              isTopicActive(topic.id)
                                ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                            }`}
                          >
                            <span className="text-blue-500 mr-2">●</span>
                            {topic.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}

