import React from "react";

export const Todos = (props) => {
  return (
    <div className="wrapper">
      <div className="todos">
        <h3>TODO's</h3>

        {props.todos.map((todo) => (
          <div key={todo.id} className="wrap">
            <p className="todo">
              {todo.name}
              <button onClick={() => props.DeleteTodo(todo.id)}>X</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
