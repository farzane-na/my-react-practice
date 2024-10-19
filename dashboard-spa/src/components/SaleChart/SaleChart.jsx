import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import data from "./../../SaleChrtData";

export default function SaleChart() {
  return (
    <div className="sale-chart">
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
