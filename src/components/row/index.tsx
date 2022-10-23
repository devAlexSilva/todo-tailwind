type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string) => void;
};

export const Row = (props: Todo) => {
  const { id, task, isCompleted, deleteTodo, updateTodo } = props;
  return (
    <article>
      <p>{task}</p>
      <div>
        <button aria-label="deletar um to-do" onClick={() => deleteTodo(id)}>
          X
        </button>
        <input
          type="checkbox"
          aria-label="marcar to-do como completo"
          checked={isCompleted}
          onChange={() => updateTodo(id)}
        />
      </div>
    </article>
  );
};
