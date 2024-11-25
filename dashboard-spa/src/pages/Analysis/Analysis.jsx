import React, { useState, useEffect } from "react";
import "./Analysis.css";
import GaugeChart from "react-gauge-chart";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import StayCurrentPortraitOutlinedIcon from "@mui/icons-material/StayCurrentPortraitOutlined";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { reportSecurity, reportSeo } from "../../data/report";

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
            <GaugeChart
              id="gauge-chart2"
              nrOfLevels={20}
              percent={status === "desktop" ? 0.73 : 0.658}
              style={{ width: 500, height: 200 }}
            />
            <p>درصد عملکرد سایت</p>
          </div>
        </div>
        <div className="analysis__speed">
          <div className="analysis__btn">
            <button
              className={
                speedStatus === "desktop" ? "analysis__btn--active" : ""
              }
              onClick={() => changeSpeedStatus()}
            >
              <DesktopMacOutlinedIcon /> <span>دسکتاپ</span>
            </button>
            <button
              className={
                speedStatus === "mobile" ? "analysis__btn--active" : ""
              }
              onClick={() => changeSpeedStatus()}
            >
              <StayCurrentPortraitOutlinedIcon /> <span>موبایل</span>
            </button>
          </div>
          <div className="analysis__speed-chart">
            <GaugeChart
              id="gauge-chart2"
              nrOfLevels={20}
              percent={speedStatus === "desktop" ? 0.8 : 0.75}
              style={{ width: 500, height: 200 }}
            />
            <p>درصد سرعت سایت</p>
          </div>
        </div>
      </div>
      <div className="analys__security">
        <h3 className="analysis__title">وضعیت امنیت سایت</h3>
        <div className="analys__security-chart">
          <ResponsiveContainer height={400}>
            <BarChart data={reportSecurity} barSize={60}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="analys__seo">
        <h3 className="analysis__title">وضعیت سئو سایت</h3>
        <div className="analys__seo-chart">
          <ResponsiveContainer height={400}>
            <BarChart data={reportSeo} barSize={60}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
