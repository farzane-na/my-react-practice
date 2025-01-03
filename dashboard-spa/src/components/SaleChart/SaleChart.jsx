import React from "react";
import "./SaleChart.css"
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import data from "./../../data/SaleChrtData";

export default function SaleChart() {
  return (
    <div className="sale-chart">
        <h3 className="sale-chart__title">نمودار فروش سالیانه</h3>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="uv" stroke="#007bff" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
