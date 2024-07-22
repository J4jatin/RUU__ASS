// src/components/AllFilters/RangeFilter.jsx
import React from 'react';
import { Slider } from '@mui/material';

const RangeFilter = ({ column }) => {
  const { filterValue = [], setFilterValue, preFilteredRows, id } = column;

  const min = React.useMemo(
    () => Math.min(...preFilteredRows.map(row => row.values[id])),
    [id, preFilteredRows]
  );
  const max = React.useMemo(
    () => Math.max(...preFilteredRows.map(row => row.values[id])),
    [id, preFilteredRows]
  );

  return (
    <Slider
      value={filterValue.length ? filterValue : [min, max]}
      min={min}
      max={max}
      onChange={(event, newValue) => {
        setFilterValue(newValue);
      }}
      valueLabelDisplay="auto"
    />
  );
};

export default RangeFilter;
