import { Row } from '../row'
import { data } from '../../mock/todo'
import { ITodo } from '../../types'
import { ChangeEvent, FormEvent, useState } from 'react'
import { AddTodo } from '../addTodo'
import { v4 as uuid } from 'uuid'

export const Todo = () => {
  const [todos, setTodos] = useState(data)
  const [task, setTask] = useState('')

  const updateTodo = (id: string) => {
    const updatedTodo = todos.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        }
      }
      return item
    })
    setTodos(updatedTodo)
  }

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  const handleSubmitTodo = (e: FormEvent) => {
    e.preventDefault()

    const todo = {
      id: uuid(),
      task: task,
      isCompleted: false,
    }

    addTodo(todo)
    setTask("")
  }

  const addTodo = (newTodo: ITodo) => {
    setTodos([...todos, newTodo])
  }

  const deleteTodo = (id: string) => {
    const allTodos = todos.filter(item => item.id !== id)
    setTodos(allTodos)
  }

  return (
    <section about="seção dos to-do">
      <AddTodo
        task={task}
        handleChangeInput={handleChangeInput}
        handleSubmitTodo={handleSubmitTodo}
      />
      <ul>
        {todos.map(item => (
          <li key={item.id}>
            <Row {...item} deleteTodo={deleteTodo} updateTodo={updateTodo} />
          </li>
        ))}
      </ul>
    </section>
  )
}
