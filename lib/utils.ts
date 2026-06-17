import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}

export function formatTimeAgo(timestamp: string): string {
  const now = new Date();
  const then = new Date(timestamp);
  const diffMs = now.getTime() - then.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);

  if (diffSecs < 60) return 'just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  return then.toLocaleDateString();
}

export function getTrackColor(track: string): string {
  const colors: Record<string, string> = {
    'AI & ML': 'bg-gradient-to-br from-purple-900 to-purple-700',
    'Web Dev': 'bg-gradient-to-br from-blue-900 to-blue-700',
    'Cloud': 'bg-gradient-to-br from-sky-900 to-sky-700',
    'Security': 'bg-gradient-to-br from-red-900 to-red-700',
    'DevOps': 'bg-gradient-to-br from-orange-900 to-orange-700',
    'Product': 'bg-gradient-to-br from-green-900 to-green-700',
    'Leadership': 'bg-gradient-to-br from-amber-900 to-amber-700',
  };
  return colors[track] || 'bg-gradient-to-br from-gray-800 to-gray-700';
}

export function truncate(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}
