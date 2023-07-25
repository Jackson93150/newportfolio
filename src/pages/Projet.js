import React, { Suspense } from "react";
import "../assets/css/Projet.css";
import { Canvas } from "@react-three/fiber";
import Monde from "../components/Monde";
import Marche from "../components/Marche";
import ParticleAnimation from "../components/Particles";

function Projet() {
  return (
    <div className="Projet">
      <div className="marche">
        <Canvas camera={{ zoom: 1, position: [0, 1, 6.5] }}>
          <directionalLight intensity={0.5} color={"#ffc9f9"} />
          <ambientLight intensity={0.2} color={"#ffc9f9"} />
          <pointLight position={[-30, 10, 20]} intensity={1} />
          <Suspense fallback={null}>
            <Marche position={[0, 0, 0]} />
          </Suspense>
        </Canvas>
      </div>
      <div className="zawarudo">
        <Canvas camera={{ zoom: 1, position: [0, 0, 4.8] }}>
          <directionalLight intensity={0.5} color={"#ffc9f9"} />
          <ambientLight intensity={0.2} color={"#ffc9f9"} />
          <pointLight position={[-30, 10, 20]} intensity={1} />
          <Suspense fallback={null}>
            <Monde position={[0, -2.3, 0]} />
          </Suspense>
        </Canvas>
      </div>
      
      <ParticleAnimation />
      <div className="welcomeText">
        <h1>Hello World</h1>
        <p>
          Je m'appelle Jackson et j'ai 22 ans. Je suis un développeur junior et
          étudiant à MyDigitalSchool. Depuis mon enfance, je suis passionné par
          le design, l'art et la technologie. C'est pourquoi j'ai essayé
          d'étudier le design, mais j'ai finalement préféré m'orienter vers
          l'informatique, car cela me plaisait beaucoup plus. Mon objectif est
          de devenir un développeur fullstack accompli. Pendant mon temps libre,
          j'aime bien lire des mangas, jouer à des jeux vidéo et me dépasser en
          musculation.
        </p>
      </div>
    </div>
  );
}

export default Projet;
