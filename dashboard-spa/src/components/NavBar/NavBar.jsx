import React , {useState} from  "react";
import "./NavBar.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from '@mui/icons-material/Search';
import Lottie from 'react-lottie';
import logo from './../../asset/lottie/logo.json'
import profile from "./../../asset/images/profile.webp"

export default function NavBar() {
  const [dark,setDark]=useState(false)
  if (dark) {
    // حالت تاریک
    document.documentElement.style.setProperty("--body", "#343a40");
    document.documentElement.style.setProperty("--text", "#f8f9fa");
    document.documentElement.style.setProperty("--active", "#495057");
    document.documentElement.style.setProperty("--sidebar", "#495057");
    document.documentElement.style.setProperty("--heading", "#fff");
    document.documentElement.style.setProperty("--table", "#222831");
} else {
    // حالت روشن
    document.documentElement.style.setProperty("--body", "#f8f9fa");
    document.documentElement.style.setProperty("--text", "#343a40");
    document.documentElement.style.setProperty("--active", "#dee2e6");
    document.documentElement.style.setProperty("--sidebar", "#e9ecef");
    document.documentElement.style.setProperty("--heading", "#212529");
    document.documentElement.style.setProperty("--table", "#fff");
}
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: logo,
    rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
    clearCanvas: true
    },
  };
  const changeTheme=()=>{
    console.log("hello");
    setDark(prev=>!prev)
  }
  return (
    <div className="navbar">
      <div className="navbar__logo" style={{ background: "transparent" }}>
      <Lottie options={defaultOptions} height={50} width={300}  isClickToPauseDisabled={true}/>
      </div>
      <div className="navbar__left-side">
        <div className="navbar__search">
            <SearchIcon />
            <input type="text" className="navbar__input" placeholder="جستجو ..." />
        </div>
        <div className="navbar__handeler">
          <div className="navbar__theme" onClick={changeTheme}>
            {
              dark ? (
                <WbSunnyOutlinedIcon />
              ):(
                <BedtimeOutlinedIcon />
              )
            }
          </div>
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
