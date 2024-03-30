import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setShowModal(false);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask, showModal, toggleModal }}>
      {children}
    </TaskContext.Provider>
  );
};
