import React from "react";
import Cards from "../UI/Cards";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <Cards>
      {props.tasks.length === 0 && <p>No Tasks to Show</p>}
      {props.tasks.map((task) => (
        <TodoItem
          task={task}
          key={props.tasks.indexOf(task)}
          id={props.tasks.indexOf(task) + 1}
          removeTask={props.removeTask}
        />
      ))}
    </Cards>
  );
};

export default TodoList;
