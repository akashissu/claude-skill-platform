import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { Priority } from '@/types';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'Just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays}d ago`;

  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function getPriorityColor(priority: Priority): string {
  switch (priority) {
    case 'high':
      return 'bg-red-100 text-red-700';
    case 'medium':
      return 'bg-yellow-100 text-yellow-700';
    case 'low':
      return 'bg-green-100 text-green-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
}

export function getPriorityLabel(priority: Priority): string {
  switch (priority) {
    case 'high':
      return '🔴 High';
    case 'medium':
      return '🟡 Medium';
    case 'low':
      return '🟢 Low';
    default:
      return priority;
  }
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    Work: 'bg-blue-100 text-blue-700',
    Personal: 'bg-purple-100 text-purple-700',
    Health: 'bg-green-100 text-green-700',
    Learning: 'bg-orange-100 text-orange-700',
    Finance: 'bg-yellow-100 text-yellow-700',
    Shopping: 'bg-pink-100 text-pink-700',
  };
  return colors[category] || 'bg-gray-100 text-gray-700';
}

export function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    Work: '💼',
    Personal: '🏠',
    Health: '💪',
    Learning: '📚',
    Finance: '💰',
    Shopping: '🛒',
  };
  return icons[category] || '📌';
}

export function sortTodosByPriority(a: { priority: Priority }, b: { priority: Priority }): number {
  const order: Record<Priority, number> = { high: 0, medium: 1, low: 2 };
  return order[a.priority] - order[b.priority];
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}
