import React from 'react';
import TaskItem from './TaskItem';
import { useTaskContext } from './TaskContext';
import './Hero.css';

function Hero() {
  const { tasks } = useTaskContext();

  return (
    <div className="hero">
      <div className="card">
        <h3 className='pending'>Pending</h3>
        {tasks.filter(task => task.status === 'Pending').map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>

      <div className="card">
        <h3 className='in-progress'>In Progress</h3>
        {tasks.filter(task => task.status === 'In Progress').map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>

      <div className="card">
        <h3 className='completed'>Completed</h3>
        {tasks.filter(task => task.status === 'Completed').map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>

      <div className="card">
        <h3 className='deployed'>Deployed</h3>
        {tasks.filter(task => task.status === 'Deployed').map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>

      <div className="card">
        <h3 className='deferred'>Deferred</h3>
        {tasks.filter(task => task.status === 'Deferred').map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Hero;
