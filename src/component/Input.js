import React from "react";

export const Input = (props) => {
  return (
    <div>
      <form>
        <input type="text" onChange={props.GetValue} />
        <button type="button" onClick={props.GetTodos}>
          Add
        </button>
      </form>
    </div>
  );
};
