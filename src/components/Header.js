import React, { useState } from 'react';
import './Header.css'; // Add CSS for styling

function Header({ onFilter, onSort }) {
  const [filterAssignee, setFilterAssignee] = useState('');
  const [filterPriority, setFilterPriority] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [sortByPriority, setSortByPriority] = useState('');

  const handleFilter = () => {
    // Pass the filter criteria to the parent component
    onFilter({
      assignee: filterAssignee,
      priority: filterPriority,
      date: filterDate
    });
  };

  const handleSort = () => {
    // Pass the sorting criteria to the parent component
    onSort(sortByPriority);
  };

  return (
    <div className="header">
      <div className="filter-container">
        <h3>Filter By:</h3>
        <div className="input-group">
          <input type="text" placeholder="Assignee" value={filterAssignee} onChange={(e) => setFilterAssignee(e.target.value)} />
        </div>
        <div className="input-group">
          <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
            <option value="">All</option>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
        </div>
        <div className="input-group">
          <input type="date" placeholder="Date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} />
        </div>
        <button onClick={handleFilter}>Apply Filter</button>
      </div>

      <div className="sort-container">
        <h3>Sort By:</h3>
        <div className="input-group">
          <select value={sortByPriority} onChange={(e) => setSortByPriority(e.target.value)}>
            <option value="">None</option>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
        </div>
        <button onClick={handleSort}>Apply Sort</button>
      </div>
    </div>
  );
}

export default Header;
