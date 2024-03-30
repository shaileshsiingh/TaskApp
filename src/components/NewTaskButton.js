import React, { useState } from 'react';
import NewTaskModal from './NewTaskModal';

function NewTaskButton({ onCreate }) {
  const [showModal, setShowModal] = useState(false);

  const handleCreate = (taskData) => {
    onCreate(taskData);
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Create a New Task</button>
      {showModal && <NewTaskModal onClose={() => setShowModal(false)} onCreate={handleCreate} />}
    </div>
  );
}

export default NewTaskButton;
