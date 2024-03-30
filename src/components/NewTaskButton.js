import React from 'react';
import NewTaskModal from './NewTaskModal';
import { useTaskContext } from './TaskContext';

function NewTaskButton() {
  const { showModal, toggleModal } = useTaskContext();

  return (
    <div>
      <button onClick={toggleModal}>Create a New Task</button>
      {showModal && <NewTaskModal />}
    </div>
  );
}

export default NewTaskButton;
