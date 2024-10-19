import React from "react";
import "./Home.css";
import Features from "../../components/Features/Features";
import SaleChart from "../../components/SaleChart/SaleChart";
import MessageBox from "../../components/MessageBox/MessageBox";

export default function Home() {
  return (
    <div className="home">
      <Features />
      <SaleChart />
      <div className="wrapper">
        <MessageBox />
      </div>
    </div>
  );
}
