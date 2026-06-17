export type Priority = 'high' | 'medium' | 'low';

export type FilterType = 'all' | 'active' | 'completed';

export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoStats {
  total: number;
  completed: number;
  active: number;
  highPriority: number;
  completionRate: number;
}

export interface CategoryStats {
  category: string;
  total: number;
  completed: number;
  active: number;
  percentage: number;
}

export interface NavLink {
  href: string;
  label: string;
}
