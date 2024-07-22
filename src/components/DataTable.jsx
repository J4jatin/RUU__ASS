// src/components/DataTable.jsx
import React, { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table'; // Use named import
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import sampleData from '../data/sample-data.json';
import moment from 'moment';

import GroupingPanel from './AllFilters/GroupingPanel';
import FuzzySearchFilter, { fuzzyTextFilterFn } from './AllFilters/FuzzySearchFilter';
import MultiSelectFilter from './AllFilters/MultiSelectFilter';
import RangeFilter from './AllFilters/RangeFilter';
import DateRangeFilter from './AllFilters/DateRangeFilter';

const DataTable = () => {
  const [grouping, setGrouping] = useState([]);

  const columns = useMemo(() => [
    {
      accessorKey: 'name', // Ensure this matches your data structure
      header: 'Name',
      filterFn: fuzzyTextFilterFn,
      Filter: FuzzySearchFilter,
    },
    {
      accessorKey: 'category',
      header: 'Category',
      filterFn: 'includes',
      Filter: MultiSelectFilter,
    },
    {
      accessorKey: 'subcategory',
      header: 'Subcategory',
      filterFn: 'includes',
      Filter: MultiSelectFilter,
    },
    {
      accessorKey: 'price',
      header: 'Price',
      filterFn: 'between',
      Filter: RangeFilter,
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      Cell: ({ cell }) => moment(cell.getValue()).format('DD-MMM-YYYY HH:mm'),
      filterFn: 'dateBetween',
      Filter: DateRangeFilter,
    },
    {
      accessorKey: 'updatedAt',
      header: 'Updated At',
      Cell: ({ cell }) => moment(cell.getValue()).format('DD-MMM-YYYY HH:mm'),
      filterFn: 'dateBetween',
      Filter: DateRangeFilter,
    },
  ], []);

  const theme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#f4f4f4',
        paper: '#ffffff',
      },
      text: {
        primary: '#000000',
        secondary: '#555555',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <GroupingPanel setGrouping={setGrouping} />
        <MaterialReactTable 
          columns={columns}
          data={sampleData}
          grouping={grouping}
          // Other props if needed
        />
      </div>
    </ThemeProvider>
  );
};

export default DataTable;
