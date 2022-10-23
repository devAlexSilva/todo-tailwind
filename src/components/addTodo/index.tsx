import { PropsAddTodo } from "../../types"

export const AddTodo = ({
  handleSubmitTodo,
  handleChangeInput,
  task,
}: PropsAddTodo) => {
  return (
    <form onSubmit={handleSubmitTodo}>
      <input
        type="text"
        name="test"
        value={task}
        onChange={e => handleChangeInput(e)}
      />
      <button type="submit" aria-label="add to todo">
        +
      </button>
    </form>
  )
}
