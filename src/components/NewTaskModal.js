import React, { useState } from 'react';
import { useTaskContext } from './TaskContext';

function NewTaskModal() {
  const { addTask, toggleModal } = useTaskContext();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    status: 'Pending',
    assignee: '',
    priority: 'P0'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addTask(formData);
    toggleModal(); // Close the modal after adding task
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={toggleModal}>X</button>
        <h2>Create New Task</h2>
        <div className="modal-content">
          <div>
            <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
          </div>
          <div>
            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
          </div>
          <div>
            <input type="date" name="startDate" placeholder="Start Date" value={formData.startDate} onChange={handleChange} />
          </div>
          <div>
            <input type="date" name="endDate" placeholder="End Date" value={formData.endDate} onChange={handleChange} />
          </div>
          <div>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="Deployed">Deployed</option>
              <option value="Deferred">Deferred</option>
            </select>
          </div>
          <div>
            <input type="text" name="assignee" placeholder="Assignee" value={formData.assignee} onChange={handleChange} />
          </div>
          <div>
            <select name="priority" value={formData.priority} onChange={handleChange}>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
          </div>
          <button onClick={handleSubmit}>Create Task</button>
        </div>
      </div>
    </div>
  );
}

export default NewTaskModal;
