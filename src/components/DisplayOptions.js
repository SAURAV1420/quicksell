import React from 'react';
import './styles/DisplayOptions.css';

const DisplayOptions = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  return (
    <div className="display-options">
      <label>Group By:</label>
      <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
        <option value="status">Display</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>

      <label>Sort By:</label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default DisplayOptions;
