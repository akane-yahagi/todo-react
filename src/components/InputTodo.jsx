import React from "react";

export const InputTodo = (props) => {
  const { todoText, changeText, addText } = props;
  return (
    <div className="input_area">
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={changeText}
      />
      <button onClick={addText}>Add</button>
    </div>
  );
};
