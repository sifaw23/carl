'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Hero } from '@/components/landing/Hero';
import CrazyParticles from '@/components/animations/CrazyParticles';
import { CryptoChart } from '@/components/landing/CryptoChart';
import { Footer } from '@/components/landing/Footer';

// Optimized growing circles for mobile
const GrowingCircles = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(isMobile ? 2 : 3)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-2xl sm:blur-3xl ${
            i === 0 ? 'bg-[#FF1493]/20' : i === 1 ? 'bg-[#00FF7F]/20' : 'bg-[#FF1493]/20'
          }`}
          style={{
            width: isMobile ? '150vw' : '800px',
            aspectRatio: '1',
            left: `${15 + i * (isMobile ? 20 : 15)}%`,
            top: `${25 + i * (isMobile ? 15 : 10)}%`,
            zIndex: -1,
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 100 * (i + 1), 0],
            y: [0, 50 * (i + 1), 0],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Mobile-optimized floating emojis
const FloatingEmojis = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const emojis = ['💸', '🚀', '😜', '💎', '🌙', '📈', '🤪'];

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {emojis.slice(0, dimensions.width < 768 ? 4 : 7).map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl sm:text-4xl md:text-5xl"
          initial={{ 
            y: -20,
            x: Math.random() * (dimensions.width || 100)
          }}
          animate={{
            y: dimensions.height,
            x: [
              Math.random() * (dimensions.width || 100),
              Math.random() * (dimensions.width || 100),
            ],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ opacity: 0.3 }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced chart screen with mobile optimizations
const ChartScreen = () => {
  return (
    <div className="relative w-full max-w-[1400px] mx-auto px-2 sm:px-4">
      <motion.div
        className="relative bg-[#0A0A0A] rounded-xl sm:rounded-3xl p-[2px] shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Optimized glow border */}
        <div className="absolute inset-0 rounded-xl sm:rounded-3xl bg-gradient-to-r from-[#FF1493]/50 to-[#00FF7F]/50 blur-sm" />

        <div className="relative bg-[#0A0A0A] rounded-xl sm:rounded-3xl overflow-hidden border border-white/10">
          {/* Mobile-friendly status bar */}
          <div className="absolute top-0 left-0 right-0 h-6 sm:h-8 bg-black/40 backdrop-blur-sm flex items-center justify-between px-2 sm:px-4">
            <div className="flex items-center gap-1 sm:gap-2">
              <motion.div
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00FF7F]"
                animate={{
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              />
              <span className="text-[10px] sm:text-xs text-white/60">LIVE</span>
            </div>
            <div className="text-[10px] sm:text-xs text-white/60 font-mono">
              $CARL/USD
            </div>
          </div>

          {/* Chart container */}
          <div className="pt-6 sm:pt-8">
            <div className="h-[70vh] sm:h-[85vh] w-full">
              <CryptoChart />
            </div>
          </div>

          {/* Visual effects */}
          <div className="absolute inset-0 bg-scan-lines opacity-5 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20 pointer-events-none" />
        </div>
      </motion.div>

      {/* Bottom glow effect */}
      <motion.div
        className="absolute -bottom-6 sm:-bottom-10 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 sm:h-1 bg-gradient-to-r from-[#FF1493]/0 via-[#FF1493]/50 to-[#FF1493]/0 blur-lg sm:blur-xl"
        animate={{
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />
    </div>
  );
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-purple-900 text-white overflow-x-hidden">
      {/* Background Effects */}
      <GrowingCircles />
      <FloatingEmojis />
      <CrazyParticles />

      {/* Content Wrapper */}
      <div className="flex flex-col min-h-screen">
        <Hero />
        <section className="flex-grow py-8 sm:py-16 relative">
          <ChartScreen />
        </section>
        <Footer />
      </div>
    </main>
  );
}