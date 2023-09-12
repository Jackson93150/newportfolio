import React, { useRef, useEffect } from "react";

function ParticleAnimation() {
  const canvasRef = useRef(null);
  const particleCount = 500;
  const particleSize = 1;
  const particleSpeedMin = 0.05;
  const particleSpeedMax = 0.08;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let particles = [];

    const resetParticles = () => {
      particles = [];
      initializeParticles();
    };

    const createParticle = () => {
      const particle = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * particleSize + 0.1,
        speed:
          Math.random() * (particleSpeedMax - particleSpeedMin) +
          particleSpeedMin,
        angle: Math.random() * 360,
      };
      return particle;
    };

    const initializeParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const drawParticles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "#ffffff";

      particles.forEach((particle) => {
        const { x, y, size, angle } = particle;

        const radians = angle * (Math.PI / 180);
        const dx = Math.cos(radians) * particle.speed;
        const dy = Math.sin(radians) * particle.speed;
        particle.y -= dy;
        particle.x += dx;

        context.beginPath();
        context.arc(x, y, size, 0, 2 * Math.PI);
        context.fill();

        if (particle.y < 0 || particle.x < 0 || particle.x > canvas.width) {
          Object.assign(particle, createParticle());
        }
      });
    };

    const animate = () => {
      requestAnimationFrame(animate);
      drawParticles();
    };

    const initializeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeParticles();
      animate();
    };

    initializeCanvas();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      resetParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default ParticleAnimation;
