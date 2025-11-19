import { notFound } from 'next/navigation';
import { getModuleById } from '@/lib/course-data';
import ModuleTree from '@/components/ModuleTree';
import LayoutWithSidebar from '@/components/LayoutWithSidebar';

interface ModulePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { id } = await params;
  const module = getModuleById(id);

  if (!module) {
    notFound();
  }

  const totalTopics = module.topics.length + 
    module.units.reduce((acc, unit) => acc + unit.topics.length, 0);

  return (
    <LayoutWithSidebar>
      <div className="container mx-auto px-6 py-8">
        {/* Module Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 dark:text-blue-300 font-bold text-2xl">
                {module.number}
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                {module.title}
              </h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <span>
              {module.units.length > 0 ? `${module.units.length} unidades` : 'Sem unidades'}
            </span>
            <span>•</span>
            <span>{totalTopics} tópicos</span>
          </div>
        </header>

        {/* Module Tree */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <ModuleTree module={module} />
        </div>
      </div>
    </LayoutWithSidebar>
  );
}

