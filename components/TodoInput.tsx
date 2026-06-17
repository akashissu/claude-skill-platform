import { FormEvent, useState } from 'react';

type TodoInputProps = {
  onAddTodo: (text: string) => void;
};

export function TodoInput({ onAddTodo }: TodoInputProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return;
    }

    onAddTodo(trimmedValue);
    setValue('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="todo-input">
        Add a todo
      </label>
      <input
        id="todo-input"
        className="todo-input"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="What needs to get done?"
        maxLength={120}
      />
      <button className="todo-primary-button" type="submit">
        Add Todo
      </button>
    </form>
  );
}
