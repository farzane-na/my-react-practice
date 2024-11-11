import React, { useState, useRef, useEffect } from "react";
import "./Timer.css";

export default function Timer() {
  const [minuteInput, setMinuteInput] = useState(1);
  const [secondInput, setSecondInput] = useState(0);
  const minuteRef = useRef(1);
  const secondRef = useRef(0);
  const [displayTrigger, setDisplayTrigger] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const setTheTime = () => {
    minuteRef.current = +minuteInput;
    secondRef.current = +secondInput;
    setIsRunning(true);
  };

  const changeMinute = (e) => {
    if (e.target.value >= 0) {
      setMinuteInput(e.target.value);
    }
  };

  const changeSecond = (e) => {
    if (e.target.value < 60) {
      setSecondInput(e.target.value);
    }
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        if (secondRef.current > 0) {
          secondRef.current -= 1;
        } else if (minuteRef.current > 0) {
          minuteRef.current -= 1;
          secondRef.current = 59;
        } else {
          setIsRunning(false);
        }
        setDisplayTrigger((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);
  const clearTimer=()=>{
    setMinuteInput(1)
    setSecondInput(0)
    minuteRef.current=0
secondRef.current=0
    setIsRunning(false)
  }
  return (
    <div className="container">
      <div className="timer">
        <span className="minute">{String(minuteRef.current).padStart(2, '0')}</span>
        <span>:</span>
        <span className="second">{String(secondRef.current).padStart(2, '0')}</span>
      </div>
      <h2>Choose Your Time :</h2>
      <div className="set-time">
        <div className="input-box">
          <input
            type="text"
            className="input-minute"
            placeholder="01"
            onChange={(e) => changeMinute(e)}
            value={String(minuteInput).padStart(2, '0')}
          />
          <span>:</span>
          <input
            type="text"
            className="input-second"
            placeholder="00"
            onChange={(e) => changeSecond(e)}
            value={String(secondInput).padStart(2, '0')}
          />
        </div>
        <button onClick={setTheTime}>Set It</button>
        <button onClick={clearTimer}>Clear Timer</button>
      </div>
    </div>
  );
}
