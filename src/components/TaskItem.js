import React from 'react';
import { useTaskContext } from './TaskContext';

function TaskItem({ task }) {
  const { deleteTask, editTask } = useTaskContext();

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleEdit = () => {
    editTask(task); // Pass the task object to the editTask function
  };

  return (
    <div className="task-item">
      <div>
        <h3>{task.title}</h3>
        <p>Task Number: {task.id}</p>
        <p>Description: {task.description}</p>
        <p>Start Date: {task.startDate}</p>
        {task.endDate && <p>End Date: {task.endDate}</p>}
        <p>Assignee: {task.assignee}</p>
        <p>Priority: {task.priority}</p>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;
