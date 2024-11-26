import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ActionButton } from '../ui/ActionButton';
import CarlImage from '../animations/CarlImage';

interface RainbowTextProps {
  text: string;
  className?: string;
}

interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
}

// Optimized rainbow text with better mobile performance
const RainbowText: React.FC<RainbowTextProps> = ({ text, className = "" }) => {
  const colors = ['#FF1493', '#FF4500', '#FFD700', '#00FF7F', '#00BFFF', '#9400D3'];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`flex flex-wrap ${className}`}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          style={{ color: colors[i % colors.length] }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: isMobile ? 0 : [0, 3, -3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * (isMobile ? 0.05 : 0.1),
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};

// Mobile-optimized background effect
const CrazyBackground: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, #FF1493 0%, transparent 50%)',
            'radial-gradient(circle at 70% 70%, #00FF7F 0%, transparent 50%)',
            'radial-gradient(circle at 30% 70%, #FFD700 0%, transparent 50%)',
            'radial-gradient(circle at 70% 30%, #FF1493 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: isMobile ? 15 : 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {[...Array(isMobile ? 3 : 5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="w-full h-full bg-gradient-conic from-purple-500/20 via-pink-500/20 to-yellow-500/20"
            style={{
              transform: `rotate(${72 * i}deg)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

// Enhanced text reveal animation
const TextReveal: React.FC<TextRevealProps> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.8,
      delay,
      ease: "easeOut"
    }}
  >
    {children}
  </motion.div>
);

export const Hero: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#120321] px-4 py-16 sm:py-0">
      <CrazyBackground />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Left side - Text */}
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 md:space-y-8 text-center md:text-left">
            <TextReveal>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold leading-tight">
                <RainbowText 
                  text="The Face of"
                  className="justify-center md:justify-start mb-2 sm:mb-4"
                />
                <motion.span 
                  className="block text-white mt-2"
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(255,20,147,0.8)',
                      '0 0 40px rgba(0,255,127,0.8)',
                      '0 0 20px rgba(255,20,147,0.8)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  Crypto Chaos
                </motion.span>
              </h1>
            </TextReveal>

            <TextReveal delay={0.3}>
              <motion.p 
                className="text-sm sm:text-base md:text-lg text-gray-300 relative max-w-[90%] mx-auto md:mx-0"
              >
                Meet crypto&apos;s wildest meme – Carl&apos;s here to vibe through every pump, dump, and meltdown. Your fave market fail? Bet it&apos;s $CARL. 
                <motion.span
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="inline-block ml-1"
                >
                  🤪
                </motion.span>
              </motion.p>
            </TextReveal>

            <TextReveal delay={0.6}>
              <motion.div 
                className="flex gap-3 sm:gap-4 flex-wrap justify-center md:justify-start"
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <ActionButton 
                  href="#" 
                  variant="primary" 
                  icon="💸"
                  className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-sm sm:text-base"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-pink-500/20"
                    animate={{
                      x: ['0%', '100%', '0%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />
                  Be Like Carl
                </ActionButton>
                <ActionButton 
                  href="https://t.me/+o4XlacsvDoQwMzY0" 
                  variant="secondary" 
                  icon="🚀"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-105 hover:rotate-3 text-sm sm:text-base"
                >
                  Share the Madness
                </ActionButton>
              </motion.div>
            </TextReveal>
          </div>

          {/* Right side - Carl's Image */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-[300px] sm:max-w-[400px] md:max-w-[600px] mx-auto">
              <CarlImage />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile scroll indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 md:hidden"
        animate={{
          y: [0, 5, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <motion.div
            className="w-1 h-6 rounded-full border border-white/30"
            animate={{
              borderColor: ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.6)', 'rgba(255,255,255,0.3)'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <motion.div
              className="w-1 h-2 bg-white/50 rounded-full"
              animate={{
                y: [0, 16, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>
          <span className="text-xs">Scroll</span>
        </div>
      </motion.div>
    </div>
  );
};