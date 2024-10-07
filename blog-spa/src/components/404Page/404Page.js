import React from "react";
import "./404Page.css";
import { Link } from "react-router-dom";
import notFound from './../404Page/notFound.json'
import Lottie from 'react-lottie';

export default function Page404() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="notFound">
      <Lottie options={defaultOptions} height={400} width={400} />
      {/* <iframe src="https://lottie.host/embed/f4ebc57a-67da-4516-91f5-4e02fb798fd0/EVU8HZjdzQ.json"></iframe> */}
      <Link to="/">
        <button className="back-home">Back To Home</button>
      </Link>
    </div>
  );
}
