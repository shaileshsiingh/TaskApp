import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewTaskButton from './components/NewTaskButton';
import NewTaskModal from './components/NewTaskModal';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState({
    assignee: '',
    priority: '',
    startDate: '',
    endDate: ''
  });
  const [sortBy, setSortBy] = useState('priority'); // Default sorting by priority

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setShowModal(false); // Close the modal after adding task
  };

  const handleFilter = (criteria) => {
    setFilterCriteria(criteria);
  };

  const handleSort = (sortBy) => {
    setSortBy(sortBy);
  };

  // Function to filter tasks based on filterCriteria
  const filteredTasks = tasks.filter(task => {
    return (
      (!filterCriteria.assignee || task.assignee.toLowerCase().includes(filterCriteria.assignee.toLowerCase())) &&
      (!filterCriteria.priority || task.priority === filterCriteria.priority) &&
      (!filterCriteria.startDate || new Date(task.startDate) >= new Date(filterCriteria.startDate)) &&
      (!filterCriteria.endDate || new Date(task.endDate) <= new Date(filterCriteria.endDate))
    );
  });

  // Function to sort tasks based on sortBy criteria
  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortBy === 'priority') {
      return a.priority.localeCompare(b.priority);
    } else if (sortBy === 'startDate') {
      return new Date(a.startDate) - new Date(b.startDate);
    } else if (sortBy === 'endDate') {
      return new Date(a.endDate) - new Date(b.endDate);
    }
    // Default sorting by priority
    return a.priority.localeCompare(b.priority);
  });

  return (
    <div>
      <Header onFilter={handleFilter} onSort={handleSort} />
      <NewTaskButton onCreate={addTask} />
      <Hero tasks={sortedTasks} />
      {showModal && <NewTaskModal onClose={() => setShowModal(false)} onCreate={addTask} />}
    </div>
  );
};

export default App;
