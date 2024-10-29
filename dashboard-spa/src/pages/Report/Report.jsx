import React, { useState, useEffect } from "react";
import "./Report.css";
import SaleChart from "../../components/SaleChart/SaleChart";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import userLogin from "../../data/userLogin";

export default function Report() {
  
  return (
    <div className="report">
      <h2 className="report__title">گزارشات</h2>
      
      <div className="sale-chart">
        <SaleChart />
      </div>
      <div className="user-login">
        <h3 className="user-login__title">نمودار جذب کاربر</h3>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={userLogin}>
          <Line type="monotone" dataKey="uv" stroke="#007bff" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
}
