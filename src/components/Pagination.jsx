import React from 'react';
import { TablePagination } from '@mui/material';

const Pagination = ({ table }) => {
  return (
    <TablePagination
      rowsPerPageOptions={[10, 25, 50]}
      component="div"
      count={table.getPrePaginationRowModel().rows.length}
      rowsPerPage={table.getState().pagination.pageSize}
      page={table.getState().pagination.pageIndex}
      onPageChange={(event, newPage) => table.setPageIndex(newPage)}
      onRowsPerPageChange={event => table.setPageSize(Number(event.target.value))}
    />
  );
};

export default Pagination;
