import Link from 'next/link';
import { Module, Topic } from '@/lib/types';

interface NavigationProps {
  items: Array<{ label: string; href: string }>;
}

export default function Navigation({ items }: NavigationProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
      <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-100">
        Início
      </Link>
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          <span className="mx-2">/</span>
          <Link
            href={item.href}
            className="hover:text-gray-900 dark:hover:text-gray-100"
          >
            {item.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}

