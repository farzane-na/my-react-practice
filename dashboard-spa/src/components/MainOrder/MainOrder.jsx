import React, { useState, useEffect } from "react";
import "./MainOrder.css";
import orders from "../../data/orders";
import Users from "../../data/users";
import product from "../../data/product";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

let filteredOrder = null;
let filteredUser = null;
let filteredProduct = null;

export default function MainOrder() {
  let { id } = useParams();
  const [mainUser, setMainUser] = useState({});
  const [orderedProducts, setOrderedProducts] = useState([]);
  const [mainOrder, setMainOrder] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (id) {
      filteredOrder = orders.find((item) => item.id === +id);
      setMainOrder(filteredOrder);
    }
  }, [id]);

  useEffect(() => {
    if (mainOrder) {
      filteredUser = Users.find((user) => user.id === mainOrder.userID);
      setMainUser(filteredUser);
    }
  }, [mainOrder]);

  useEffect(() => {
    if (mainOrder.productID) {
      filteredProduct = mainOrder.productID
            .map((id) => product.find((product) => product.id === id))
            .filter((product) => product !== undefined);
      setOrderedProducts(filteredProduct);
    }
  }, [mainUser]);

  useEffect(() => {
    if (orderedProducts.length) {
      console.log(typeof orderedProducts.price);

      const totalAmount = orderedProducts.reduce((sum, product) => {
        return sum + (product?.price || 0); // محاسبه مجموع قیمت
      }, 0);
      setTotalPrice(totalAmount);
    }
  }, [orderedProducts]);
  const columns = [
    { field: "id", headerName: "شناسه", width: 70 },
    {
      field: "image",
      headerName: "تصویر محصول",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="product-image">
            <img src={params.row.image} />
          </div>
        );
      },
    },
    { field: "title", headerName: "نام محصول", width: 300 },
    {
      field: "category",
      headerName: "دسته بندی",
      width: 270,
      renderCell: (params) => {
        return (
          <div className="product__category">
            <p>{params.row.category}</p>
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "قیمت (تومان)",
      type: "number",
      width: 120,
    },
  ];
  const paginationModel = { page: 0, pageSize: 6 };
  return (
    <div className="main-order">
      <h2 className="main-order__title">فاکتور سفارش</h2>
      <div className="user-order">
        <div className="user-order__image">
          <img
            src={`${mainUser?.image}`}
            alt={`${mainUser?.firstName} ${mainUser?.lastName}`}
          />
        </div>
        <p className="user-name">
          {`${mainUser?.firstName} ${mainUser?.lastName}`}
        </p>
        <div className="main-order__property">
          <div className="main-order__date">
            <span>
              <EventNoteIcon />
            </span>
            <span>تاریخ ثبت سفارش : {mainOrder.date}</span>
          </div>
          <div className="main-order__total-price">
            <span>
              <AttachMoneyIcon />
            </span>
            <span>مبلغ کل سفارش : {totalPrice} تومان</span>
          </div>
        </div>
      </div>
      <div className="main-order__table">
        <Paper sx={{ width: "100%" }}>
          <DataGrid
            rows={orderedProducts}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Paper>
      </div>
    </div>
  );
}
