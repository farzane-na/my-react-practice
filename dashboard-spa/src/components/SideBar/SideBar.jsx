import React from 'react'
import "./SideBar.css"
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

export default function SideBar(){
    return (
         <div className="sidebar">
            <div className="sidebar__dashboard">
                <h2 className='sidebar__title'>پیشخوان</h2>
                <ul className="dashboard-list">
                    <li className="dashboard-list__item">
                        <Link to={"/"} className="dashboard-list__link  dashboard-list__link--active">
                            <HomeIcon />
                            <span>خانه</span>
                        </Link>
                    </li>
                    <li className="dashboard-list__item">
                        <Link to={""} className="dashboard-list__link">
                            <TimelineIcon />
                            <span>Analytics</span>
                        </Link>
                    </li>
                    <li className="dashboard-list__item">
                        <Link to={""} className="dashboard-list__link">
                            <TrendingUpIcon />
                            <span>فروش ها</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sidebar__quick-menu">
                <h2 className='sidebar__title'>منوی سریع</h2>
                <ul className="dashboard-list">
                    <li className="dashboard-list__item">
                        <Link to={"/users"} className="dashboard-list__link">
                            <PersonOutlineOutlinedIcon />
                            <span>کاربران</span>
                        </Link>
                    </li>
                    <li className="dashboard-list__item">
                        <Link to={"/newUser"} className="dashboard-list__link">
                            <PersonAddAltOutlinedIcon />
                            <span>کاربر جدید</span>
                        </Link>
                    </li>
                    <li className="dashboard-list__item">
                        <Link to={""} className="dashboard-list__link">
                            <StorefrontOutlinedIcon />
                            <span>محصولات</span>
                        </Link>
                    </li>
                    <li className="dashboard-list__item">
                        <Link to={""} className="dashboard-list__link">
                            <EqualizerOutlinedIcon />
                            <span>گزارشات</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sidebar__notifications">
                <h2 className='sidebar__title'>پیام ها</h2>
                <ul className="dashboard-list">
                    <li className="dashboard-list__item">
                        <Link to={""} className="dashboard-list__link">
                            <EmailOutlinedIcon />
                            <span>ایمیل ها</span>
                        </Link>
                    </li>
                    <li className="dashboard-list__item">
                        <Link to={""} className="dashboard-list__link">
                            <DynamicFeedOutlinedIcon />
                            <span>بازخورد</span>
                        </Link>
                    </li>
                    <li className="dashboard-list__item">
                        <Link to={""} className="dashboard-list__link">
                            <ChatBubbleOutlineOutlinedIcon />
                            <span>پیام ها</span>
                        </Link>
                    </li>
                </ul>
            </div>
         </div>
    );
}