import React, { useState, useEffect } from "react";
import "./ProductsTable.css";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { Link } from "react-router-dom";
import product from "./../../data/product";

export default function ProductsTable() {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProductBox, setFilteredProductBox] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    setAllProducts(product);
  }, []);
  const deleteMainProduct = (id) => {
    let filterProduct = allProducts.filter((product) => product.id !== id);
    setAllProducts(filterProduct);
  };
  useEffect(() => {
    const filtered = allProducts.filter((item) => {
      return item.title.includes(filteredProductBox);
    });
    setFilteredProduct(filtered);
  }, [filteredProductBox]);
  const changeFilteredValue = (event) => {
    setFilteredProductBox(event.target.value);
  };

  const columns = [
    { field: "id", headerName: "شناسه", width: 70 },
    {
      field: "image",
      headerName: "تصویر محصول",
      width: 120,
      renderCell: (params) => {
        console.log("params", params);

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
    {
      field: "stock",
      headerName: "موجودی",
      type: "number",
      width: 80,
    },

    {
      field: "action",
      headerName: "عملیات",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="product-handle">
            <button
              className="product-delete"
              onClick={() => deleteMainProduct(params.row.id)}
            >
              <span>
                <DeleteOutlineOutlinedIcon />
              </span>
              <span>حذف</span>
            </button>
            <Link to={`/products/${params.row.id}`} className="product-edit">
              <span>
                <ModeEditOutlineOutlinedIcon />
              </span>
              <span>ویرایش</span>
            </Link>
          </div>
        );
      },
    },
  ];

  const paginationModel = { page: 0, pageSize: 6 };
  return (
    <div className="product-table">
      <div className="product-table__header">
        <h2 className="product-table__title">محصولات</h2>
        <form className="product-table__filter">
          <label htmlFor="">نام محصول : </label>
          <input
            type="text"
            placeholder="جستجو"
            onChange={(event) => changeFilteredValue(event)}
          />
        </form>
      </div>
      <div className="product__wrapper">
        {filteredProduct.length === 0 ? (
          <Paper sx={{ height: 450, width: "100%" }}>
            <DataGrid
              rows={allProducts}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              sx={{ border: 0 }}
            />
          </Paper>
        ) : (
          <Paper sx={{ height: 450, width: "100%" }}>
            <DataGrid
              rows={filteredProduct}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
              sx={{ border: 0 }}
            />
          </Paper>
        )}
      </div>
    </div>
  );
}
