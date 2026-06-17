"use client";

import { useState } from "react";
import { Todo } from "@/types";
import { TodoItem } from "@/components/TodoItem";

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updates: Partial<Todo>) => void;
}

export function TodoList({ todos, onToggle, onDelete, onUpdate }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">📋</div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No tasks found</h3>
        <p className="text-gray-400">
          Try adjusting your filters or add a new task to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 animate-fade-in">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
      <p className="text-center text-sm text-gray-400 pt-2">
        Showing {todos.length} task{todos.length !== 1 ? "s" : ""}
      </p>
    </div>
  );
}
