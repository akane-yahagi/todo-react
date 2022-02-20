import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input_area">
        <input type="text" placeholder="TODOを入力" />
        <button>Add</button>
      </div>
      <div className="incompleted_area">
        <p className="title">Incomplete Tasks</p>
        <ul>
          <div className="list_row">
            <li>aaaa</li>
            <button>DONE</button>
            <button>DELETE</button>
          </div>
          <div className="list_row">
            <li>bbbb</li>
            <button>DONE</button>
            <button>DELETE</button>
          </div>
        </ul>
      </div>
      <div className="completed_area">
        <p className="title">Completed Tasks</p>
        <ul>
          <div className="list_row">
            <li>ccc</li>
            <button>BACK</button>
          </div>
        </ul>
      </div>
    </>
  );
};
