import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, backIncompleted } = props;
  return (
    <div className="completed_area">
      <p className="title">Completed Tasks</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list_row">
              <li>{todo}</li>
              <button onClick={() => backIncompleted(index)}>BACK</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
