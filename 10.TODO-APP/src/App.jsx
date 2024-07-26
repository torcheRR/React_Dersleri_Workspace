import { useState } from "react";
import "./App.css";
import ToDoCreate from "./components/ToDoCreate";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  const createToDo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  };

  const updateTodo = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    });
    setTodos([...updatedTodos])
  };

  console.log(todos);

  return (
    <div className="App">
      <div className="main">
        <ToDoCreate onCreateTodo={createToDo} />
        <ToDoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo = {updateTodo} />
      </div>
    </div>
  );
}

export default App;
