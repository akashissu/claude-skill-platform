'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Todo } from '@/types';
import { formatDate } from '@/lib/utils';

export default function StatsPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('todomaster-todos');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Todo[];
        setTodos(parsed);
      } catch {
        setTodos([]);
      }
    }
    setIsLoaded(true);
  }, []);

  const totalTasks = todos.length;
  const completedTasks = todos.filter(t => t.completed).length;
  const activeTasks = todos.filter(t => !t.completed).length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const highPriority = todos.filter(t => t.priority === 'high').length;
  const mediumPriority = todos.filter(t => t.priority === 'medium').length;
  const lowPriority = todos.filter(t => t.priority === 'low').length;

  const categoryMap: Record<string, number> = {};
  todos.forEach(todo => {
    categoryMap[todo.category] = (categoryMap[todo.category] || 0) + 1;
  });
  const categories = Object.entries(categoryMap).sort((a, b) => b[1] - a[1]);

  const recentCompleted = todos
    .filter(t => t.completed)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  if (!isLoaded) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <div className="text-gray-400 text-lg">Loading statistics...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Statistics</h1>
        <p className="text-gray-500 text-lg">Track your productivity and progress over time</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="card text-center">
          <div className="text-4xl font-bold text-blue-600 mb-1">{totalTasks}</div>
          <div className="text-sm text-gray-500 font-medium">Total Tasks</div>
        </div>
        <div className="card text-center">
          <div className="text-4xl font-bold text-green-600 mb-1">{completedTasks}</div>
          <div className="text-sm text-gray-500 font-medium">Completed</div>
        </div>
        <div className="card text-center">
          <div className="text-4xl font-bold text-orange-500 mb-1">{activeTasks}</div>
          <div className="text-sm text-gray-500 font-medium">Active</div>
        </div>
        <div className="card text-center">
          <div className="text-4xl font-bold text-purple-600 mb-1">{completionRate}%</div>
          <div className="text-sm text-gray-500 font-medium">Completion Rate</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Priority Breakdown</h2>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-red-600 font-medium">High Priority</span>
                <span className="text-gray-600">{highPriority} tasks</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: totalTasks > 0 ? `${(highPriority / totalTasks) * 100}%` : '0%' }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-yellow-600 font-medium">Medium Priority</span>
                <span className="text-gray-600">{mediumPriority} tasks</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: totalTasks > 0 ? `${(mediumPriority / totalTasks) * 100}%` : '0%' }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-green-600 font-medium">Low Priority</span>
                <span className="text-gray-600">{lowPriority} tasks</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: totalTasks > 0 ? `${(lowPriority / totalTasks) * 100}%` : '0%' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
          {categories.length > 0 ? (
            <div className="space-y-2">
              {categories.map(([cat, count]) => (
                <div key={cat} className="flex items-center justify-between">
                  <span className="text-gray-700 text-sm">{cat}</span>
                  <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full">
                    {count}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-sm">No categories yet.</p>
          )}
        </div>
      </div>

      <div className="card mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Completion Progress</h2>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="w-full bg-gray-100 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-blue-500 to-green-500 h-4 rounded-full transition-all duration-700"
                style={{ width: `${completionRate}%` }}
              />
            </div>
          </div>
          <span className="text-lg font-bold text-gray-700 w-16 text-right">{completionRate}%</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {completedTasks} of {totalTasks} tasks completed
        </p>
      </div>

      {recentCompleted.length > 0 && (
        <div className="card mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recently Completed</h2>
          <div className="space-y-3">
            {recentCompleted.map(todo => (
              <div key={todo.id} className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
                <span className="text-green-500 text-lg">✓</span>
                <div className="flex-1">
                  <p className="text-gray-700 text-sm line-through opacity-70">{todo.text}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{formatDate(todo.createdAt)}</p>
                </div>
                <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{todo.category}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="text-center">
        <Link href="/" className="btn-primary inline-block">
          Back to Tasks
        </Link>
      </div>
    </div>
  );
}
