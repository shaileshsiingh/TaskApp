import React from 'react';
import './TaskItem.css'; // Add CSS for styling

const TaskItem = ({ task, onDelete }) => {
  const { title, description, startDate, endDate, status, assignee, priority } = task;

  return (
    <div className={`task-card ${status.toLowerCase()}`}>
      <h3>{status}</h3>
      <h4>{title}</h4>
      <p>Description: {description}</p>
      <p>Start Date: {startDate}</p>
      {endDate && <p>End Date: {endDate}</p>}
      <p>Assignee: {assignee}</p>
      <p>Priority: {priority}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      {/* Add Edit button here */}
    </div>
  );
};

export default TaskItem;
