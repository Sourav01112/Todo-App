import React, { useState } from "react";

import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const onSubmit = (todo) => {
    const newTodo = [todo, ...todos];

    setTodos(newTodo);
    // console.log(...todos);
    // console.log("Todo", todos);
    localStorage.setItem("todos", JSON.stringify(newTodo));
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
    localStorage.setItem("todos", JSON.stringify(removeArr));
  };

  // const completeTodo = (id) => {
  //   const updateTodo = todos.map((todo) => {
  //     if (todo.id === id) {
  //       todo.isComplete = !todo.isComplete;
  //     }
  //     return todo;
  //   });
  //   setTodos(updateTodo);
  // };
  const completeTodo = (id) => {
    const updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(updateTodo);
    localStorage.setItem("todos", JSON.stringify(updateTodo));
  };

  return (
    <div className="marginTodo">
      <h1>Plan for Today ?</h1>
      <TodoForm onSubmit={onSubmit} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
};

export default TodoList;
