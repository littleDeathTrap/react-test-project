import React, { useContext, useState } from "react";
import { Context, ThemeContext } from "../../App";


const AddNewTask = () => {
  const [name, setName] = useState("");

  const { onAddTask } = useContext(Context);
  const { mode, setMode } = useContext(ThemeContext);

  const handleToggleTheme = () => {
    const newTheme = mode === "light" ? "dark" : "light";
    setMode(newTheme);
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => onAddTask(name)}>Create new task</button>
      <button onClick={handleToggleTheme}>Toggle theme</button>
    </div>
  );
};
export default AddNewTask;
