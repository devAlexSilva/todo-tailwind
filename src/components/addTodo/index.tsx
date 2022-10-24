import { PropsAddTodo } from '../../types'

export const AddTodo = ({
  handleSubmitTodo,
  handleChangeInput,
  task,
}: PropsAddTodo) => {
  return (
    <form onSubmit={handleSubmitTodo} className="flex justify-between w-full">
      <input
        type="text"
        name="test"
        className="flex-1 rounded shadow-lg p-2 tex-gray-dark mr-2 mb-4"
        value={task}
        onChange={e => handleChangeInput(e)}
      />
      <button type="submit" aria-label="add to todo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </form>
  )
}
