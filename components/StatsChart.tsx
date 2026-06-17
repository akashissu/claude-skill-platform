interface StatsChartProps {
  high: number;
  medium: number;
  low: number;
  total: number;
}

export function StatsChart({ high, medium, low, total }: StatsChartProps) {
  if (total === 0) {
    return (
      <p className="text-gray-400 text-sm">No tasks yet. Add some tasks to see priority breakdown.</p>
    );
  }

  const bars = [
    { label: "High", count: high, color: "bg-red-500", textColor: "text-red-600" },
    { label: "Medium", count: medium, color: "bg-yellow-400", textColor: "text-yellow-600" },
    { label: "Low", count: low, color: "bg-green-500", textColor: "text-green-600" },
  ];

  return (
    <div className="space-y-3">
      {bars.map((bar) => (
        <div key={bar.label}>
          <div className="flex justify-between text-sm mb-1">
            <span className={`font-medium ${bar.textColor}`}>{bar.label} Priority</span>
            <span className="text-gray-500">
              {bar.count} task{bar.count !== 1 ? "s" : ""} ({total > 0 ? Math.round((bar.count / total) * 100) : 0}%)
            </span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-3">
            <div
              className={`${bar.color} h-3 rounded-full transition-all duration-700`}
              style={{ width: `${total > 0 ? (bar.count / total) * 100 : 0}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
