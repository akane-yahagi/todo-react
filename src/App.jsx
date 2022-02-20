import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo.jsx";
import { IncompleteTodo } from "./components/IncompleteTodo.jsx";
import { CompleteTodo } from "./components/CompleteTodo.jsx";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const changeText = (e) => setTodoText(e.target.value);

  const addText = () => {
    if (todoText === "") return;
    const newTodo = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodo);
    setTodoText("");
  };

  const removeText = (index) => {
    const newTodo = [...incompleteTodos];
    newTodo.splice(index, 1);
    setIncompleteTodos(newTodo);
  };

  const beCompleted = (index) => {
    const newIncompleteTodo = [...incompleteTodos];
    newIncompleteTodo.splice(index, 1);

    const newCompleteTodo = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodo);
    setCompleteTodos(newCompleteTodo);
  };

  const backIncompleted = (index) => {
    const target = [...completeTodos];
    target.splice(index, 1);

    const newIncompleteTodo = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(target);
    setIncompleteTodos(newIncompleteTodo);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        changeText={changeText}
        addText={addText}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>DO YOUR TASKS!!!</p>
      )}
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        beCompleted={beCompleted}
        removeText={removeText}
      />
      <CompleteTodo
        completeTodos={completeTodos}
        backIncompleted={backIncompleted}
      />
    </>
  );
};
