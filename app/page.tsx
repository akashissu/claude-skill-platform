"use client";

import { useState, useEffect } from "react";
import { TodoList } from "@/components/TodoList";
import { AddTodoForm } from "@/components/AddTodoForm";
import { TodoStats } from "@/components/TodoStats";
import { FilterBar } from "@/components/FilterBar";
import { Todo, FilterOption, Priority } from "@/types";
import { generateId, getFromStorage, saveToStorage } from "@/lib/utils";

const STORAGE_KEY = "taskflow_todos";

export default function HomePage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterOption>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = getFromStorage<Todo[]>(STORAGE_KEY);
    if (stored) {
      setTodos(stored);
    } else {
      const defaultTodos: Todo[] = [
        {
          id: generateId(),
          title: "Welcome to TaskFlow!",
          description: "This is your first task. Click the checkbox to mark it as complete.",
          completed: false,
          priority: "medium",
          category: "Personal",
          createdAt: new Date().toISOString(),
          dueDate: null,
        },
        {
          id: generateId(),
          title: "Explore the app features",
          description: "Check out the Stats page and Settings to customize your experience.",
          completed: false,
          priority: "high",
          category: "Work",
          createdAt: new Date().toISOString(),
          dueDate: null,
        },
        {
          id: generateId(),
          title: "Add your first custom task",
          description: "Use the form above to create a new task with a title, description, and priority.",
          completed: true,
          priority: "low",
          category: "Personal",
          createdAt: new Date().toISOString(),
          dueDate: null,
        },
      ];
      setTodos(defaultTodos);
      saveToStorage(STORAGE_KEY, defaultTodos);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      saveToStorage(STORAGE_KEY, todos);
    }
  }, [todos, isLoaded]);

  const addTodo = (title: string, description: string, priority: Priority, category: string, dueDate: string | null) => {
    const newTodo: Todo = {
      id: generateId(),
      title,
      description,
      completed: false,
      priority,
      category,
      createdAt: new Date().toISOString(),
      dueDate,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id: string, updates: Partial<Todo>) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo))
    );
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesFilter =
      filter === "all"
        ? true
        : filter === "active"
        ? !todo.completed
        : filter === "completed"
        ? todo.completed
        : todo.priority === filter;

    const matchesSearch =
      searchQuery === ""
        ? true
        : todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          todo.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          My Task Board
        </h1>
        <p className="text-gray-500 text-lg">
          Stay organized and get things done, one task at a time.
        </p>
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
          completedCount={todos.filter((t) => t.completed).length}
        />
      </div>

      <div className="mt-4">
        {isLoaded ? (
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        ) : (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
          </div>
        )}
      </div>
    </div>
  );
}
