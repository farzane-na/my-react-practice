import React ,{useState,useEffect} from 'react'
import "./Comment.css"
import comment from "./../../data/Comment"
import Users from '../../data/users'
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

export default function Comment() {
    const [allComment,setAllComment]=useState([])
    useEffect(()=>{
        setAllComment(comment)
    },[])
    let findUser=null
    const deleteComment=(id)=>{
        setAllComment(allComment.filter(comment=>comment.id !== id))
    }
    const toggleCommentStatus=(id)=>{
        setAllComment((prev) =>
            prev.map((comment) =>
              comment.id === id ? { ...comment, isAccept: !comment.isAccept } : comment
            )
          )
    }
    const columns = [
        { field: "id", headerName: "شناسه", width: 70 },
        {
          field: "image",
          headerName: "تصویر پروفایل",
          width: 120,
          renderCell:((params)=>{
            findUser=Users.find(user=>user.id===params.row.userID)
            return(
              <div className="user-image">
                <img src={findUser?.image} />
              </div>
            )
          })
        },
        {
          field: "fullname",
          headerName: "نام کاربر",
          width: 150,
          renderCell:((params)=>{
            // findUser=Users.find(user=>user.id===params.row.userID)
            return(
              <p>{`${findUser?.firstName} ${findUser?.lastName}`}</p>
            )
          })
        },
        {
          field: "text",
          headerName: "متن کامنت",
          width: 500,
        },
        {
          field:"action",
          headerName:"عملیات",
          width:200,
          renderCell:((params)=>{
            return (
              <div className="btn-box">
                <button className="comment-delete" onClick={()=>deleteComment(params.row.id)}>
                  <span>
                    <DeleteIcon />
                  </span>
                  <span>حذف</span>
                </button>
                <button className={!params.row.isAccept ? "reject-comment" : "accept-comment"} onClick={()=>toggleCommentStatus(params.row.id)}>
                    {
                        !params.row.isAccept ? (
                            <>
                                <span> <CloseIcon/> </span>
                                <span> اسپم</span>
                            </>
                        ) :(
                            <>
                                <span> <CheckIcon/> </span>
                                <span> تایید</span>
                            </>
                        )
                    }
                </button>
              </div>
            )
          })
        }
      ];
      
      const paginationModel = { page: 0, pageSize: 6 };

  return (
    <div className="comment">
        <h2 className="comment__title">کامنت ها</h2>
        <div className="comment-table">
        <Paper sx={{ height: 450, width: "100%" }}>
          <DataGrid
            rows={allComment}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
        </div>
    </div>
  )
}
