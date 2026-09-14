export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'mobile' | 'system' | 'automation';
  summary: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  architectureHighlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  date: string;
}

export interface Skill {
  name: string;
  level: 'Temel' | 'Orta' | 'İyi' | 'Pratik Uygulamalı';
  description: string;
  tag?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: Skill[];
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  deliverables: string[];
  suitableFor: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string;
  iconName: string;
}
