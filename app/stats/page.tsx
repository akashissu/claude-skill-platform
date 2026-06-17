"use client";

import { useState, useEffect } from "react";
import { Todo } from "@/types";
import { getFromStorage } from "@/lib/utils";
import { StatsChart } from "@/components/StatsChart";

const STORAGE_KEY = "taskflow_todos";

export default function StatsPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = getFromStorage<Todo[]>(STORAGE_KEY);
    if (stored) {
      setTodos(stored);
    }
    setIsLoaded(true);
  }, []);

  const totalTasks = todos.length;
  const completedTasks = todos.filter((t) => t.completed).length;
  const activeTasks = todos.filter((t) => !t.completed).length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const highPriority = todos.filter((t) => t.priority === "high").length;
  const mediumPriority = todos.filter((t) => t.priority === "medium").length;
  const lowPriority = todos.filter((t) => t.priority === "low").length;

  const categories = todos.reduce((acc: Record<string, number>, todo) => {
    const cat = todo.category || "Uncategorized";
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  const overdueTasks = todos.filter((t) => {
    if (!t.dueDate || t.completed) return false;
    return new Date(t.dueDate) < new Date();
  }).length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Task Statistics</h1>
        <p className="text-gray-500">Get insights into your productivity and task completion trends.</p>
      </div>

      {!isLoaded ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card text-center">
              <div className="text-3xl font-bold text-blue-600">{totalTasks}</div>
              <div className="text-sm text-gray-500 mt-1">Total Tasks</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-green-600">{completedTasks}</div>
              <div className="text-sm text-gray-500 mt-1">Completed</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-orange-500">{activeTasks}</div>
              <div className="text-sm text-gray-500 mt-1">Active</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-red-500">{overdueTasks}</div>
              <div className="text-sm text-gray-500 mt-1">Overdue</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Completion Rate</h2>
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-24">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="3"
                      strokeDasharray={`${completionRate}, 100`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-800">{completionRate}%</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">
                    You have completed <span className="font-semibold text-blue-600">{completedTasks}</span> out of{" "}
                    <span className="font-semibold">{totalTasks}</span> tasks.
                  </p>
                  {completionRate >= 80 && (
                    <p className="text-green-600 text-sm mt-1 font-medium">🎉 Excellent progress!</p>
                  )}
                  {completionRate >= 50 && completionRate < 80 && (
                    <p className="text-blue-600 text-sm mt-1 font-medium">👍 Good work, keep it up!</p>
                  )}
                  {completionRate < 50 && totalTasks > 0 && (
                    <p className="text-orange-500 text-sm mt-1 font-medium">💪 You can do it, keep going!</p>
                  )}
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Priority Breakdown</h2>
              <StatsChart
                high={highPriority}
                medium={mediumPriority}
                low={lowPriority}
                total={totalTasks}
              />
            </div>
          </div>

          <div className="card">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Tasks by Category</h2>
            {Object.keys(categories).length === 0 ? (
              <p className="text-gray-400 text-sm">No categories found. Add tasks to see category breakdown.</p>
            ) : (
              <div className="space-y-3">
                {Object.entries(categories).map(([category, count]) => (
                  <div key={category}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">{category}</span>
                      <span className="text-gray-500">{count} task{count !== 1 ? "s" : ""}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(count / totalTasks) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
