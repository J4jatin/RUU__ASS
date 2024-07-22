// src/components/AllFilters/ColumnFilter.jsx
import React from 'react';

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilterValue, preFilteredRows, id } = column;

  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ''}
      onChange={e => setFilterValue(e.target.value || undefined)}
      placeholder={`Search ${count} records...`}
    />
  );
};

export default ColumnFilter;
