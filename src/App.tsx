import Navbar from "./components/Navbar";
import AddTask from "./components/Tasks/AddTask";
import TasksList from "./components/Tasks/TasksList";
import TasksSearch from "./components/Tasks/TasksSearch";
import TasksToggle from "./components/Tasks/TasksToggle";
import TaskCount from "./components/Tasks/TaskCount";
import { Todo } from "./components/Tasks/model";
import * as React from "react";
import { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("");

  const addTaskDataHandler = (enteredtask: Todo) => {
    setTasks((prevTasks) => {
      return [...prevTasks, enteredtask];
    });
    console.log(tasks, enteredtask);
  };

  const searchTaskHandler = (searchTerm: React.SetStateAction<string>) => {
    setSearchTerm(searchTerm);
    console.log(searchTerm);
  };

  const tasksToggleHandler = (filterStatus: React.SetStateAction<string>) => {
    setFilterStatus(filterStatus);
  };

  const updateTaskHandler = (status: string, taskId: string) => {
    setTasks((prevTasks) => {
      return [
        ...prevTasks.map((task) => {
          if (task.id === taskId) {
            task.status = status;
          }
          return task;
        }),
      ];
    });
  };

  const deleteTaskHandler = (taskId: string) => {
    setTasks((prevTasks) => {
      return [
        ...prevTasks.filter((task) => {
          return task.id !== taskId;
        }),
      ];
    });
  };

  //app -> taskslist callback
  //
  return (
    <>
      <Navbar />
      <TasksSearch
        onSearchTermChange={searchTaskHandler}
        searchTerm={searchTerm}
      />
      <TasksToggle onStatusChange={tasksToggleHandler} status={filterStatus} />
      <AddTask onAddTask={addTaskDataHandler} />
      <TasksList
        onTaskUpdate={updateTaskHandler}
        onDeleteTask={deleteTaskHandler}
        tasks={tasks}
        searchTerm={searchTerm}
        FilterStatus={filterStatus}
      />
      <TaskCount tasks={tasks} />
    </>
  );
};

export default App;
