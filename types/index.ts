export type Priority = 'high' | 'medium' | 'low';

export type FilterType = 'all' | 'active' | 'completed';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
  category: string;
  createdAt: string;
}

export interface TodoStats {
  total: number;
  completed: number;
  active: number;
  highPriority: number;
  completionRate: number;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface TipItem {
  number: string;
  title: string;
  description: string;
  category: string;
  color: string;
  textColor: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface TechStackItem {
  name: string;
  description: string;
}
