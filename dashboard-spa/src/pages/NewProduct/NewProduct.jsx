import React from "react";
import "./NewProduct.css";
import { category, colors } from "./../../data/product";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const uploader = Uploader({
  apiKey: "free", // Get production API keys from Bytescale
});

// Configuration options: https://www.bytescale.com/docs/upload-widget/frameworks/react#customize
const options = { multi: true };

export default function NewProduct() {
  return (
    <div className="new-product">
      <h2 className="new-product__title">افزودن محصول</h2>
      <form action="" className="new-product__form">
        <div className="input__wrapper">
          <div className="new-product__box">
            <p>
              <input type="text" className="new-product__input" />
              <label htmlFor="" className="new-product__label">
                نام محصول
              </label>
            </p>
          </div>
          <div className="new-product__box">
            <p>
              <input type="text" className="new-product__input" />
              <label htmlFor="" className="new-product__label">
                قیمت
              </label>
            </p>
          </div>
          <div className="new-product__box">
            {/* <label htmlFor="" className="new-product__label"></label>
                <input type="text" className="new-product__input" /> */}
            <select name="" id="" className="new-product__select">
              <option value="" selected>
                لطفا یک دسته بندی را انتخاب کنید ...
              </option>
              {category.map((cat) => (
                <option>{cat.title}</option>
              ))}
            </select>
          </div>
          <div className="new-product__box">
            <p>
              <textarea rows={7} className="new-product__input ">
              </textarea>
              <label htmlFor="" className="new-product__label">
                توضیحات محصول
              </label>
            </p>
          </div>
        </div>
        <div className="input__wrapper">
          <div className="uploader">
            <CloudUploadIcon />
            <UploadButton
              uploader={uploader}
              options={options}
              onComplete={(files) =>
                alert(files.map((x) => x.fileUrl).join("\n"))
              }
            >
              {({ onClick }) => (
                <button onClick={onClick}>عکس محصول را انتخاب کنید ...</button>
              )}
            </UploadButton>
          </div>
          <div className="new-product__box">
              <select name="" id="" className="new-product__select">
                <option value="" selected>
                  لطفا یک رنگ را انتخاب کنید ...
                </option>
                {colors.map((color) => (
                  <option>{color}</option>
                ))}
              </select>
            </div>
            <div className="new-product__box">
              <p>
                <input
                  type="number"
                  className="new-product__input"
                  placeholder="موجودی محصول"
                />
              </p>
            </div>
            <div className="new-product__box">
              <p>
                <input
                  type="submit"
                  className="new-product__input submit-btn"
                  value="ایجاد کردن محصول"
                />
              </p>
            </div>
        </div>
      </form>
    </div>
  );
}
