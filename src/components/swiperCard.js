import React from "react";
import "../assets/css/Card.css";

function Card({ cover, name }) { 
  return (
    <div className="card">
      {cover && <img src={cover} alt="cover" id="cover" />}
    </div>
  );
}

export default Card;
