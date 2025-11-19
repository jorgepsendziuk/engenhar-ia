import { CourseStructure, Module, Unit, Topic } from './types';
import courseStructureData from '../data/course-structure.json';

const courseStructure = courseStructureData as CourseStructure;

export function getCourseStructure(): CourseStructure {
  return courseStructure;
}

export function getAllModules(): Module[] {
  return courseStructure.modules;
}

export function getModuleById(id: string): Module | undefined {
  return courseStructure.modules.find(module => module.id === id);
}

export function getModuleByNumber(number: number): Module | undefined {
  return courseStructure.modules.find(module => module.number === number);
}

export function getAllTopics(): Topic[] {
  const topics: Topic[] = [];
  
  courseStructure.modules.forEach(module => {
    // Topics diretamente no módulo
    topics.push(...module.topics);
    
    // Topics dentro das unidades
    module.units.forEach(unit => {
      topics.push(...unit.topics);
    });
  });
  
  return topics;
}

export function getTopicById(id: string): Topic | null {
  for (const module of courseStructure.modules) {
    // Buscar em topics do módulo
    const topicInModule = module.topics.find(topic => topic.id === id);
    if (topicInModule) return topicInModule;
    
    // Buscar em topics das unidades
    for (const unit of module.units) {
      const topicInUnit = unit.topics.find(topic => topic.id === id);
      if (topicInUnit) return topicInUnit;
    }
  }
  
  return null;
}

export function getModuleForTopic(topicId: string): Module | null {
  for (const module of courseStructure.modules) {
    // Verificar topics do módulo
    if (module.topics.some(topic => topic.id === topicId)) {
      return module;
    }
    
    // Verificar topics das unidades
    for (const unit of module.units) {
      if (unit.topics.some(topic => topic.id === topicId)) {
        return module;
      }
    }
  }
  
  return null;
}

export function getUnitForTopic(topicId: string): Unit | null {
  for (const module of courseStructure.modules) {
    for (const unit of module.units) {
      if (unit.topics.some(topic => topic.id === topicId)) {
        return unit;
      }
    }
  }
  
  return null;
}

export function getAllTopicsInModule(moduleId: string): Topic[] {
  const module = getModuleById(moduleId);
  if (!module) return [];
  
  const topics: Topic[] = [...module.topics];
  
  module.units.forEach(unit => {
    topics.push(...unit.topics);
  });
  
  return topics;
}

export function getAllTopicsInUnit(unitId: string): Topic[] {
  for (const module of courseStructure.modules) {
    const unit = module.units.find(u => u.id === unitId);
    if (unit) {
      return unit.topics;
    }
  }
  
  return [];
}

// Retorna todos os tópicos em ordem sequencial (para navegação)
export function getAllTopicsInOrder(): Array<{ topic: Topic; moduleId: string; unitId?: string }> {
  const ordered: Array<{ topic: Topic; moduleId: string; unitId?: string }> = [];
  
  courseStructure.modules.forEach(module => {
    // Topics diretamente no módulo
    module.topics.forEach(topic => {
      ordered.push({ topic, moduleId: module.id });
    });
    
    // Topics dentro das unidades
    module.units.forEach(unit => {
      unit.topics.forEach(topic => {
        ordered.push({ topic, moduleId: module.id, unitId: unit.id });
      });
    });
  });
  
  return ordered;
}

// Retorna o tópico anterior e próximo
export function getPreviousAndNextTopics(topicId: string): {
  previous: { topic: Topic; moduleId: string; unitId?: string } | null;
  next: { topic: Topic; moduleId: string; unitId?: string } | null;
} {
  const allTopics = getAllTopicsInOrder();
  const currentIndex = allTopics.findIndex(item => item.topic.id === topicId);
  
  if (currentIndex === -1) {
    return { previous: null, next: null };
  }
  
  return {
    previous: currentIndex > 0 ? allTopics[currentIndex - 1] : null,
    next: currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null,
  };
}

