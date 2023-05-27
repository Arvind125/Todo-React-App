import React, { useState } from "react";
import "./AddTodo.css";
import Cards from "../UI/Cards";

const AddTodo = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };
  const addTaskHandler = (event) => {
    event.preventDefault();
    // send task to parent component that will add it to Todo List
    if (enteredTask.length > 0) {
      props.addTaskHandler(enteredTask);
    } else {
      alert("Enter Task to add");
    }
    setEnteredTask("");
  };

  return (
    <Cards>
      <form onSubmit={addTaskHandler}>
        <div className="new-todo">
          <input type="text" onChange={taskChangeHandler} value={enteredTask} />
          <button type="submit">Add Task</button>
        </div>
      </form>
    </Cards>
  );
};

export default AddTodo;
