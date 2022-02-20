import React from "react";

export const IncompleteTodo = (props) => {
  const { incompleteTodos, beCompleted, removeText } = props;
  return (
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
  );
};
