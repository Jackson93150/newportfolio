import React, { useState } from "react";
import "../assets/css/Projet.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../components/swiperCard";
import { projectData } from "../constants/projectData";
import NetworkParticles from "../components/Network";

function Projet() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [lastHoveredIndex, setLastHoveredIndex] = useState(null);

  const handleSlideHover = (index) => {
    setHoveredIndex(index);
  };

  const handleSlideLeave = () => {
    setLastHoveredIndex(hoveredIndex);
    setHoveredIndex(null);
  };

  return (
    <div className="projet">
      <div className="particles">
        <NetworkParticles />
      </div>
      <h2>MES PROJETS</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides={false}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
            slidesOffsetBefore: 20,
            slidesOffsetAfter: 20,
            spaceBetween: 12,
          },
          767: {
            slidesPerView: 3.5,
            slidesOffsetBefore: 100,
            slidesOffsetAfter: 100,
            spaceBetween: 24,
          },
          1920: {
            slidesPerView: 4.5,
            slidesOffsetBefore: 150,
            slidesOffsetAfter: 150,
            spaceBetween: 36,
          },
        }}
      >
        {projectData.map((card, index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => handleSlideHover(index)}
            onMouseLeave={handleSlideLeave}
          >
            <Card cover={card.link} name={card.name} />
          </SwiperSlide>
        ))}
      </Swiper>
      <p
        className={
          hoveredIndex !== null || lastHoveredIndex !== null
            ? "animate" + lastHoveredIndex
            : ""
        }
      >
        {hoveredIndex !== null
          ? projectData[hoveredIndex].description
          : lastHoveredIndex !== null
          ? projectData[lastHoveredIndex].description
          : projectData[0].description}
      </p>
    </div>
  );
}

export default Projet;
