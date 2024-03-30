import React from 'react';
import './Hero.css'; // Add CSS for styling

function Hero({ tasks }) {
  const filterTasksByStatus = (status) => {
    return tasks.filter(task => task.status === status);
  };

  const onAssign = (task) => {
    // Placeholder function for task assignment
    console.log("Assigning task:", task);
  };

  return (
    <div className="hero">
      <div className="card">
        <h3 className='pending'>Pending</h3>
        {filterTasksByStatus('Pending').map(task => (
          <div key={task.id} className="task">
            <h4>{task.title}</h4>
            <p>Task Number: {task.id}</p>
            <p>Description: {task.description}</p>
            <button onClick={() => onAssign(task)}>Assign</button>
          </div>
        ))}
      </div>

      <div className="card">
        <h3 className='in-progress'>In Progress</h3>
        {filterTasksByStatus('In Progress').map(task => (
          <div key={task.id} className="task">
            <h4>{task.title}</h4>
            <p>Task Number: {task.id}</p>
            <p>Description: {task.description}</p>
            <button onClick={() => onAssign(task)}>Assign</button>
          </div>
        ))}
      </div>

      <div className="card">
        <h3 className='completed'>Completed</h3>
        {filterTasksByStatus('Completed').map(task => (
          <div key={task.id} className="task">
            <h4>{task.title}</h4>
            <p>Task Number: {task.id}</p>
            <p>Description: {task.description}</p>
            <button onClick={() => onAssign(task)}>Assign</button>
          </div>
        ))}
      </div>

      <div className="card">
        <h3 className='deployed'>Deployed</h3>
        {filterTasksByStatus('Deployed').map(task => (
          <div key={task.id} className="task">
            <h4>{task.title}</h4>
            <p>Task Number: {task.id}</p>
            <p>Description: {task.description}</p>
            <button onClick={() => onAssign(task)}>Assign</button>
          </div>
        ))}
      </div>

      <div className="card">
        <h3 className='deferred'>Deferred</h3>
        {filterTasksByStatus('Deferred').map(task => (
          <div key={task.id} className="task">
            <h4>{task.title}</h4>
            <p>Task Number: {task.id}</p>
            <p>Description: {task.description}</p>
            <button onClick={() => onAssign(task)}>Assign</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
