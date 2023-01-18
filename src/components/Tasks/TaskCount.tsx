import "./TaskCount.css";
import { statuses } from "../../Constants";
import * as React from "react";
import { Todo } from "./model";

interface Props {
  tasks: Todo[];
}

function TaskCount(props: Props) {
  const ToDoTasks = props.tasks.filter(
    (task) => task.status === statuses.ToDoStatus
  ).length;

  const DoneTasks = props.tasks.filter(
    (task) => task.status === statuses.DoneStatus
  ).length;

  return (
    <div className="Task-count">
      <div className="TaskCount__element">
        <h2>TO-DO</h2>
        <p>{ToDoTasks}</p>
      </div>
      <div className="TaskCount__element">
        <h2>DONE</h2>
        <p>{DoneTasks}</p>
      </div>
    </div>
  );
}

export default TaskCount;
