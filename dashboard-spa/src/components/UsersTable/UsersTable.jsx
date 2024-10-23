import * as React from "react";
import "./UsersTable.css"
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Users from "./../../data/Users";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "نام", width: 150 },
  { field: "lastName", headerName: "نام خانوادگی", width: 170 },
  {
    field: "age",
    headerName: "سن",
    type: "number",
    width: 100,
  },
  {
    field: "fullName",
    headerName: "نام کامل",
    description: "این ستون اسم کامل اشخاص را نشان میدهد",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const paginationModel = { page: 0, pageSize: 6 };

export default function UsersTable() {
  return (
    <div className="users-table">
      <Paper sx={{ height: 450, width: "100%" }}>
        <DataGrid
          rows={Users}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
}
