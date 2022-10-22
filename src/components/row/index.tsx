export type Todo = {
  id?: string;
  task?: string;
  isCompleted?: boolean;
};

export const Row = (props: Todo) => {
  const { id, task, isCompleted } = props;
  return (
    <>
      <p>{task}</p>
      <div>
        <button
          aria-label="deletar um to-do"
          onClick={() => console.log("deleted")}
        >
          X
        </button>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => console.log("changed")}
        />
      </div>
    </>
  );
};
