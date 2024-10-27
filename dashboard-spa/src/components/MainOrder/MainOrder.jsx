import React, { useState, useEffect } from "react";
import "./MainOrder.css";
import orders from "../../data/orders";
import Users from "../../data/users";
import product from "../../data/product";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import MainUser from "../MainUser/MainUser";

export default function MainOrder() {
  let { id } = useParams();
  const [mainUser, setMainUser] = useState({});
  const [orderedProducts, setOrderedProducts] = useState(null);
  const [mainOrder, setMainOrder] = useState({});

  useEffect(() => {
    let filteredOrder = orders.find((item) => item.id == id);
    console.log(filteredOrder);
    
    setMainOrder(filteredOrder);
  }, []);
  
  useEffect(() => {
    let filteredUser = Users.find((user) => user.id == mainOrder.userID);
    setMainUser(filteredUser);
    console.log(filteredUser);
  }, [mainOrder]);
  useEffect(()=>{
    if (mainOrder.productID) {
        let filteredProduct = mainOrder.productID.map((id) =>
          product.find((product) => product.id === id)
        );
        console.log(filteredProduct);
        
          setOrderedProducts(filteredProduct)
        }
  },[mainUser])
  return (
    <div className="main-order">
      <h2 className="main-order__title">فاکتور سفارش</h2>
      <div className="user-order">
        <div className="user-order__image">
          <img src={mainUser.image} alt="" />
        </div>
        <p className="user-name">
          {`${mainUser.firstName} ${mainUser.lastName}`}
        </p>
      </div>
      <div className="main-order__table">
        {/* <Paper sx={{ height: 450, width: "100%" }}>
            <DataGrid
              rows={filteredProduct}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              sx={{ border: 0 }}
            />
          </Paper> */}
      </div>
    </div>
  );
}
