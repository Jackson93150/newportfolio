import React, { Suspense } from "react";
import "./Projet.css";
import { Canvas } from "@react-three/fiber";
import Monde from "../Monde";
import Marche from "../Marche";
import Slide from "./Slider";

function Projet() {
  return (
    <div className="Projet">
      <div className="zawarudo">
        <Canvas camera={{ zoom: 1, position: [0, 0, 8] }}>
          <directionalLight intensity={0.5} color={"#ffc9f9"} />
          <ambientLight intensity={0.2} color={"#ffc9f9"} />
          <pointLight position={[30, 10, 20]} intensity={1} />
          <Suspense fallback={null}>
            <Monde />
            <Monde position={[0, 0, 0]} />
          </Suspense>
        </Canvas>
      </div>
      <div className="marche">
        <Canvas camera={{ zoom: 1, position: [0, 0, 8] }}>
          <directionalLight intensity={0.5} color={"#ffc9f9"} />
          <ambientLight intensity={0.2} color={"#ffc9f9"} />
          <pointLight position={[30, 10, 20]} intensity={1} />
          <Suspense fallback={null}>
            <Marche />
            <Marche position={[0, 0, 0]} />
          </Suspense>
        </Canvas>
      </div>
      <div className="slider">
        <Slide/>
      </div>
    </div>
  );
}

export default Projet;
