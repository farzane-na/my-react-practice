import React from "react";
import "./404Page.css";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="notFound">
      <iframe src="https://lottie.host/embed/f4ebc57a-67da-4516-91f5-4e02fb798fd0/EVU8HZjdzQ.json"></iframe>
      <Link to="/">
        <button className="back-home">Back To Home</button>
      </Link>
    </div>
  );
}
