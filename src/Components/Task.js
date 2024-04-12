import React from "react";

const Task = (props) => {
  var clickhandler = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="tasks">
      <div className="task">
        <h2>{props.name}</h2>
        <h4>{props.content}</h4>
        <button onClick={clickhandler}>X</button>
      </div>
    </div>
  );
};

export default Task;
