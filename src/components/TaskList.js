import React, { useState } from 'react';
import TaskItem from './TaskItem';
import Modal from './Modal';
import Filter from './Filter';
import Sort from './Sort';
import './TaskList.css'; // Add CSS for styling

const TaskList = ({ tasks, onDelete }) => {
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = (newTask) => {
    // Add new task to the list
  };

  return (
    <div>
      <Filter />
      <Sort />
      <button onClick={() => setShowModal(true)}>Add Task</button>
      <div className="task-list">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} />
        ))}
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} onSave={handleAddTask} />}
    </div>
  );
};

export default TaskList;
