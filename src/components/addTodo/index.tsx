import { ChangeEvent, FormEvent } from "react"

type propsAddTodo = {
    task: string
    handleSubmitTodo: (e: FormEvent) => void
    handleChangeInput: (e: ChangeEvent) => void
}

export const AddTodo = ({ handleSubmitTodo, handleChangeInput, task }: propsAddTodo) => {

    
    return (
        <form onSubmit={handleSubmitTodo}>
            <input type="text" name="test" value={task} onChange={e => handleChangeInput(e) }/>
            <button type="submit" aria-label="add to todo">+</button>
        </form >
    )
}