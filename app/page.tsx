'use client';

import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from '@/components/TodoList';
import { AddTodoForm } from '@/components/AddTodoForm';
import { TodoStats } from '@/components/TodoStats';
import { FilterBar } from '@/components/FilterBar';
import type { Todo, FilterType } from '@/types';

export default function HomePage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
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
    } else {
      const defaultTodos: Todo[] = [
        {
          id: uuidv4(),
          text: 'Welcome to TodoMaster! Click the checkbox to complete this task.',
          completed: false,
          priority: 'medium',
          category: 'General',
          createdAt: new Date().toISOString(),
        },
        {
          id: uuidv4(),
          text: 'Try adding a new task using the form above.',
          completed: false,
          priority: 'high',
          category: 'Getting Started',
          createdAt: new Date().toISOString(),
        },
        {
          id: uuidv4(),
          text: 'Delete a task by clicking the trash icon.',
          completed: true,
          priority: 'low',
          category: 'Getting Started',
          createdAt: new Date().toISOString(),
        },
      ];
      setTodos(defaultTodos);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('todomaster-todos', JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  const addTodo = (text: string, priority: Todo['priority'], category: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
      priority,
      category,
      createdAt: new Date().toISOString(),
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">My Tasks</h1>
        <p className="text-gray-500 text-lg">Stay organized and get things done</p>
      </div>

      <TodoStats todos={todos} />

      <div className="mt-6">
        <AddTodoForm onAdd={addTodo} />
      </div>

      <div className="mt-6">
        <FilterBar
          filter={filter}
          onFilterChange={setFilter}
          onClearCompleted={clearCompleted}
          completedCount={todos.filter(t => t.completed).length}
        />
      </div>

      <div className="mt-4">
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </div>

      {filteredTodos.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">📋</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            {filter === 'completed' ? 'No completed tasks yet' : filter === 'active' ? 'No active tasks' : 'No tasks yet'}
          </h3>
          <p className="text-gray-400">
            {filter === 'all' ? 'Add your first task above to get started!' : 'Switch filters to see other tasks.'}
          </p>
        </div>
      )}
    </div>
  );
}
