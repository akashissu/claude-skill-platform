'use client';

import type { Todo } from '@/types';

interface TodoStatsProps {
  todos: Todo[];
}

export function TodoStats({ todos }: TodoStatsProps) {
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const active = total - completed;
  const highPriority = todos.filter(t => t.priority === 'high' && !t.completed).length;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  const stats = [
    {
      label: 'Total Tasks',
      value: total,
      icon: '📋',
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      valueColor: 'text-blue-600',
    },
    {
      label: 'Active',
      value: active,
      icon: '⏳',
      color: 'bg-orange-50 text-orange-700 border-orange-200',
      valueColor: 'text-orange-600',
    },
    {
      label: 'Completed',
      value: completed,
      icon: '✅',
      color: 'bg-green-50 text-green-700 border-green-200',
      valueColor: 'text-green-600',
    },
    {
      label: 'High Priority',
      value: highPriority,
      icon: '🔴',
      color: 'bg-red-50 text-red-700 border-red-200',
      valueColor: 'text-red-600',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-xl border p-4 ${stat.color}`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-lg">{stat.icon}</span>
              <span className={`text-2xl font-bold ${stat.valueColor}`}>{stat.value}</span>
            </div>
            <p className="text-xs font-medium opacity-80">{stat.label}</p>
          </div>
        ))}
      </div>

      {total > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Overall Progress</span>
            <span className="text-sm font-bold text-blue-600">{completionRate}% complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${completionRate}%` }}
            />
          </div>
          {completionRate === 100 && total > 0 && (
            <p className="text-sm text-green-600 font-medium mt-2 text-center">🎉 All tasks completed! Great work!</p>
          )}
        </div>
      )}
    </div>
  );
}
