import React , {useState} from "react";
import "./UsersTable.css";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Users from "../../data/users";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Link } from "react-router-dom";



export default function UsersTable() {
const [AllUsers,setAllUsers]=useState(Users)
const deleteMainUser=id=>{
  setAllUsers(AllUsers.filter(user=>user.id!==id))
}

const columns = [
  { field: "id", headerName: "شناسه", width: 70 },
  {
    field: "image",
    headerName: "تصویر پروفایل",
    width: 150,
    renderCell:((params)=>{
      return(
        <div className="user-image">
          <img src={params.row.image} />
        </div>
      )
    })
  },
  { field: "firstName", headerName: "نام", width: 150 },
  { field: "lastName", headerName: "نام خانوادگی", width: 170 },
  {
    field: "age",
    headerName: "سن",
    type: "number",
    width: 100,
  },
  {
    field: "email",
    headerName: "ایمیل",
    width: 200,
  },
  {
    field: "phone",
    headerName: "شماره تلفن",
    width: 200,
  },
  {
    field:"action",
    headerName:"عملیات",
    width:200,
    renderCell:((params)=>{
      return (
        <div className="user-handle">
          <button className="user-delete" onClick={()=>deleteMainUser(params.row.id)}>
            <span>
              <DeleteOutlineOutlinedIcon />
            </span>
            <span>حذف</span>
          </button>
          <Link className="user-edit">
            <span>
              <ModeEditOutlineOutlinedIcon />
            </span>
            <span>ویرایش</span>
          </Link>
        </div>
      )
    })
  }
];

const paginationModel = { page: 0, pageSize: 6 };
  return (
    <div className="users-table">
      <Paper sx={{ height: 450, width: "100%" }}>
        <DataGrid
          rows={AllUsers}
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
