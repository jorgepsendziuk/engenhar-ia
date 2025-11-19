'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Module, Unit, Topic } from '@/lib/types';

interface ModuleTreeProps {
  module: Module;
}

export default function ModuleTree({ module }: ModuleTreeProps) {
  const [expandedUnits, setExpandedUnits] = useState<Set<string>>(new Set());

  const toggleUnit = (unitId: string) => {
    const newExpanded = new Set(expandedUnits);
    if (newExpanded.has(unitId)) {
      newExpanded.delete(unitId);
    } else {
      newExpanded.add(unitId);
    }
    setExpandedUnits(newExpanded);
  };

  return (
    <div className="space-y-4">
      {/* Topics diretamente no módulo */}
      {module.topics.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Tópicos
          </h3>
          <div className="space-y-2 ml-4">
            {module.topics.map((topic) => (
              <TopicItem key={topic.id} topic={topic} />
            ))}
          </div>
        </div>
      )}

      {/* Units */}
      {module.units.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Unidades
          </h3>
          <div className="space-y-2">
            {module.units.map((unit) => (
              <div key={unit.id} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                <button
                  onClick={() => toggleUnit(unit.id)}
                  className="flex items-center space-x-2 w-full text-left py-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded px-2 -ml-2"
                >
                  <span className="text-gray-500 dark:text-gray-400">
                    {expandedUnits.has(unit.id) ? '▼' : '▶'}
                  </span>
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {unit.title}
                  </span>
                </button>
                
                {expandedUnits.has(unit.id) && (
                  <div className="ml-6 mt-2 space-y-2">
                    {unit.topics.map((topic) => (
                      <TopicItem key={topic.id} topic={topic} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function TopicItem({ topic }: { topic: Topic }) {
  return (
                <Link
                  href={`/topic/${topic.id}`}
                  className="block py-2 px-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:translate-x-1 transition-all duration-200"
                >
      <div className="flex items-start space-x-2">
        <span className="text-blue-500 mt-1">●</span>
        <span>{topic.title}</span>
      </div>
      {topic.subtopics && topic.subtopics.length > 0 && (
        <div className="ml-6 mt-1 space-y-1">
          {topic.subtopics.map((subtopic) => (
            <div
              key={subtopic.id}
              className="text-sm text-gray-600 dark:text-gray-400 flex items-start space-x-2"
            >
              <span className="text-gray-400 mt-1">○</span>
              <span>{subtopic.title}</span>
            </div>
          ))}
        </div>
      )}
    </Link>
  );
}

