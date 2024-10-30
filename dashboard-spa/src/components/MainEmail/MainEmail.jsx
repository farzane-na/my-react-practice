import React, { useState, useEffect } from "react";
import "./MainEmail.css";
import { useParams } from "react-router-dom";
import Users from "../../data/users";
import email from "../../data/email";
import emailLottie from "./../../asset/lottie/email.json";
import Lottie from "react-lottie";
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TextsmsIcon from '@mui/icons-material/Textsms';

export default function MainEmail() {
  let { id } = useParams();
  const [mainUSer, setMainUser] = useState({});
  const [mainEmail, setMainEmail] = useState({});
  let findUser = null;
  useEffect(() => {
    setMainEmail(() => {
      return email.find((item) => item.id === +id);
    });
  }, []);
  useEffect(() => {
    findUser = Users.find((user) => user.id === mainEmail.userID);
    setMainUser(findUser);
  }, [mainEmail]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: emailLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="main-email">
      <h2 className="main-email__title">محتوای ایمیل</h2>
      <div className="main-email__wrapper">
        <div className="main-email__content">
          <div className="main-email__box">
            <label className="main-email__label">
                <span>
                    <PersonIcon />
                </span>
                <span>
                    نام کاربر :
                </span>
            </label>
            <p className="main-email__username">{`${mainUSer?.firstName} ${mainUSer?.lastName}`}</p>
          </div>
          <div className="main-email__box">
            <label className="main-email__label">
                <span>
                    <CalendarMonthIcon />
                </span>
                <span>
                    تاریخ ارسال ایمیل :
                </span>
            </label>
            <p className="main-email__date">{mainEmail.date}</p>
          </div>
          <div className="main-email__box">
            <label className="main-email__label">
                <span>
                    <TextsmsIcon />
                </span>
                <span>
                    متن ایمیل :
                </span>
            </label>
            <p className="main-email__text">{mainEmail.text}</p>
          </div>
        </div>
        <div className="lottie-box">
          <Lottie options={defaultOptions} width={500} />
        </div>
      </div>
    </div>
  );
}
