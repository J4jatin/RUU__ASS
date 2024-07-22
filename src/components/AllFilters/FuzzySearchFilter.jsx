// src/components/AllFilters/FuzzySearchFilter.jsx
import React from 'react';
import { matchSorter } from 'match-sorter';

const FuzzySearchFilter = ({ column }) => {
  const { filterValue, setFilterValue, preFilteredRows, id } = column;

  return (
    <input
      value={filterValue || ''}
      onChange={e => setFilterValue(e.target.value || undefined)}
      placeholder={`Search...`}
    />
  );
};

// Define the fuzzy text filter function
export const fuzzyTextFilterFn = (rows, id, filterValue) => {
  return matchSorter(rows, filterValue, { keys: [row => row.values[id]] });
};

export default FuzzySearchFilter;
