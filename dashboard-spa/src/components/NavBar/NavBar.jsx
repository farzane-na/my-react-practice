import React from "react";
import "./NavBar.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from '@mui/icons-material/Search';
import Lottie from 'react-lottie';
import logo from './../../asset/lottie/logo.json'
import profile from "./../../asset/images/profile.webp"

export default function NavBar() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: logo,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="navbar">
      <div className="navbar__logo">
      <Lottie options={defaultOptions} height={50} width={300} />
      </div>
      <div className="navbar__left-side">
        <div className="navbar__search">
            <SearchIcon />
            <input type="text" className="navbar__input" placeholder="جستجو ..." />
        </div>
        <div className="navbar__handeler">
          <div className="navbar__notification">
            <NotificationsNoneOutlinedIcon />
            <span className="notif-badge">2</span>
          </div>
          <div className="navbar__web">
            <LanguageOutlinedIcon />
            <span className="web-badge">2</span>
          </div>
          <div className="navbar__setting">
            <SettingsIcon />
          </div>
          <div className="navbar__profile">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
}
