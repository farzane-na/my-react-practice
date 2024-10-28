import React, { useState, useEffect } from "react";
import "./Report.css";
import GaugeChart from "react-gauge-chart";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import StayCurrentPortraitOutlinedIcon from "@mui/icons-material/StayCurrentPortraitOutlined";

export default function Report() {
  const [status, setStatus] = useState("desktop");
  const changeStatus = () => {
    setStatus((prev) => {
      if (prev === "desktop") {
        return "mobile";
      } else {
        return "desktop";
      }
    });
  };
  return (
    <div className="report">
      <h2 className="report__title">گزارشات</h2>
      <div className="report__performance">
        <div className="report__btn">
          <button
            className={status === "desktop" ? "report__btn--active" : ""}
            onClick={() => changeStatus()}
          >
            <DesktopMacOutlinedIcon /> <span>دسکتاپ</span>
          </button>
          <button
            className={status === "mobile" ? "report__btn--active" : ""}
            onClick={() => changeStatus()}
          >
            <StayCurrentPortraitOutlinedIcon /> <span>موبایل</span>
          </button>
        </div>
        <div className="report__performance-chart">
        <GaugeChart id="gauge-chart2" nrOfLevels={20} percent={status==="desktop" ? 0.86 : 0.73} style={{ width: 500, height: 200 }} />
            <p>درصد عملکرد سایت</p>
        </div>
      </div>
    </div>
  );
}
