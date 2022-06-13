import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

function ToDoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default ToDoList;

// import { useState } from "react";
// import TodoListForm from './ToDoListForm';
// import Todo from './Todo';



// const ToDoList = () => {

//     const [todos, setTodos] = useState([]);

//     const addTodo = todo => {
//         if (!todo.text || /^\s*$/.test(todo.text)) {
//         return;
//     }

//     const newTodos = [todo, ...todos]
//     setTodos(newTodos);
// };
    
//     const updateTodo = (todoId, newValue) => { 
//         if (!newValue.text || /^\s*$/.test(newValue.text)) {
//         return;
//     }
//     setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
// }

//     const removeTodo = (id) => {
//         const removeArr = [... todos].filter(todo => !== id);
//         setTodos(removeArr);
//     }

//     const completeTodo = () => (
//         let updatedTodos = todos.map(todo =>{
//         if (todo.id === id) {
//             todo.isComplete = !todo.isComplete;
//         }
//         return todo;
//         })
//         setTodos(updatedTodos)
//     );

//     return ()
        
//         <ToDoListForm onSubmit={addTodo} />
//         <ToDoList
//         todos={todos}
//         completeTodo={completeTodo}
//         removeTodo={removeTodo}
//         updateTodo={updateTodo}
//         />
// };
 
// export default ToDoList;