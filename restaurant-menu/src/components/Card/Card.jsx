import React from "react";
import "./Card.css";

export default function Card({name,description,image,cal}) {
  return (
    <article className="card">
      <div className="card-image">
        <img
          src={image}
          alt={name}
        />
      </div>
      <h3 className="card-name">
        {name}
      </h3>
      <p className="card-description">
        {description}
      </p>
      <div className="card-footer">
        <p className="card-calory">callory : {cal}</p>
        <button className="card-btn">Buy Now</button>
      </div>
    </article>
  );
}
