export interface SubTopic {
  id: string;
  title: string;
}

export interface Topic {
  id: string;
  title: string;
  subtopics?: SubTopic[];
}

export interface Unit {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Module {
  id: string;
  number: number;
  title: string;
  units: Unit[];
  topics: Topic[];
}

export interface CourseStructure {
  title: string;
  modules: Module[];
}

export interface TopicContent {
  id: string;
  title: string;
  content: string;
  resources?: Resource[];
}

export interface Resource {
  type: 'link' | 'video' | 'document' | 'code';
  title: string;
  url?: string;
  description?: string;
}

