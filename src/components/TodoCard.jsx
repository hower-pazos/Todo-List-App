import { useState } from "react";

export function TodoCard(props) {
  const {
    todo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleEditTodo,
    todoIndex,
  } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.input);

  return (
    <div className="card todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(event) => setEditValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleEditTodo(todoIndex, editValue);
                setIsEditing(false);
              }
            }}
          />
          <div className="todo-buttons">
            <button
              disabled={todo.complete}
              onClick={() => {
                handleEditTodo(todoIndex, editValue);
                setIsEditing(false);
              }}
            >
              <h6>Save</h6>
            </button>
            <button onClick={() => setIsEditing(false)}>
              <h6>Cancel</h6>
            </button>
          </div>
        </>
      ) : (
        <>
          <p>{todo.input}</p>
          <div className="todo-buttons">
            <button disabled={todo.complete} onClick={() => setIsEditing(true)}>
              <h6>Edit</h6>
            </button>
            <button
              disabled={todo.complete}
              onClick={() => handleCompleteTodo(todoIndex)}
            >
              <h6>Done</h6>
            </button>
            <button onClick={() => handleDeleteTodo(todoIndex)}>
              <h6>Delete</h6>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
