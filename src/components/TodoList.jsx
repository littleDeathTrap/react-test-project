import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const { items, onDelete, onCheck, onEdit } = props;
  return (
    <div>
      {items.map((item) => (
        <TodoItem
          key={item.title}
          title={item.title}
          checked={item.checked}
          onCheck={onCheck}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
