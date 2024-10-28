import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar__dashboard">
        <h2 className="sidebar__title">پیشخوان</h2>
        <ul className="dashboard-list">
          <li className="dashboard-list__item">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `dashboard-list__link ${
                  isActive ? "dashboard-list__link--active" : ""
                }`
              }
            >
              <HomeIcon />
              <span>خانه</span>
            </NavLink>
          </li>
          <li className="dashboard-list__item">
            <NavLink
              to={""}
              className={({ isActive }) =>
                `dashboard-list__link ${
                  isActive ? "dashboard-list__link--active" : ""
                }`
              }
            >
              <TimelineIcon />
              <span>Analytics</span>
            </NavLink>
          </li>
          <li className="dashboard-list__item">
            <NavLink
              to={"/orders"}
              className={({ isActive }) =>
                `dashboard-list__link ${
                  isActive ? "dashboard-list__link--active" : ""
                }`
              }
            >
              <TrendingUpIcon />
              <span>سفارش ها</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="sidebar__quick-menu">
        <h2 className="sidebar__title">منوی سریع</h2>
        <ul className="dashboard-list">
          <li className="dashboard-list__item">
            <NavLink
              to={"/users"}
              className={({ isActive }) =>
                `dashboard-list__link ${
                  isActive ? "dashboard-list__link--active" : ""
                }`
              }
            >
              <PersonOutlineOutlinedIcon />
              <span>کاربران</span>
            </NavLink>
          </li>
          <li className="dashboard-list__item">
            <NavLink
              to={"/newUser"}
              className={({ isActive }) =>
                `dashboard-list__link ${
                  isActive ? "dashboard-list__link--active" : ""
                }`
              }
            >
              <PersonAddAltOutlinedIcon />
              <span>کاربر جدید</span>
            </NavLink>
          </li>
          <li className="dashboard-list__item">
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `dashboard-list__link ${
                  isActive ? "dashboard-list__link--active" : ""
                }`
              }
            >
              <StorefrontOutlinedIcon />
              <span>محصولات</span>
            </NavLink>
          </li>
          <li className="dashboard-list__item">
            <NavLink
              to={"/reports"}
              className={({ isActive }) =>
                `dashboard-list__link ${
                  isActive ? "dashboard-list__link--active" : ""
                }`
              }
            >
              <EqualizerOutlinedIcon />
              <span>گزارشات</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="sidebar__notifications">
        <h2 className="sidebar__title">پیام ها</h2>
        <ul className="dashboard-list">
          <li className="dashboard-list__item">
            <NavLink
              to={""}
              className={({ isActive }) =>
                `dashboard-list__link ${
                  isActive ? "dashboard-list__link--active" : ""
                }`
              }
            >
              <EmailOutlinedIcon />
              <span>ایمیل ها</span>
            </NavLink>
          </li>
          <li className="dashboard-list__item">
            <NavLink
              to={""}
              className={({ isActive }) =>
                `dashboard-list__link ${
                  isActive ? "dashboard-list__link--active" : ""
                }`
              }
            >
              <DynamicFeedOutlinedIcon />
              <span>بازخورد</span>
            </NavLink>
          </li>
          <li className="dashboard-list__item">
            <NavLink
              to={""}
              className={({ isActive }) =>
                `dashboard-list__link ${
                  isActive ? "dashboard-list__link--active" : ""
                }`
              }
            >
              <ChatBubbleOutlineOutlinedIcon />
              <span>پیام ها</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
