import React, { Suspense, useEffect } from "react";
import "./Home.css";
import sunset from "../assets/sunset.png";
import titre from "../assets/titre.png";
import { Canvas } from "@react-three/fiber";
import Furtif from "../Furtif";
import scroll from "../assets/scroll.gif";
import { motion } from "framer-motion";
import About from "./About";
import Projet from "./Projet";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

function Home() {
  useEffect(()=> {
    document.getElementById("github").onclick = function () {
      window.open("https://github.com/Jackson93150")
    }
    document.getElementById("linkedin").onclick = function () {
      window.open("https://www.linkedin.com/in/jackson-anthonipillai-20a88a227/")
    }
  })
  return (
    <div className="home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="logo">
          <img src={github} alt="github" id="github" />
          <img src={linkedin} alt="linkedin" id="linkedin" />
        </div>
        <div className="container">
          <div className="Title">
            <img src={sunset} alt="sunset" id="sunset" />
            <img src={titre} alt="titre" id="titre" />
            <div className="Jacky">
              <Canvas camera={{ zoom: 0.7 }}>
                <directionalLight intensity={0.5} color={"#ffc9f9"} />
                <ambientLight intensity={0.2} color={"#ffc9f9"} />
                <pointLight position={[30, 10, 20]} intensity={1} />
                <Suspense fallback={null}>
                  <Furtif />
                  <Furtif position={[0, 0, 0]} />
                </Suspense>
              </Canvas>
            </div>
          </div>
          <img src={scroll} alt="scroll" id="scroll" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="about">
          <About />
        </div>
        <div className="projet">
          <Projet />
        </div>
      </motion.div>
    </div>
  );
}



export default Home;
