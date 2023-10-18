import { useContext } from "react";
import { Context } from "../../App";

const List = () => {
  const { tasks } = useContext(Context);

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
};
export default List;
