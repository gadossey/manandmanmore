// Table.js
import React from "react";
import { DataGrid } from "@mui/x-data-grid";

function Table({ tableData, fieldSummaries, rowsPerPage, handleChangePage, handleChangeRowsPerPage }) {
  return (
    <DataGrid
      rows={tableData}
      columns={Object.keys(fieldSummaries).map((key) => ({
        field: key,
        headerName: key,
        editable: true,
      }))}
      pageSize={rowsPerPage}
      pagination
      paginationMode="client"
      rowCount={tableData.length}
      autoHeight
      onPageChange={handleChangePage}
      onPageSizeChange={handleChangeRowsPerPage}
      disableSelectionOnClick
    />
  );
}

export default Table;
