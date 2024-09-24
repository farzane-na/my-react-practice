import "./Header.css";
import React from "react";
import Nav from "../Nav/Nav";
import NewsLetter from "../NesLetter/NewsLetter";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Nav />
        <div className="header__content">
          <aside>
            <h1 className="header__titlle">
              The latest articles and courses to help you upgrade your skills.
            </h1>
            <p className="header__caption">
              Master Web Development with amazing resources that are available
              for free! Join our Newsletter and get alerted when new articles,
              topics or courses are published.
            </p>
            <NewsLetter />
          </aside>
          <div className="header__picture">
            <img
              src="./images/header-img.png"
              alt="header"
              className="header__picture-img"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
