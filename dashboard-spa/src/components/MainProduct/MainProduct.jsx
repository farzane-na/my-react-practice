import React, { useState, useEffect } from "react";
import "./MainProduct.css";
import product from "./../../data/product";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

export default function Mainproduct() {
  const { id } = useParams();
  const [mainProduct, setMainProduct] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [image, setImage] = useState("");
  const [rate, setRate] = useState("");

  useEffect(() => {
    const MainProductObj = product.find((product) => product.id === +id);
    console.log(product);
    console.log(MainProductObj);
    if (MainProductObj) {
      setMainProduct(MainProductObj);
    }
  }, [id]);
  useEffect(() => {
    setTitle(mainProduct?.title);
    setCategory(mainProduct?.category);
    setPrice(mainProduct?.price);
    setStock(mainProduct?.stock);
    setImage(mainProduct?.image);
    setRate(mainProduct?.rate);
  }, [mainProduct]);
  console.log(rate);
  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const changeCategory = (event) => {
    setCategory(event.target.value);
  };
  const changePrice = (event) => {
    setPrice(event.target.value);
  };
  const changeStock = (event) => {
    setStock(event.target.value);
  };
  const submitForm = (event) => {
    event.preventDefault();
    setMainProduct((prev) => ({
      ...prev,
      title,
      category,
      price,
      stock,
      rate,
    }));
  };
  return (
    <div className="main-product">
      <h2 className="main-product__title">صفحه محصول</h2>
      <div className="main-product__wrapper">
        <div className="main-product__image">
          <img src={image} />
        </div>
        <form
          className="main-product__property"
          onSubmit={(event) => submitForm(event)}
        >
          <label>عنوان محصول</label>
          <input
            type="text"
            className="main-product__title"
            value={title}
            onChange={(event) => changeTitle(event)}
          />
          <label>دسته بندی محصول</label>
          <input
            type="text"
            className="main-product__category"
            value={category}
            onChange={(event) => changeCategory(event)}
          />
          <label>قیمت محصول </label>
          <input
            type="text"
            className="main-product__price"
            value={price}
            onChange={(event) => changePrice(event)}
          />
          <label>موجودی محصول</label>
          <input
            type="text"
            className="main-product__stock"
            value={stock}
            onChange={(event) => changeStock(event)}
          />
          <div className="min-product__rate">
            <span>
              <StarIcon />
            </span>
            <span>{rate}</span>
          </div>
          <div className="submit-edit">
            <button>ویرایش</button>
          </div>
        </form>
      </div>
    </div>
  );
}
