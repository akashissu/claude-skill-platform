'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Todo } from '@/types';
import { getCategoryColor, getCategoryIcon } from '@/lib/utils';

export default function CategoriesPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('todomaster-todos');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Todo[];
        setTodos(parsed.map(t => ({ ...t, createdAt: new Date(t.createdAt), updatedAt: new Date(t.updatedAt) })));
      } catch {
        setTodos([]);
      }
    }
  }, []);

  const defaultCategories = ['Work', 'Personal', 'Health', 'Learning', 'Finance', 'Shopping'];

  const allCategories = Array.from(
    new Set([...defaultCategories, ...todos.map(t => t.category)])
  );

  const getCategoryStats = (category: string) => {
    const categoryTodos = todos.filter(t => t.category === category);
    const completed = categoryTodos.filter(t => t.completed).length;
    const total = categoryTodos.length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, active: total - completed, percentage };
  };

  const categoryDescriptions: Record<string, string> = {
    Work: 'Professional tasks, meetings, deadlines, and career goals',
    Personal: 'Personal errands, home tasks, and life admin',
    Health: 'Fitness goals, medical appointments, and wellness habits',
    Learning: 'Books to read, courses to take, and skills to develop',
    Finance: 'Bills, budgeting, investments, and financial planning',
    Shopping: 'Grocery lists, wish lists, and purchase reminders',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Task Categories</h1>
        <p className="text-gray-500">
          View your tasks organized by category. Click on a category to filter your task list.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allCategories.map((category) => {
          const stats = getCategoryStats(category);
          const colorClass = getCategoryColor(category);
          const icon = getCategoryIcon(category);

          return (
            <Link key={category} href={`/?category=${category}`}>
              <div className="card hover:shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-0.5">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{icon}</span>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">{category}</h2>
                      <p className="text-xs text-gray-500">
                        {categoryDescriptions[category] || 'Custom category'}
                      </p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${colorClass}`}>
                    {stats.total} tasks
                  </span>
                </div>

                {stats.total > 0 ? (
                  <>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>{stats.completed} completed</span>
                      <span>{stats.active} active</span>
                      <span className="font-semibold text-blue-600">{stats.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${stats.percentage}%` }}
                      />
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-gray-400 italic">No tasks in this category yet</p>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="btn-primary inline-block">
          Manage All Tasks
        </Link>
      </div>
    </div>
  );
}
