import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaa", "bbbb"]);
  const [completeTodos, setCompleteTodos] = useState(["cccc"]);
  return (
    <>
      <div className="input_area">
        <input type="text" placeholder="TODOを入力" />
        <button>Add</button>
      </div>
      <div className="incompleted_area">
        <p className="title">Incomplete Tasks</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list_row">
                <li>{todo}</li>
                <button>DONE</button>
                <button>DELETE</button>
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
