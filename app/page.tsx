import { getAllModules } from '@/lib/course-data';
import ModuleCard from '@/components/ModuleCard';
import LayoutWithSidebar from '@/components/LayoutWithSidebar';

export default function Home() {
  const modules = getAllModules();

  return (
    <LayoutWithSidebar>
      <div className="container mx-auto px-6 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Engenharia de Software em IA Aplicada
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Sistema de gerenciamento e visualização do curso
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </LayoutWithSidebar>
  );
}

