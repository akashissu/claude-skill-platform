import type { Todo } from '@/components/TodoApp';

type TodoItemProps = {
  todo: Todo;
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
};

export function TodoItem({ todo, onToggleTodo, onDeleteTodo }: TodoItemProps) {
  return (
    <li className="todo-item">
      <label className="todo-item-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
        />
        <span className={todo.completed ? 'todo-item-text is-complete' : 'todo-item-text'}>
          {todo.text}
        </span>
      </label>

      <button
        type="button"
        className="todo-delete-button"
        onClick={() => onDeleteTodo(todo.id)}
        aria-label={`Delete ${todo.text}`}
      >
        Delete
      </button>
    </li>
  );
}
