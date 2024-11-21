import React,{useState} from "react";
import foods from "../../data/data";
import Card from "../Card/Card";
import "./Menu.css";

export default function Menu() {
    const [data,setData]=useState(data)
  return (
    <div className="menu">
      <ul className="menu-list">
        <li className="menu-list__item active">all</li>
        <li className="menu-list__item">all</li>
        <li className="menu-list__item">all</li>
        <li className="menu-list__item">all</li>
      </ul>
      <div className="card-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
