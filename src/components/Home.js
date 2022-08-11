import React, { Suspense } from "react";
import "./Home.css";
import sunset from "../assets/sunset.png";
import titre from "../assets/titre.png";
import { Canvas } from "@react-three/fiber";
import Furtif from "../Furtif";
import scroll from "../assets/scroll.gif";
import { motion } from "framer-motion";
import About from "./About";

function Home() {
  return (
    <div className="home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <div className="Title">
            <img src={sunset} alt="sunset" id="sunset" />
            <img src={titre} alt="titre" id="titre" />
            <div className="Jacky">
              <Canvas camera={{ zoom: 0.7 }}>
                <directionalLight intensity={0.5} />
                <ambientLight intensity={0.2} />
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
      </motion.div>
    </div>
  );
}

export default Home;
