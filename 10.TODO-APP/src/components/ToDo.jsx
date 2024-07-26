import React, { useState } from "react";
import { MdOutlineDoneAll } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdSave } from "react-icons/md";

function ToDo({ todo, onRemoveTodo, onUpdateTodo }) {
  const { id, content } = todo;

  const [editable, setEditable] = useState(false);

  const [newTodo, setNewTodo] = useState(content);

  const updateTodo = () => {
    const request = {
      id:id,
      content:newTodo
    }
    onUpdateTodo(request);
    setEditable(false)
  };

  const removeTodo = () => {
    onRemoveTodo(id);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #044704",
        borderRadius: "5px",
        padding: "5px",
        marginTop: "10px",
        backgroundColor: "#D6BD98",
      }}
    >
      <div>
        {editable ? (
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            style={{ width: "550px" }}
            className="todo-input"
            type="text"
          />
        ) : (
          content
        )}
      </div>
      <div>
        <MdOutlineDoneAll className="todo-icons" onClick={removeTodo} />

        {editable ? (
          <MdSave className="todo-icons" onClick={updateTodo} />
        ) : (
          <MdEdit className="todo-icons" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
}

export default ToDo;
