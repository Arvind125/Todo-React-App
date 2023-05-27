import { useState } from "react";
import "./App.css";
import AddTodo from "./Components/Todo/AddTodo";
import TodoList from "./Components/Todo/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  };
  const removeTask = (indexToRemove) => {
    setTasks((prevTasks) => {
      const new_tasks = prevTasks.filter((task, index) => {
        return index !== indexToRemove;
      });
      return new_tasks;
    });
  };

  return (
    <div className="App">
      <AddTodo addTaskHandler={addTask} />
      <TodoList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
