import React, { useEffect } from "react";
import "../assets/css/Home.css";
import Projet from "./Projet";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import Parcours from "./Parcours";

function Home() {
  useEffect(() => {
    document.getElementById("github").onclick = function () {
      window.open("https://github.com/Jackson93150");
    };
    document.getElementById("linkedin").onclick = function () {
      window.open(
        "https://www.linkedin.com/in/jackson-anthonipillai-20a88a227/"
      );
    };
  });
  return (
    <div className="home">
      <div className="logo">
        <img src={github} alt="github" id="github" />
        <img src={linkedin} alt="linkedin" id="linkedin" />
      </div>
      <Projet />
      <Parcours />
    </div>
  );
}

export default Home;
