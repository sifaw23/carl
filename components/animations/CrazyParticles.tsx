import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  speed: number;
  angle: number;
  spin: number;
  emoji: string;
  size: number;
  update: (width: number, height: number) => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

const CrazyParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1920,
    height: typeof window !== 'undefined' ? window.innerHeight : 1080
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Update canvas size
    canvas.width = windowSize.width;
    canvas.height = windowSize.height;

    const emojis = ['🚀', '💎', '🌙', '💰', '🤪'];
    const isMobile = windowSize.width < 768;

    class ParticleClass implements Particle {
      x: number;
      y: number;
      speed: number;
      angle: number;
      spin: number;
      emoji: string;
      size: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.speed = (1 + Math.random() * 1) * (isMobile ? 0.7 : 1);
        this.angle = Math.random() * Math.PI * 2;
        this.spin = (Math.random() * 0.2 - 0.1) * (isMobile ? 0.7 : 1);
        this.emoji = emojis[Math.floor(Math.random() * emojis.length)];
        this.size = (15 + Math.random() * 15) * (isMobile ? 0.7 : 1);
      }

      update(width: number, height: number) {
        this.angle += this.spin;
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        // Wrap around screen edges with buffer
        if (this.x < -50) this.x = width + 50;
        if (this.x > width + 50) this.x = -50;
        if (this.y < -50) this.y = height + 50;
        if (this.y > height + 50) this.y = -50;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.globalAlpha = 0.4;
        ctx.font = `${this.size}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillText(this.emoji, 0, 0);
        ctx.restore();
      }
    }

    // Create particles with current window size
    const particleCount = isMobile ? 10 : 20;
    const particles = Array.from(
      { length: particleCount }, 
      () => new ParticleClass(windowSize.width, windowSize.height)
    );

    let animationFrameId: number;
    let lastTime = 0;
    const fps = 60;
    const frameInterval = 1000 / fps;

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // Limit FPS for performance
      const deltaTime = currentTime - lastTime;
      if (deltaTime < frameInterval) return;

      lastTime = currentTime - (deltaTime % frameInterval);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update(windowSize.width, windowSize.height);
        particle.draw(ctx);
      });
    };

    animate(0);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [windowSize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        width: '100vw',
        height: '100vh',
        opacity: 0.5,
      }}
      width={windowSize.width}
      height={windowSize.height}
    />
  );
};

export default CrazyParticles;