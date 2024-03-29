import React, { useState } from 'react';
import './Modal.css'; // Add CSS for styling

const Modal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'Pending',
    assignee: '',
    priority: 'P0'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add New Task</h2>
        <form onSubmit={handleSubmit}>
          {/* Input fields for task details */}
          <button type="submit">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
