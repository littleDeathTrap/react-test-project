import React, { useState } from "react";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const handleTodoAdd = (todoName) => {
    const todo = {
      title: todoName,
      checked: false,
    };

    const newArray = [...todos, todo];
    setTodos(newArray);
  };

  const handleChangeStatus = (title) => {
    const newArray = todos.map((todo) => {
      if (todo.title === title) {
        return {
          ...todo,
          checked: !todo.checked,
        };
      }
      return todo;
    });
    setTodos(newArray);
  };

  const handleChangeTitle = (title, newTitle) => {
    const newArray = todos.map((todo) => {
      if (todo.title === title) {
        return {
          ...todo,
          title: newTitle,
        };
      }
      return todo;
    });
    setTodos(newArray);
  };

  const handleTodoDelete = (title) => {
    const newArray = todos.filter((todo) => todo.title !== title);
    setTodos(newArray);
  };

  return (
    <div className="todo">
      <AddTodoForm onCreate={handleTodoAdd} />
      <TodoList
        items={todos}
        onDelete={handleTodoDelete}
        onCheck={handleChangeStatus}
        onEdit={handleChangeTitle}
      />
    </div>
  );
};
export default Todo;
