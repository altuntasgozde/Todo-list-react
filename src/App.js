import "./App.css";
import { useEffect, useState } from "react";
import { Input } from "./component/Input";
import { Todos } from "./component/Todos";

function App() {
  const [value, setValue] = useState({
    name: "",
    id: 0,
  });

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Get input value
  const GetValue = (e) => {
    setValue({
      name: e.target.value,
      id: Math.floor(Math.random() * 10000) + 1,
    });
  };

  // Add todo
  const GetTodos = () => {
    setTodos((prevTodos) => {
      return [value, ...prevTodos];
    });
  };

  // Delete todo
  const DeleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };


  return (
    <div className="App">
      <Input todos={todos} GetValue={GetValue} GetTodos={GetTodos} />
      <Todos todos={todos} DeleteTodo={DeleteTodo} />
    </div>
  );
}

export default App;
