import React from "react";
import "../assets/css/CardStack.css";

function Card({image}) {
  return (
    <div className="stackcard">
      <img src={image} alt="cover" id="cover" />
    </div>
  );
}

export default Card;
