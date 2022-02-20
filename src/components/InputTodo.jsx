import React from "react";

export const InputTodo = (props) => {
  const { todoText, changeText, addText, disabled } = props;
  return (
    <div className="input_area">
      <input
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={changeText}
        disabled={disabled}
      />
      <button onClick={addText} disabled={disabled}>
        Add
      </button>
    </div>
  );
};
