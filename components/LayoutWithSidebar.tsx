'use client';

import Sidebar from './Sidebar';
import MobileSidebar from './MobileSidebar';

interface LayoutWithSidebarProps {
  children: React.ReactNode;
  currentTopicId?: string;
}

export default function LayoutWithSidebar({ children, currentTopicId }: LayoutWithSidebarProps) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <MobileSidebar currentTopicId={currentTopicId} />
      <Sidebar currentTopicId={currentTopicId} />
      <main className="flex-1 overflow-x-hidden lg:ml-0">
        {children}
      </main>
    </div>
  );
}

