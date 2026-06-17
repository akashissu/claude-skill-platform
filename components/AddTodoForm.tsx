"use client";

import { useState } from "react";
import { Priority } from "@/types";

interface AddTodoFormProps {
  onAdd: (title: string, description: string, priority: Priority, category: string, dueDate: string | null) => void;
}

const DEFAULT_CATEGORIES = ["Personal", "Work", "Shopping", "Health", "Finance", "Education"];

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("medium");
  const [category, setCategory] = useState("Personal");
  const [dueDate, setDueDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Task title is required.");
      return;
    }
    onAdd(title.trim(), description.trim(), priority, category, dueDate || null);
    setTitle("");
    setDescription("");
    setPriority("medium");
    setCategory("Personal");
    setDueDate("");
    setError("");
    setIsExpanded(false);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (error) setError("");
            }}
            onFocus={() => setIsExpanded(true)}
            placeholder="Add a new task... (e.g., Buy groceries, Finish report)"
            className={`input-field text-base ${
              error ? "border-red-400 focus:ring-red-400" : ""
            }`}
          />
          <button type="submit" className="btn-primary whitespace-nowrap flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Task
          </button>
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        {isExpanded && (
          <div className="mt-4 space-y-3 animate-slide-in">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a description (optional)"
              className="input-field resize-none"
              rows={2}
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Priority</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value as Priority)}
                  className="input-field"
                >
                  <option value="low">🟢 Low</option>
                  <option value="medium">🟡 Medium</option>
                  <option value="high">🔴 High</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="input-field"
                >
                  {DEFAULT_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Due Date</label>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="input-field"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setIsExpanded(false)}
                className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                Collapse ↑
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
