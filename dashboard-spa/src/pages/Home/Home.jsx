import React from "react";
import "./Home.css";
import Features from "../../components/Features/Features";
import SaleChart from "../../components/SaleChart/SaleChart";

export default function Home() {
  return (
    <div className="home">
      <Features />
      <SaleChart />
    </div>
  );
}
