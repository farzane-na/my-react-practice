import React from "react";
import NewsLetter from "../NesLetter/NewsLetter";
import "./NewsLetterSection.css"

export default function NewsLetterSection() {
  return (
    <section className="newsletter-sec">
      <div className="newsletter-content">
        <div className="newsletter-img">
          <img src="./images/email-img.png" alt="email" />
        </div>
        <div className="newsletter-text">
          <h2 className="newsletter-title">Subscribe to our Newsletter</h2>
          <p className="newsletter-caption">
          Master web Development with amazing resources that are available for free! Join our Newsletter and get alert when new articles, topics, or courses are published.
          </p>
        </div>
      </div>
        <NewsLetter />
        <p>We Promise not to spam you!</p>
    </section>
  );
}
