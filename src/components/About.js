import React, { Suspense }from 'react';
import './About.css';
import { Canvas } from "@react-three/fiber";
import ellipse from "../assets/ellipse.svg";
import Dance from "../Dance";

function About() {
  return (
    <div className="About">
        <div className='box'>
            <img src={ellipse} alt="ellipse" id="ellipse" />
            <div className="JackyDance">
              <Canvas camera={{ zoom: 0.7 }}>
                <directionalLight intensity={0.5} />
                <ambientLight intensity={0.2} />
                <pointLight position={[30, 10, 20]} intensity={1} />
                <Suspense fallback={null}>
                  <Dance />
                  <Dance position={[0, 0, 0]} />
                </Suspense>
              </Canvas>
            </div>
        </div>
    </div>
  );
}

export default About;
