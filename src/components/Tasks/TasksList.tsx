import Task from "./Task";
import "./TasksList.css";
import * as React from "react";
import { Todo } from "./model";

interface Props {
  tasks: Todo[]; //{
  searchTerm: string;
  FilterStatus: string;
  onTaskUpdate: (status: string, taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}
function TasksList({
  tasks,
  searchTerm,
  FilterStatus,
  onTaskUpdate,
  onDeleteTask,
}: Props) {
  const filteredTasks = tasks.filter((task) => {
    return task.title.includes(searchTerm);
  });

  const filteredTasksByStatus = filteredTasks.filter((task) =>
    task.status.includes(FilterStatus)
  );

  const updateTaskHandler = (status: string, taskId: string) => {
    console.log(status, taskId);
    onTaskUpdate(status, taskId);
  };

  const taskDeleteHandler = (taskId: string) => {
    onDeleteTask(taskId);
  };

  if (filteredTasksByStatus.length === 0) {
    return (
      <div>
        <h2>No tasks found.</h2>
      </div>
    );
  }

  return (
    <div>
      <ul className="Task-list">
        {filteredTasksByStatus.map((task) => (
          <Task
            onDeleteTask={taskDeleteHandler}
            onUpdateTaskStatus={updateTaskHandler}
            task={task}
            key={task.id}
          />
        ))}
      </ul>
    </div>
  );
}

export default TasksList;
