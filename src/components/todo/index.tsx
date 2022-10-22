import { Row } from "../row";
import { data } from "../../mock/todo";
import { useState } from "react";

export const Todo = () => {
  const [todos, setTodos] = useState(data);

  const updateTodo = (id: string) => {
    const updatedTodo = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      }
      return item;
    });
    setTodos(updatedTodo);
  };

  const deleteTodo = (id: string) => {
    const allTodos = todos.filter((item) => item.id !== id);
    setTodos(allTodos);
  };

  return (
    <section about="seção dos to-do">
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <Row {...item} deleteTodo={deleteTodo} updateTodo={updateTodo} />
          </li>
        ))}
      </ul>
    </section>
  );
};
