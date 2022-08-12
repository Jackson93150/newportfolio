import React from "react";
import "./Slider.css";

function Slider() {
  return (
    <div class="carousel-wrapper">
      <span id="item-1"></span>
      <span id="item-2"></span>
      <span id="item-3"></span>
      <span id="item-4"></span>
      <span id="item-5"></span>
      <div class="carousel-item item-1">
        <a href="#item-5" class="arrow-prev arrow"> </a>
        <a href="#item-2" class="arrow-next arrow"> </a>
        <a href="https://jackson93150.github.io/JsGame/" class="up"> </a>
        <div className="texte">
          <h1>RetroRunner</h1>
          <p>
            Made with <b>HTML </b>and <b>Javascript</b> it's an 2D Horizontal
            Shooter with 3 difficulty levels and a final boss which is the
            famous manga character <b>"Dio Brando"</b>
          </p>
        </div>
      </div>

      <div class="carousel-item item-2">
        <a href="#item-1" class="arrow-prev arrow"> </a>
        <a href="#item-3" class="arrow-next arrow"> </a>
        <a href="https://github.com/Jackson93150/newportfolio" class="up"> </a>
        <div className="texte">
          <h1>Portfolio</h1>
          <p>
            This is the Portfolio you are looking at right now , it was done in
            <b> ReactJs </b>and <b>ThreeJs</b>. To make this Portfolio I also
            use my design and 3D modeling skills with <b>Figma </b>and{" "}
            <b>Blender</b>
          </p>
        </div>
      </div>

      <div class="carousel-item item-3">
        <a href="#item-2" class="arrow-prev arrow"> </a>
        <a href="#item-4" class="arrow-next arrow"> </a>
        <a href="https://github.com/Jackson93150/LeagueStats" class="up"> </a>
        <div className="texte">
          <h1>LeagueStats</h1>
          <p>
            Written in <b>HTML/CSS</b>, <b>Python</b> and <b>FLASK</b> it can tell you in real time
            your stats on the game League of Legends by <b>scrapping</b> them on the
            web
          </p>
        </div>
      </div>

      <div class="carousel-item item-4">
        <a href="#item-3" class="arrow-prev arrow"> </a>
        <a href="#item-5" class="arrow-next arrow"> </a>
        <a href="https://jackson93150.github.io/Portfolio/" class="up"> </a>
        <div className="texte">
          <h1>Old Portfolio</h1>
          <p>
            My old Portfolio made with <b>HTML/CSS</b>, <b>Javascript</b> and some <b>JQuerry</b>
          </p>
        </div>
      </div>

      <div class="carousel-item item-5">
        <a href="#item-4" class="arrow-prev arrow"> </a>
        <a href="#item-1" class="arrow-next arrow"> </a>
        <a href="https://github.com/Jackson93150/MobileGame" class="up"> </a>
        <div className="texte">
          <h1>Memory Game</h1>
          <p>
            Mobile game made in <b>Java</b> using <b>Android Studio</b> that tests memory capacity
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slider;
