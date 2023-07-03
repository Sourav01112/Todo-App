import React, { useState, useEffect, useRef } from "react";

const TodoForm = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      setError("Field cannot be Empty!");
      return;
    }

    onSubmit({ text: input, id: Math.floor(Math.random() * 10000) });

    setInput("");
    setError("");
  };

  return (
    <form onSubmit={submitHandler} className="todo-form">
      <input
        type="text"
        name="todo"
        // className="todo-input"
        className={`todo-input ${error ? "error" : "non_error"}`}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setError("");
        }}
        ref={inputRef}
      />
      {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}
      <button className="todo-button">Add a todo</button>
    </form>
  );
};

export default TodoForm;
