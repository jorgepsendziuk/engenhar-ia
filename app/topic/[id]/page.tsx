import { notFound } from 'next/navigation';
import { getTopicById, getPreviousAndNextTopics } from '@/lib/course-data';
import TopicView from '@/components/TopicView';
import LayoutWithSidebar from '@/components/LayoutWithSidebar';
import { TopicContent } from '@/lib/types';
import fs from 'fs';
import path from 'path';

interface TopicPageProps {
  params: Promise<{
    id: string;
  }>;
}

function loadTopicContent(topicId: string): TopicContent | null {
  try {
    const contentPath = path.join(process.cwd(), 'data', 'content', `${topicId}.json`);
    if (fs.existsSync(contentPath)) {
      const fileContent = fs.readFileSync(contentPath, 'utf-8');
      return JSON.parse(fileContent) as TopicContent;
    }
  } catch (error) {
    console.error(`Error loading content for topic ${topicId}:`, error);
  }
  return null;
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { id } = await params;
  const topic = getTopicById(id);

  if (!topic) {
    notFound();
  }

  const content = loadTopicContent(id);
  const { previous, next } = getPreviousAndNextTopics(id);

  return (
    <LayoutWithSidebar currentTopicId={id}>
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl">
          <TopicView 
            topic={topic} 
            content={content || undefined}
            previous={previous}
            next={next}
          />
        </div>
      </div>
    </LayoutWithSidebar>
  );
}

