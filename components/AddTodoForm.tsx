'use client';

import { useState } from 'react';
import type { Priority } from '@/types';
import { cn } from '@/lib/utils';

interface AddTodoFormProps {
  onAdd: (title: string, description: string, priority: Priority, category: string) => void;
}

const defaultCategories = ['Work', 'Personal', 'Health', 'Learning', 'Finance', 'Shopping'];

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [category, setCategory] = useState('Personal');
  const [customCategory, setCustomCategory] = useState('');
  const [useCustomCategory, setUseCustomCategory] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Please enter a task title');
      return;
    }
    const finalCategory = useCustomCategory ? (customCategory.trim() || 'General') : category;
    onAdd(title.trim(), description.trim(), priority, finalCategory);
    setTitle('');
    setDescription('');
    setPriority('medium');
    setCategory('Personal');
    setCustomCategory('');
    setUseCustomCategory(false);
    setError('');
    setIsExpanded(false);
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isExpanded) {
      e.preventDefault();
      if (title.trim()) {
        onAdd(title.trim(), '', priority, category);
        setTitle('');
        setError('');
      }
    }
  };

  return (
    <div className="card border-blue-200 bg-blue-50/30">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <div className="flex-1">
            <input
              type="text"
              value={title}
              onChange={(e) => { setTitle(e.target.value); setError(''); }}
              onFocus={() => setIsExpanded(true)}
              onKeyDown={handleTitleKeyDown}
              placeholder="Add a new task... (press Enter for quick add)"
              className={cn('input-field', error && 'border-red-400 focus:ring-red-400')}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
          </div>
          <button type="submit" className="btn-primary flex-shrink-0 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span className="hidden sm:inline">Add Task</span>
          </button>
        </div>

        {isExpanded && (
          <div className="mt-4 space-y-3 border-t border-blue-200 pt-4">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a description (optional)"
              rows={2}
              className="input-field resize-none"
            />

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-600 mb-1">Priority</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as Priority)}
                  className="input-field"
                >
                  <option value="high">🔴 High Priority</option>
                  <option value="medium">🟡 Medium Priority</option>
                  <option value="low">🟢 Low Priority</option>
                </select>
              </div>

              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-600 mb-1">Category</label>
                {useCustomCategory ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={customCategory}
                      onChange={(e) => setCustomCategory(e.target.value)}
                      placeholder="Custom category"
                      className="input-field flex-1"
                    />
                    <button
                      type="button"
                      onClick={() => setUseCustomCategory(false)}
                      className="text-xs text-gray-500 hover:text-gray-700 px-2"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="input-field flex-1"
                    >
                      {defaultCategories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => setUseCustomCategory(true)}
                      className="text-xs text-blue-600 hover:text-blue-700 px-2 whitespace-nowrap"
                    >
                      + Custom
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => { setIsExpanded(false); setError(''); }}
                className="btn-secondary text-sm py-1.5 px-3"
              >
                Collapse
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
