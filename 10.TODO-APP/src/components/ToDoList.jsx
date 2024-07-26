import React from "react";
import ToDo from "./ToDo";

function ToDoList({ todos, onRemoveTodo, onUpdateTodo }) {
  return (
    <div style={{ width: "100%" }}>
      {todos &&
        todos.map((todo) => (
          <ToDo key={todo} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo = {onUpdateTodo}/>
        ))}
    </div>
  );
}

export default ToDoList;
