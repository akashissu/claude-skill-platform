'use client';

import { useMemo, useState } from 'react';
import { TodoInput } from '@/components/TodoInput';
import { TodoList } from '@/components/TodoList';
import { TodoSummary } from '@/components/TodoSummary';

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  priority: string;
  category: string;
};

const createTodoId = () => {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const initialTodos: Todo[] = [
  {
    id: createTodoId(),
    text: 'Add your first todo item',
    completed: false
  },
  {
    id: createTodoId(),
    text: 'Try marking a task complete',
    completed: true
  }
];

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const remainingCount = useMemo(
    () => todos.filter((todo) => !todo.completed).length,
    [todos]
  );

  const handleAddTodo = (text: string) => {
    const trimmedText = text.trim();

    if (!trimmedText) {
      return;
    }

    setTodos((currentTodos) => [
      {
        id: createTodoId(),
        text: trimmedText,
        completed: false
      },
      ...currentTodos
    ]);
  };

  const handleToggleTodo = (id: string) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return (
    <section className="todo-shell" aria-labelledby="todo-title">
      <div className="todo-card">
        <div className="todo-copy">
          <p className="todo-eyebrow">PAP-420</p>
          <h1 id="todo-title">Simple React Todo List</h1>
          <p className="todo-subtitle">
            Add tasks, track what is complete, and remove items when they are done.
          </p>
        </div>

        <TodoInput onAddTodo={handleAddTodo} />
        <TodoSummary totalCount={todos.length} remainingCount={remainingCount} />
        <TodoList
          todos={todos}
          onToggleTodo={handleToggleTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>
    </section>
  );
}
