import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaa", "bbbb"]);
  const [completeTodos, setCompleteTodos] = useState(["cccc"]);

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
  return (
    <>
      <div className="input_area">
        <input
          type="text"
          placeholder="TODOを入力"
          value={todoText}
          onChange={changeText}
        />
        <button onClick={addText}>Add</button>
      </div>
      <div className="incompleted_area">
        <p className="title">Incomplete Tasks</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list_row">
                <li>{todo}</li>
                <button onClick={() => beCompleted(index)}>DONE</button>
                <button onClick={() => removeText(index)}>DELETE</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="completed_area">
        <p className="title">Completed Tasks</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list_row">
                <li>{todo}</li>
                <button>BACK</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
