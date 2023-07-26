import React, { useRef, useEffect, useState } from "react";

const NetworkParticles = () => {
  const canvasRef = useRef(null);
  const particleCount = 180;
  const particleSize = 2;
  const particleSpeedmin = 0.1;
  const particleSpeedmax = 0.3;
  const connectionDistance = 100;
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  let particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const { width, height } = canvasSize;

    canvas.width = width;
    canvas.height = height;

    initializeParticles();

    const animate = () => {
      updateParticles();
      drawParticles(context);
      connectParticles(context);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animate);
    };

    function initializeParticles() {
      const { width, height } = canvas;
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const vx =
          Math.random() * (particleSpeedmax - particleSpeedmin) +
          particleSpeedmin;
        const vy =
          Math.random() * (particleSpeedmax - particleSpeedmin) +
          particleSpeedmin;

        particles.push({ x, y, vx, vy });
      }
    }

    function updateParticles() {
      const { width, height } = canvas;

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x > width) {
          particle.x = 0;
        } else if (particle.x < 0) {
          particle.x = width;
        }

        if (particle.y > height) {
          particle.y = 0;
        } else if (particle.y < 0) {
          particle.y = height;
        }
      });
    }

    function drawParticles(context) {
      const { width, height } = canvas;
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        context.beginPath();
        context.arc(particle.x, particle.y, particleSize, 0, 2 * Math.PI);
        context.fillStyle = "#ffffff";
        context.fill();
        context.closePath();
      });
    }

    function connectParticles(context) {
      particles.forEach((particleA) => {
        particles.forEach((particleB) => {
          const distance = Math.sqrt(
            (particleA.x - particleB.x) ** 2 + (particleA.y - particleB.y) ** 2
          );

          if (distance < connectionDistance) {
            context.beginPath();
            context.moveTo(particleA.x, particleA.y);
            context.lineTo(particleB.x, particleB.y);
            context.strokeStyle = "rgba(255, 255, 255, 0.2)";
            context.lineWidth = 1;
            context.stroke();
            context.closePath();
          }
        });
      });
    }
  }, [canvasSize]);

  useEffect(() => {
    const handleResize = () => {
      const parentDiv = canvasRef.current.parentNode;
      const width = parentDiv.clientWidth;
      const height = parentDiv.clientHeight;
      setCanvasSize({ width, height });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default NetworkParticles;
