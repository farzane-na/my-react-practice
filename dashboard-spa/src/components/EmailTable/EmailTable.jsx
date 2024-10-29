import React ,{useState,useEffect} from "react";
import "./EmailTable.css";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import email from "./../../data/email";
import users from "./../../data/users"
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from "react-router-dom";

export default function EmailTable() {
    const [allEmail,setAllEmail]=useState([])
    const [allUser,setAllUser]=useState([])
    let findUser=null
    useEffect(()=>{
        setAllEmail([...email].reverse())
        setAllUser(users)
    },[])
    const toggleEmailStatus=(id)=>{
        setAllEmail((prev) =>
            prev.map((email) =>
              email.id === id ? { ...email, isRead: !email.isRead } : email
            )
          )
    }
  const columns = [
    { field: "id", headerName: "شناسه", width: 70 },
    {
      field: "fullname",
      headerName: "نام کاربر",
      width: 200,
      renderCell:((params)=>{
        findUser=allUser.find(user=>user.id===params.row.userID)
        console.log(findUser);
        
        return(
            <p>
                {`${findUser.firstName} ${findUser.lastName}`}
            </p>
        )
      })
    },
    {
      field: "email",
      headerName: "ایمیل",
      width: 200,
    },
    {
        field:"action",
        headerName:"عملیات",
        width:300,
        renderCell:((params)=>{
            return (
                <div className="btn-box">
                <button className="email-btn" onClick={()=>toggleEmailStatus(params.row.id)}>
                    {
                        !params.row.isRead ? (
                            <>
                                <span> <MarkEmailReadIcon/> </span>
                                <span>خوانده شده</span>
                            </>
                        ) :(
                            <>
                                <span> <MarkEmailUnreadIcon/> </span>
                                <span>خوانده نشده</span>
                            </>
                        )
                    }
                </button>
                <Link to={`/emails/${params.row.id}`} className="show-order">
                <RemoveRedEyeIcon />
                <span>مشاهده</span>
                </Link>
                </div>
            )
        })
    }
  ];

  const paginationModel = { page: 0, pageSize: 6 };

  return (
    <div className="email-table">
        <Paper sx={{ height: 450, width: "100%" }}>
          <DataGrid
            rows={allEmail}
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
