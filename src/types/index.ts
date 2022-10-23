import { ChangeEvent, FormEvent } from "react"

export interface ITodo {
    id: string,
    task: string,
    isCompleted: boolean
  }

export type PropsAddTodo = {
    task: string
    handleSubmitTodo: (e: FormEvent) => void
    handleChangeInput: (e: ChangeEvent) => void
}
