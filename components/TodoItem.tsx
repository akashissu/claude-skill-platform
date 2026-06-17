"use client";

import { useState } from "react";
import { Todo, Priority } from "@/types";
import { formatDate, getPriorityColor, getPriorityLabel } from "@/lib/utils";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updates: Partial<Todo>) => void;
}

export function TodoItem({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);
  const [editPriority, setEditPriority] = useState<Priority>(todo.priority);
  const [editDueDate, setEditDueDate] = useState(todo.dueDate || "");

  const isOverdue = todo.dueDate && !todo.completed && new Date(todo.dueDate) < new Date();

  const handleSave = () => {
    if (editTitle.trim()) {
      onUpdate(todo.id, {
        title: editTitle.trim(),
        description: editDescription.trim(),
        priority: editPriority,
        dueDate: editDueDate || null,
      });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    setEditPriority(todo.priority);
    setEditDueDate(todo.dueDate || "");
    setIsEditing(false);
  };

  return (
    <div
      className={`card transition-all duration-200 hover:shadow-md ${
        todo.completed ? "opacity-60" : ""
      } ${isOverdue ? "border-red-200 bg-red-50" : ""}`}
    >
      {isEditing ? (
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
              className="input-field"
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
            <input
              type="date"
              value={editDueDate}
              onChange={(e) => setEditDueDate(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="flex gap-2 justify-end">
            <button onClick={handleCancel} className="btn-secondary text-sm py-1.5 px-3">
              Cancel
            </button>
            <button onClick={handleSave} className="btn-primary text-sm py-1.5 px-3">
              Save Changes
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-start gap-3">
          <button
            onClick={() => onToggle(todo.id)}
            className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200 ${
              todo.completed
                ? "bg-green-500 border-green-500 text-white"
                : "border-gray-300 hover:border-blue-500"
            }`}
            aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
          >
            {todo.completed && (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <h3
                className={`font-medium text-gray-900 leading-snug ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.title}
              </h3>
              <div className="flex items-center gap-1 flex-shrink-0">
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  aria-label="Edit task"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button
                  onClick={() => onDelete(todo.id)}
                  className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  aria-label="Delete task"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>

            {todo.description && (
              <p className={`text-sm mt-1 leading-relaxed ${
                todo.completed ? "text-gray-400" : "text-gray-500"
              }`}>
                {todo.description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                  getPriorityColor(todo.priority)
                }`}
              >
                {getPriorityLabel(todo.priority)}
              </span>

              {todo.category && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                  {todo.category}
                </span>
              )}

              {todo.dueDate && (
                <span
                  className={`inline-flex items-center gap-1 text-xs ${
                    isOverdue ? "text-red-600 font-medium" : "text-gray-400"
                  }`}
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {isOverdue ? "Overdue: " : "Due: "}{formatDate(todo.dueDate)}
                </span>
              )}

              <span className="text-xs text-gray-300 ml-auto">
                {formatDate(todo.createdAt)}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
