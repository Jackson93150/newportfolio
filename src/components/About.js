import React, { Suspense } from "react";
import "./About.css";
import { Canvas } from "@react-three/fiber";
import ellipse from "../assets/ellipse.svg";
import Dance from "../Dance";

function About() {
  return (
    <div className="About">
      <div className="box">
        <img src={ellipse} alt="ellipse" id="ellipse" />
        <div className="JackyDance">
          <Canvas camera={{ zoom: 0.7 }}>
            <directionalLight intensity={0.5} color={"#ffc9f9"}/>
            <ambientLight intensity={0.2} color={"#ffc9f9"}/>
            <pointLight position={[30, 10, 20]} intensity={1}  />
            <Suspense fallback={null}>
              <Dance />
              <Dance position={[0, 0, 0]} />
            </Suspense>
          </Canvas>
        </div>
        <div className="texta">
          <h1>
            <font color="#F8F6CB">About Me</font>
          </h1>
          <p>
            Hi, my name is <b>Jackson </b>
            I'm 21 and I am a <b>Developer </b>
            and a student at <b>MyDigitalSchool.</b><br></br>I am someone who has loved
            <b> design, art and tech </b>since childhood. <br></br>That’s why I tried to
            study design, but I prefer to do computer science and keep design
            as a passion. <br></br>Now I like to practice computer science and I like
            even more when I have to incorporate design. My goal is to be an
            <b> accomplished fullstack developer. </b><br></br>I also like to
            <b> read and watch manga, play video games and go to the gym.</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
