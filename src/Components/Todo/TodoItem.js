import React from "react";
import "./TodoItem.css";
import Cards from "../UI/Cards";

const TodoItem = (props) => {
  const taskCompletedHandler = () => {
    const index = props.id - 1;
    props.removeTask(index);
  };

  return (
    <div className="todo-item">
      <Cards>
        {props.id + ". " + props.task}
        <button type="button" onClick={taskCompletedHandler}>
          Completed
        </button>
      </Cards>
    </div>
  );
};

export default TodoItem;
