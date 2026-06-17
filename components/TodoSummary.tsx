type TodoSummaryProps = {
  totalCount: number;
  remainingCount: number;
};

export function TodoSummary({ totalCount, remainingCount }: TodoSummaryProps) {
  return (
    <div className="todo-summary" aria-label="Todo summary">
      <div className="todo-summary-card">
        <span>Total</span>
        <strong>{totalCount}</strong>
      </div>
      <div className="todo-summary-card">
        <span>Remaining</span>
        <strong>{remainingCount}</strong>
      </div>
      <div className="todo-summary-card">
        <span>Completed</span>
        <strong>{totalCount - remainingCount}</strong>
      </div>
    </div>
  );
}
