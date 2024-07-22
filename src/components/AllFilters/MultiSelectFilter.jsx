// src/components/AllFilters/MultiSelectFilter.jsx
import React from 'react';

const MultiSelectFilter = ({ column }) => {
  const { filterValue, setFilterValue, preFilteredRows, id } = column;

  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach(row => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  return (
    <select
      multiple
      value={filterValue || []}
      onChange={e => {
        const value = Array.from(e.target.selectedOptions, option => option.value);
        setFilterValue(value.length ? value : undefined);
      }}
    >
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default MultiSelectFilter;
