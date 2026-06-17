import { Todo } from "@/types";

interface TodoStatsProps {
  todos: Todo[];
}

export function TodoStats({ todos }: TodoStatsProps) {
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const active = todos.filter((t) => !t.completed).length;
  const highPriority = todos.filter((t) => t.priority === "high" && !t.completed).length;
  const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="card text-center hover:shadow-md transition-shadow">
        <div className="text-2xl font-bold text-blue-600">{total}</div>
        <div className="text-xs text-gray-500 mt-1 font-medium uppercase tracking-wide">Total</div>
      </div>
      <div className="card text-center hover:shadow-md transition-shadow">
        <div className="text-2xl font-bold text-orange-500">{active}</div>
        <div className="text-xs text-gray-500 mt-1 font-medium uppercase tracking-wide">Active</div>
      </div>
      <div className="card text-center hover:shadow-md transition-shadow">
        <div className="text-2xl font-bold text-green-600">{completed}</div>
        <div className="text-xs text-gray-500 mt-1 font-medium uppercase tracking-wide">Done</div>
      </div>
      <div className="card text-center hover:shadow-md transition-shadow">
        <div className="text-2xl font-bold text-red-500">{highPriority}</div>
        <div className="text-xs text-gray-500 mt-1 font-medium uppercase tracking-wide">High Priority</div>
      </div>

      {total > 0 && (
        <div className="col-span-2 md:col-span-4 card">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium text-gray-700">Overall Progress</span>
            <span className="text-blue-600 font-semibold">{completionRate}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-700"
              style={{ width: `${completionRate}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">
            {completed} of {total} tasks completed
          </p>
        </div>
      )}
    </div>
  );
}
