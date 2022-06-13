import React, { useState } from "react";
import "./App.css";
import ToDoForm from "./Components/ToDoForm";
import ToDoItem from "./Components/ToDoItem";


const App = ()=> {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1
    }
    const todo = {id: id, text: text, completed: false, important: false}
    const newTodos = [...todos, todo]
    setTodos(newTodos)
  };

  const removeTodo = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const sortedTodos = todos.sort((a, b) => b.important - a.important)
  
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <ToDoForm addTodo={addTodo} />
      {sortedTodos.map((todo) => {
        return (
          <ToDoItem removeTodo={removeTodo} completeTodo={completeTodo} todo={todo} key={todo.id}/>
        )
      })}
    </div>
  );
}

export default App;
