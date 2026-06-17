'use client';

import { useState } from 'react';
import type { Todo, Priority } from '@/types';
import { cn } from '@/lib/utils';

interface AddTodoFormProps {
  onAdd: (text: string, priority: Todo['priority'], category: string) => void;
}

const CATEGORIES = ['General', 'Work', 'Personal', 'Shopping', 'Health', 'Finance', 'Learning', 'Home'];

const PRIORITIES: { value: Priority; label: string; color: string }[] = [
  { value: 'high', label: 'High', color: 'text-red-600' },
  { value: 'medium', label: 'Medium', color: 'text-yellow-600' },
  { value: 'low', label: 'Low', color: 'text-green-600' },
];

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [category, setCategory] = useState('General');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed, priority, category);
    setText('');
    setPriority('medium');
    setCategory('General');
    setIsExpanded(false);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            placeholder="Add a new task..."
            className="input-field flex-1"
            aria-label="New task text"
          />
          <button
            type="submit"
            disabled={!text.trim()}
            className={cn(
              'btn-primary flex-shrink-0 flex items-center gap-2',
              !text.trim() && 'opacity-50 cursor-not-allowed'
            )}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span className="hidden sm:inline">Add Task</span>
          </button>
        </div>

        {isExpanded && (
          <div className="mt-4 flex flex-wrap gap-4 pt-4 border-t border-gray-100">
            <div className="flex-1 min-w-40">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Priority
              </label>
              <div className="flex gap-2">
                {PRIORITIES.map(p => (
                  <button
                    key={p.value}
                    type="button"
                    onClick={() => setPriority(p.value)}
                    className={cn(
                      'flex-1 py-1.5 px-3 rounded-lg text-sm font-medium border transition-all duration-200',
                      priority === p.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                    )}
                  >
                    <span className={priority === p.value ? '' : p.color}>{p.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 min-w-40">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Category
              </label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="input-field"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
