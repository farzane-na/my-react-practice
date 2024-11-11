import React, { useState, useRef, useEffect } from "react";
import "./Timer.css";

export default function Timer() {
    const minute=useRef(1)
    const second=useRef(0)
  return (
    <div className="container">
      <div className="timer">
        <span className="minute">{minute.current}</span>
        <span>:</span>
        <span className="second">{second.current}</span>
      </div>
      <h2>Choose Your Time :</h2>
      <div className="set-time">
        <div className="input-box">
          <input type="text" className="input-minute" placeholder="01" />
          <span>:</span>
          <input type="text" className="input-second" placeholder="00" />
        </div>
        <button>Set It</button>
      </div>
    </div>
  );
}
