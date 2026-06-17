'use client';

import type { Todo } from '@/types';

interface TodoStatsProps {
  todos: Todo[];
}

export function TodoStats({ todos }: TodoStatsProps) {
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const active = todos.filter(t => !t.completed).length;
  const highPriority = todos.filter(t => t.priority === 'high' && !t.completed).length;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  if (total === 0) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
        <div className="text-2xl font-bold text-gray-900">{total}</div>
        <div className="text-xs text-gray-500 font-medium mt-0.5">Total</div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
        <div className="text-2xl font-bold text-orange-500">{active}</div>
        <div className="text-xs text-gray-500 font-medium mt-0.5">Active</div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
        <div className="text-2xl font-bold text-green-600">{completed}</div>
        <div className="text-xs text-gray-500 font-medium mt-0.5">Done</div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
        <div className="text-2xl font-bold text-red-500">{highPriority}</div>
        <div className="text-xs text-gray-500 font-medium mt-0.5">High Priority</div>
      </div>

      {total > 0 && (
        <div className="col-span-2 sm:col-span-4 bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Overall Progress</span>
            <span className="text-sm font-bold text-gray-900">{completionRate}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${completionRate}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
