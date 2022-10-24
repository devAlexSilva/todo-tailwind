type Todo = {
  id: string
  task: string
  isCompleted: boolean
  deleteTodo: (id: string) => void
  updateTodo: (id: string) => void
}

export const Row = (props: Todo) => {
  const { id, task, isCompleted, deleteTodo, updateTodo } = props
  return (
    <article
      className={`
    flex w-full p-4 mb-2 justify-between items-center
    ${isCompleted ? "bg-gray-400" : "bg-green-300"}
    `}
    >
      <p
        className={`
        ml-2 text-xl font-sans font-medium
        ${isCompleted ? 'text-white line-through' : 'text-gray-700'}
      `}
      >
        {task}
      </p>
      <div className={`w-1/6 flex justify-between items-center mr-2`}>
        <button
          aria-label="deletar um to-do"
          className={`h-7 w-7 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-bold rounded`}
          onClick={() => deleteTodo(id)}
        >
          X
        </button>
        <input
          type="checkbox"
          aria-label="marcar to-do como completo"
          className={`form-checkbox h-7 w-7`}
          checked={isCompleted}
          onChange={() => updateTodo(id)}
        />
      </div>
    </article>
  )
}
