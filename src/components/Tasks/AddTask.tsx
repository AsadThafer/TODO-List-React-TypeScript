// @ts-ignore

import "./AddTask.css";
import * as React from "react";
import { useState } from "react";
import Button from "../Button";
import { statuses } from "../../Constants";
import { Todo } from "./model";

interface Props {
  onAddTask: (taskData: Todo) => void;
}

function AddTask(props: Props) {
  const [title, setTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState(statuses.ToDoStatus); //boolean    or 2 constants

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleAssigneeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAssignee(event.target.value);
  };

  const cleanTaskData = () => {
    setTitle("");
    setAssignee("");
    setStatus(statuses.ToDoStatus);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const taskData = {
      id: Math.random().toString(),
      title: title,
      assignee: assignee,
      status: status,
    }; //short hand property
    event.preventDefault();
    props.onAddTask(taskData); //camel case
    cleanTaskData(); //reseet state calll back
  };

  return (
    <form className="startAddTask" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        placeholder="Assignee"
        value={assignee}
        onChange={handleAssigneeChange}
      />

      <Button className="btn btn--add" type="submit">
        Add Task
      </Button>
    </form>
  );
}

export default AddTask;
