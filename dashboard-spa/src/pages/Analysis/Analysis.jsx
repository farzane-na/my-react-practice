import React, { useState, useEffect } from "react";
import "./Analysis.css";
import GaugeChart from "react-gauge-chart";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import StayCurrentPortraitOutlinedIcon from "@mui/icons-material/StayCurrentPortraitOutlined";

export default function Analysis() {
  const [status, setStatus] = useState("desktop");
  const [speedStatus, setSpeedStatus] = useState("desktop");
  const changeStatus = () => {
    setStatus((prev) => {
      if (prev === "desktop") {
        return "mobile";
      } else {
        return "desktop";
      }
    });
  };
  const changeSpeedStatus = () => {
    setSpeedStatus((prev) => {
      if (prev === "desktop") {
        return "mobile";
      } else {
        return "desktop";
      }
    });
  };
  return (
    <div className="analysis">
      <h2 className="analysis__title">تجزیه و تحلیل</h2>
      <div className="analysis_wrapper">
      <div className="analysis__performance">
        <div className="analysis__btn">
          <button
            className={status === "desktop" ? "analysis__btn--active" : ""}
            onClick={() => changeStatus()}
          >
            <DesktopMacOutlinedIcon /> <span>دسکتاپ</span>
          </button>
          <button
            className={status === "mobile" ? "analysis__btn--active" : ""}
            onClick={() => changeStatus()}
          >
            <StayCurrentPortraitOutlinedIcon /> <span>موبایل</span>
          </button>
        </div>
        <div className="analysis__performance-chart">
        <GaugeChart id="gauge-chart2" nrOfLevels={20} percent={status==="desktop" ? 0.73 : 0.658} style={{ width: 500, height: 200 }} />
            <p>درصد عملکرد سایت</p>
        </div>
      </div>
        <div className="analysis__speed">
        <div className="analysis__btn">
          <button
            className={speedStatus === "desktop" ? "analysis__btn--active" : ""}
            onClick={() => changeSpeedStatus()}
          >
            <DesktopMacOutlinedIcon /> <span>دسکتاپ</span>
          </button>
          <button
            className={speedStatus === "mobile" ? "analysis__btn--active" : ""}
            onClick={() => changeSpeedStatus()}
          >
            <StayCurrentPortraitOutlinedIcon /> <span>موبایل</span>
          </button>
        </div>
        <div className="analysis__speed-chart">
        <GaugeChart id="gauge-chart2" nrOfLevels={20} percent={status==="desktop" ? 0.80 : 0.75} style={{ width: 500, height: 200 }} />
            <p>درصد سرعت سایت</p>
        </div>
        </div>
      </div>
    </div>
  );
}
