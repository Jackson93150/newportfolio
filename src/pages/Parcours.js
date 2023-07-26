import React from "react";
import "../assets/css/Parcours.css";
import parcours from "../assets/parcours.png";
import greendot from "../assets/greendot.png";
import pinkdot from "../assets/pinkdot.png";
import texture from "../assets/texture.jpg";


function Parcours() {
  return (
    <div className="parcours">
      <img src={texture} alt="texture" id="texture" />
      <div className="resume">
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
      <div className="graphique">
        <img src={parcours} alt="parcours" id="parcours" />
      </div>
      <div className="responsive-graph">
        <span className="line"/>
        <img src={pinkdot} alt="pinkdot" id="pinkdot" />
        <img src={pinkdot} alt="pinkdot2" id="pinkdot2" />
        <img src={greendot} alt="greendot" id="greendot" />
        <h2 className="school-1">Lycée Eugénie Cotton</h2>
        <h2 className="school-2">Université Paris VIII</h2>
        <h2 className="school-3">MyDigitalSchool</h2>
        <h3 className="degre-1">BAC</h3>
        <h3 className="degre-2">BAC + 3</h3>
        <h3 className="degre-3">MASTER</h3>
      </div>
    </div>
  );
}

export default Parcours;
