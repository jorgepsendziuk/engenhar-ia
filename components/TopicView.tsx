import { Topic, TopicContent } from '@/lib/types';
import { getModuleForTopic, getUnitForTopic } from '@/lib/course-data';
import Link from 'next/link';
import PrevNextNavigation from './PrevNextNavigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface TopicViewProps {
  topic: Topic;
  content?: TopicContent;
  previous?: { topic: Topic; moduleId: string; unitId?: string } | null;
  next?: { topic: Topic; moduleId: string; unitId?: string } | null;
}

export default function TopicView({ topic, content, previous, next }: TopicViewProps) {
  const module = getModuleForTopic(topic.id);
  const unit = getUnitForTopic(topic.id);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-gray-900 dark:hover:text-gray-100">
            Início
          </Link>
          {module && (
            <>
              <span>/</span>
              <Link
                href={`/module/${module.id}`}
                className="hover:text-gray-900 dark:hover:text-gray-100"
              >
                {module.title}
              </Link>
            </>
          )}
          {unit && (
            <>
              <span>/</span>
              <span className="text-gray-900 dark:text-gray-100">{unit.title}</span>
            </>
          )}
          <span>/</span>
          <span className="text-gray-900 dark:text-gray-100">{topic.title}</span>
        </nav>
      </div>

      {/* Topic Title */}
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 leading-tight">
        {topic.title}
      </h1>

      {/* Content */}
      {content ? (
        <div className="space-y-8">
          {/* Main Content with Markdown */}
          <article className="prose prose-lg dark:prose-invert max-w-none 
            prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-gray-100
            prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4 prose-h1:border-b prose-h1:border-gray-200 dark:prose-h1:border-gray-700 prose-h1:pb-2
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-gray-900 dark:prose-h2:text-gray-100
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
            prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-strong:font-semibold
            prose-ul:list-disc prose-ul:pl-6 prose-ul:my-4
            prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-4
            prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:my-2 prose-li:leading-relaxed
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400
            prose-code:text-blue-600 dark:prose-code:text-blue-400 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
            prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
            prose-hr:border-gray-200 dark:prose-hr:border-gray-700 prose-hr:my-8">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content.content}
            </ReactMarkdown>
          </article>
          
          {/* Resources Section */}
          {content.resources && content.resources.length > 0 && (
            <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                Recursos
              </h2>
              <div className="grid gap-3">
                {content.resources.map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {resource.type === 'link' && (
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      )}
                      {resource.type === 'video' && (
                        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                      {resource.type === 'document' && (
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      )}
                      {resource.type === 'code' && (
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      {resource.url ? (
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline font-medium block"
                        >
                          {resource.title}
                        </a>
                      ) : (
                        <span className="text-gray-900 dark:text-gray-100 font-medium block">
                          {resource.title}
                        </span>
                      )}
                      {resource.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {resource.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
          <p className="text-yellow-800 dark:text-yellow-200">
            Conteúdo ainda não disponível. Este tópico será preenchido em breve.
          </p>
        </div>
      )}

      {/* Subtopics */}
      {topic.subtopics && topic.subtopics.length > 0 && (
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Subtópicos
          </h2>
          <ul className="space-y-2">
            {topic.subtopics.map((subtopic) => (
              <li
                key={subtopic.id}
                className="text-gray-700 dark:text-gray-300 flex items-start space-x-2"
              >
                <span className="text-gray-400 mt-1">○</span>
                <span>{subtopic.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Previous/Next Navigation */}
      <PrevNextNavigation previous={previous} next={next} />
    </div>
  );
}

