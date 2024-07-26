import React, { useState } from "react";
import "../App.css";

function ToDoCreate({onCreateTodo}) {


const clearInput = ()=>{
    setNewTodo('');
}

  const [newTodo, setNewTodo] = useState("");

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 99999999),
      content: newTodo,
    };
    onCreateTodo(request)
    clearInput();
  };
  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="ToDo Giriniz"
      />
      <button onClick={createTodo} className="todo-add-button">
        ToDo Oluştur
      </button>
    </div>
  );
}

export default ToDoCreate;
