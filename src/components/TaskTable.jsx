import React from "react";
import { TaskRow } from "./TaskRow";

const TaskTable = ({ task, toggleTask, showCompleted = false }) => {
  const TaskTableRows = (doneValue) => {
    return task
      .filter((t) => t.done === doneValue)
      .map((t) => <TaskRow tasks={t} key={t.name} toggleTask={toggleTask} />);
  };

  return (
    <table className="table table-dark table-striped table-bordered border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Task</th>
        </tr>
      </thead>
      <tbody>{TaskTableRows(showCompleted)}</tbody>
    </table>
  );
};

export default TaskTable;
