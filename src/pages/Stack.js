import React from "react";
import "../assets/css/Stack.css";
import Card from "../components/stackCard";
import { stackPicture } from "../constants/stackData";

function Stack() {
  return (
    <div className="Stack">
      <div className="card-container">
        {stackPicture.map((image) => (
          <Card image={image} />
        ))}
      </div>
    </div>
  );
}

export default Stack;
