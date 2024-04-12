import React, { useContext } from "react";
import TaskContext from "../Context/TaskContext";
import Task from "./Task";

const Tasks = () => {
  const ctx = useContext(TaskContext);

  return (
    <div className="tasks">
      {ctx.tasks.map((task, index) => (
        <Task
          name={task.name}
          content={task.content}
          id={index}
          key={index}
          onDelete={ctx.deletetaskhandler}
        />
      ))}
    </div>
  );
};

export default Tasks;
