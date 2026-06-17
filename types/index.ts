export type Priority = "low" | "medium" | "high";

export type FilterOption = "all" | "active" | "completed" | "high" | "medium" | "low";

export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
  category: string;
  createdAt: string;
  dueDate: string | null;
}

export interface AppSettings {
  defaultPriority: Priority;
  defaultCategory: string;
  showCompletedTasks: boolean;
  enableNotifications: boolean;
  theme: "light" | "dark";
  categories: string[];
}

export interface StatsData {
  total: number;
  completed: number;
  active: number;
  overdue: number;
  completionRate: number;
  byPriority: {
    high: number;
    medium: number;
    low: number;
  };
  byCategory: Record<string, number>;
}

export interface NavLink {
  href: string;
  label: string;
  icon?: string;
}
