import React, { useState, useEffect } from "react";
import "./OrdersTable.css";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import orders from "./../../data/orders";
import product from "./../../data/product";
import Users from "../../data/users";

export default function OrdersTable() {
  const [allUser, setAllUser] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [allOrders,setAllOrders]=useState([])
  const [orderedProduct,setOrderedProduct]=useState([])
  let mainUser=null
  useEffect(() => {
    setAllUser(Users);
    setAllProduct(product);
    setAllOrders([...orders].reverse())
  },[]);
  const toggleOrderStatus=(id)=>{
    setAllOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, isAccept: !order.isAccept } : order
      )
    )
  }
  const columns = [
    { field: "id", headerName: "شناسه", width: 70 },
    {
      field: "image",
      headerName: "تصویر کاربر",
      width: 100,
      renderCell: (params) => {
        mainUser = allUser.find(user => user.id === params.row.userID);
          return (
          <div className="user-image">
            <img src={mainUser?.image} />
          </div>
        );
      },
    },
    { field: "name",
        headerName: "نام کاربر",
         width: 150 ,
         renderCell: (params) => {
            const mainUser = allUser.find(user => user.id === params.row.userID);
            return <span>{mainUser ? `${mainUser.firstName} ${mainUser.lastName}` : "نامشخص"}</span>;
          },
   },
    { field: "count",
         headerName: "تعداد سفارش",
          width: 120 ,
        renderCell:(params)=>{
            console.log("params :",params)
            return(
                <span>{params.row.productID.length}</span>
            )
        }
    },
    {
      field: "date",
      headerName: "تاریخ",
      width: 140,
    },
    { field: "totalPrice",
         headerName: "مبلغ کل سفارش",
          width: 200 ,
          renderCell: (params) => {
            const orderedProducts = params.row.productID.map(id => 
              allProduct.find(product => product.id === id)
            );
            const totalAmount = orderedProducts.reduce((sum, product) => {
              return sum + (product?.price || 0); // محاسبه مجموع قیمت
            }, 0);
            return <span>{totalAmount.toLocaleString()} تومان</span>;
          }
    },

    {
      field: "action",
      headerName: "عملیات",
      width: 200,
      renderCell: (params) => {
        return (
            <div className="btn-box">
            <button className="order-btn" onClick={()=>toggleOrderStatus(params.row.id)}>
                {
                    !params.row.isAccept ? (
                        <>
                            <span> <ThumbUpIcon/> </span>
                            <span>تایید</span>
                        </>
                    ) :(
                        <>
                            <span> <ThumbDownIcon/> </span>
                            <span>رد</span>
                        </>
                    )
                }
            </button>
            <Link to={`/orders/${params.row.id}`} className="show-order">
            <RemoveRedEyeIcon />
            <span>مشاهده</span>
            </Link>
            </div>
        )
      },
    },
  ];

  const paginationModel = { page: 0, pageSize: 6 };

  return (
    <div className="orders-table">
        <Paper sx={{ height: 450 }}>
            <DataGrid
              rows={allOrders}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              sx={{ border: 0 }}
              
            />
          </Paper>
    </div>
  ) 
}
