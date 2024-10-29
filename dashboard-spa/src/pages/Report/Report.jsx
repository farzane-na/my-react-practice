import React, { useState, useEffect } from "react";
import "./Report.css";
import SaleChart from "../../components/SaleChart/SaleChart";

export default function Report() {
  
  return (
    <div className="report">
      <h2 className="report__title">گزارشات</h2>
      
      <div className="sale-chart">
        <SaleChart />
      </div>
    </div>
  );
}
