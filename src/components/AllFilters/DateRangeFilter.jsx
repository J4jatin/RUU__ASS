import React, { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import AdapterMoment from '@date-io/moment';
import { TextField } from '@mui/material';

const DateRangeFilter = ({ column }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label="Start Date"
        value={startDate}
        onChange={(newValue) => {
          setStartDate(newValue);
          column.setFilterValue((old) => [newValue, old ? old[1] : null]);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <DatePicker
        label="End Date"
        value={endDate}
        onChange={(newValue) => {
          setEndDate(newValue);
          column.setFilterValue((old) => [old ? old[0] : null, newValue]);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default DateRangeFilter;
