import * as React from "react";
import "./TasksSearch.css";

interface Props {
  onSearchTermChange: (searchTerm: string) => void;
  searchTerm: string | number;
}

function TasksSearch({ onSearchTermChange, searchTerm }: Props) {
  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onSearchTermChange(event.target.value);
  };

  return (
    <div className="TasksSearch">
      <label className="Searchinfo" htmlFor="search">
        Search for a task :{" "}
      </label>
      <input
        id="search"
        name="search"
        type="text"
        placeholder="Search for a task"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </div>
  );
}

export default TasksSearch;
