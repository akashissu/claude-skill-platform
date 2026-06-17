'use client';

import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from '@/components/TodoList';
import { AddTodoForm } from '@/components/AddTodoForm';
import { TodoStats } from '@/components/TodoStats';
import { FilterBar } from '@/components/FilterBar';
import type { Todo, FilterType, Priority } from '@/types';

export default function HomePage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('todomaster-todos');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as Todo[];
        setTodos(parsed.map(t => ({ ...t, createdAt: new Date(t.createdAt), updatedAt: new Date(t.updatedAt) })));
      } catch {
        setTodos([]);
      }
    } else {
      const sampleTodos: Todo[] = [
        {
          id: uuidv4(),
          title: 'Review project proposal',
          description: 'Go through the Q3 project proposal and provide feedback to the team',
          completed: false,
          priority: 'high',
          category: 'Work',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          title: 'Buy groceries',
          description: 'Milk, eggs, bread, fruits, and vegetables for the week',
          completed: false,
          priority: 'medium',
          category: 'Personal',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          title: 'Morning workout',
          description: '30 minutes of cardio followed by strength training',
          completed: true,
          priority: 'medium',
          category: 'Health',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          title: 'Read TypeScript documentation',
          description: 'Study advanced TypeScript patterns and generics',
          completed: false,
          priority: 'low',
          category: 'Learning',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
      setTodos(sampleTodos);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('todomaster-todos', JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  const addTodo = (title: string, description: string, priority: Priority, category: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      description,
      completed: false,
      priority,
      category,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
          : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const editTodo = (id: string, updates: Partial<Pick<Todo, 'title' | 'description' | 'priority' | 'category'>>) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, ...updates, updatedAt: new Date() }
          : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'active' && !todo.completed) ||
      (filter === 'completed' && todo.completed);

    const matchesSearch =
      searchQuery === '' ||
      todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      todo.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Tasks</h1>
        <p className="text-gray-500">Stay organized and get things done, one task at a time.</p>
      </div>

      <TodoStats todos={todos} />

      <div className="mt-8">
        <AddTodoForm onAdd={addTodo} />
      </div>

      <div className="mt-6">
        <FilterBar
          filter={filter}
          onFilterChange={setFilter}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
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
            {searchQuery ? 'No tasks match your search' : filter === 'completed' ? 'No completed tasks yet' : filter === 'active' ? 'No active tasks — great job!' : 'No tasks yet'}
          </h3>
          <p className="text-gray-400">
            {searchQuery ? 'Try a different search term' : 'Add a new task above to get started'}
          </p>
        </div>
      )}
    </div>
  );
}
