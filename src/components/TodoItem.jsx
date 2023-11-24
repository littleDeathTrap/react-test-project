import { useState } from "react";

const TodoItem = ({ title, onDelete, checked, onCheck, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleDelete = () => {
    onDelete(title);
  };
  const handleChangeStatus = () => {
    onCheck(title);
  };
  return (
    <div className="todo__item">
      <input type="checkbox" checked={checked} onChange={handleChangeStatus} />
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={() => onEdit(title, newTitle)}>Finish Edit</button>
        </div>
      ) : (
        <h4> {title}</h4>
      )}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
    </div>
  );
};
export default TodoItem;
