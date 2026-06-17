'use client';

import { useState } from 'react';
import type { Todo, Priority } from '@/types';
import { cn, formatDate, getPriorityColor, getPriorityLabel } from '@/lib/utils';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, updates: Partial<Pick<Todo, 'title' | 'description' | 'priority' | 'category'>>) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);
  const [editPriority, setEditPriority] = useState<Priority>(todo.priority);
  const [editCategory, setEditCategory] = useState(todo.category);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleSaveEdit = () => {
    if (editTitle.trim()) {
      onEdit(todo.id, {
        title: editTitle.trim(),
        description: editDescription.trim(),
        priority: editPriority,
        category: editCategory.trim() || 'General',
      });
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    setEditPriority(todo.priority);
    setEditCategory(todo.category);
    setIsEditing(false);
  };

  const priorityColor = getPriorityColor(todo.priority);

  if (isEditing) {
    return (
      <div className="card border-blue-300 shadow-md">
        <div className="space-y-3">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="input-field font-medium"
            placeholder="Task title"
            autoFocus
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            className="input-field resize-none"
            rows={2}
            placeholder="Description (optional)"
          />
          <div className="flex gap-3">
            <select
              value={editPriority}
              onChange={(e) => setEditPriority(e.target.value as Priority)}
              className="input-field flex-1"
            >
              <option value="high">High Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="low">Low Priority</option>
            </select>
            <input
              type="text"
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
              className="input-field flex-1"
              placeholder="Category"
            />
          </div>
          <div className="flex gap-2 justify-end">
            <button onClick={handleCancelEdit} className="btn-secondary text-sm py-1.5 px-3">
              Cancel
            </button>
            <button onClick={handleSaveEdit} className="btn-primary text-sm py-1.5 px-3">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'card group transition-all duration-200 hover:shadow-md',
        todo.completed && 'opacity-60'
      )}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(todo.id)}
          className={cn(
            'flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 transition-all duration-200',
            todo.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-blue-400'
          )}
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {todo.completed && (
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3
              className={cn(
                'font-semibold text-gray-900 leading-snug',
                todo.completed && 'line-through text-gray-400'
              )}
            >
              {todo.title}
            </h3>
            <div className="flex items-center gap-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => setIsEditing(true)}
                className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                aria-label="Edit task"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              {showConfirmDelete ? (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onDelete(todo.id)}
                    className="p-1.5 text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors text-xs font-medium px-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setShowConfirmDelete(false)}
                    className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors text-xs"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowConfirmDelete(true)}
                  className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  aria-label="Delete task"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {todo.description && (
            <p className={cn('text-sm text-gray-500 mt-1 leading-relaxed', todo.completed && 'line-through')}>
              {todo.description}
            </p>
          )}

          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <span className={cn('text-xs font-medium px-2 py-0.5 rounded-full', priorityColor)}>
              {getPriorityLabel(todo.priority)}
            </span>
            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
              {todo.category}
            </span>
            <span className="text-xs text-gray-400">
              {formatDate(todo.createdAt)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
