import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <article className="card">
      <div className="card-image">
        <img
          src="https://s7d1.scene7.com/is/image/mcdonalds/DC_202402_0521_MediumCoke_ContourGlassv1_1564x1564?wid=1000&hei=1000&dpr=off"
          alt=""
        />
      </div>
      <h3 className="card-name">
        McCafé® Iced Caramel Macchiato Macchiato Macchiato Macchiato Macchiato
      </h3>
      <p className="card-description">
        The McCafé® Strawberry Banana Smoothie recipe features the perfect
        combination of real strawberry and banana fruit purees and juices,
        blended with creamy low fat yogurt and ice.
      </p>
      <div className="card-footer">
        <p className="card-calory">100</p>
        <button className="card-btn">Buy Now</button>
      </div>
    </article>
  );
}
