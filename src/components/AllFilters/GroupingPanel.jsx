// src/components/AllFilters/GroupingPanel.jsx
import React from 'react';

const GroupingPanel = ({ setGrouping }) => {
  const handleGroupingChange = (event) => {
    const value = event.target.value;
    setGrouping(value ? [value] : []);
  };

  return (
    <div>
      <label htmlFor="grouping">Group by: </label>
      <select id="grouping" onChange={handleGroupingChange}>
        <option value="">None</option>
        <option value="category">Category</option>
        <option value="subcategory">Subcategory</option>
      </select>
    </div>
  );
};

export default GroupingPanel;
