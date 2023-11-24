import React, { useState } from "react";

const AddTodoForm = (props) => {
  const [todoName, setTodoName] = useState('');

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.onCreate(todoName);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={todoName}
        onChange={handleNameChange}
        placeholder="Enter todo name"
      />
      <button type="submit">Add todo</button>
      
    </form>
  );
};
export default AddTodoForm;
