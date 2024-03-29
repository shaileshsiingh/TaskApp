import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Task 1',
      description: 'Description for Task 1',
      startDate: '2024-03-29',
      endDate: null,
      status: 'Pending',
      assignee: 'John Doe',
      priority: 'P1'
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description for Task 2',
      startDate: '2024-03-30',
      endDate: '2024-03-31',
      status: 'Completed',
      assignee: 'Jane Doe',
      priority: 'P2'
    }
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;
