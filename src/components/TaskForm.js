import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pending');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('P0');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      startDate: new Date().toISOString().slice(0, 10),
      status,
      assignee,
      priority
    };
    onAdd(newTask);
    setTitle('');
    setDescription('');
    setStatus('Pending');
    setAssignee('');
    setPriority('P0');
  };

  return (
    <div>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        <label>Status:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
          <option value="Deployed">Deployed</option>
          <option value="Deferred">Deferred</option>
        </select>
        <label>Assignee:</label>
        <input type="text" value={assignee} onChange={(e) => setAssignee(e.target.value)} required />
        <label>Priority:</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
