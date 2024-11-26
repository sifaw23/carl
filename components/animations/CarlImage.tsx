import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useAnimationControls } from 'framer-motion';
import type { CarlImageProps } from '@/types';

const CarlImage: React.FC<CarlImageProps> = ({
  size = 'md',
  className = '',
  interactive = true,
  effectIntensity = 'medium',
}) => {
  const imageControls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Get dynamic size based on screen width
  const getDynamicSize = () => {
    if (isMobile) {
      return {
        width: 'w-[280px]',
        height: 'h-[280px]',
        containerClass: 'px-4'
      };
    }

    switch (size) {
      case 'sm':
        return {
          width: 'w-[300px]',
          height: 'h-[300px]',
          containerClass: ''
        };
      case 'md':
        return {
          width: 'w-[400px]',
          height: 'h-[400px]',
          containerClass: ''
        };
      case 'lg':
        return {
          width: 'w-[600px]',
          height: 'h-[600px]',
          containerClass: ''
        };
      default:
        return {
          width: 'w-[400px]',
          height: 'h-[400px]',
          containerClass: ''
        };
    }
  };

  const { width, height, containerClass } = getDynamicSize();

  const handleInteraction = async () => {
    if (!interactive) return;

    setIsHovered(true);
    await imageControls.start({
      scale: [1, 1.1, 0.95, 1.05, 1],
      rotate: [0, -5, 8, -3, 0],
      transition: { 
        duration: isMobile ? 0.5 : 0.8,
        ease: "easeInOut"
      }
    });
    setIsHovered(false);
  };

  return (
    <motion.div 
      className={`relative select-none ${containerClass} ${className}`}
      onHoverStart={() => !isMobile && handleInteraction()}
      onTapStart={() => handleInteraction()}
    >
      <motion.div 
        className={`relative mx-auto ${width} ${height}`}
        animate={imageControls}
      >
        {/* Background energy aura - Optimized for mobile */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-75"
          animate={{
            background: [
              'radial-gradient(circle at 30% 30%, #FFD700 0%, transparent 70%)',
              'radial-gradient(circle at 70% 70%, #FF1493 0%, transparent 70%)',
              'radial-gradient(circle at 30% 70%, #00FF7F 0%, transparent 70%)',
              'radial-gradient(circle at 70% 30%, #FFD700 0%, transparent 70%)',
            ],
            scale: [1, 1.05, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: isMobile ? 15 : 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Energy effects - Reduced for mobile */}
        {effectIntensity !== 'low' && [...Array(isMobile ? 4 : 8)].map((_, i) => (
          <motion.div
            key={`energy-${i}`}
            className="absolute -inset-4 rounded-full border-2 border-transparent"
            style={{
              borderImage: 'linear-gradient(45deg, #FF1493, #FFD700, #00FF7F) 1',
              transform: `rotate(${45 * i}deg)`,
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: isMobile ? 3 : 2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Main image container */}
        <motion.div 
          className="relative z-10 w-full h-full"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Goggle glint effect - Simplified for mobile */}
          {effectIntensity !== 'low' && !isMobile && (
            <motion.div
              className="absolute inset-0 z-20 mix-blend-overlay"
              animate={{
                background: [
                  'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.8) 0%, transparent 10%)',
                  'radial-gradient(circle at 38% 38%, rgba(255,255,255,0.8) 0%, transparent 10%)',
                  'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.8) 0%, transparent 10%)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}

          {/* Carl's image */}
          <div className="relative w-full h-full">
            <Image 
              src="/crazy-carl.png"
              alt="Crazy Carl"
              fill
              priority
              className="object-contain drop-shadow-[0_0_20px_rgba(255,20,147,0.4)]"
              sizes={isMobile ? '280px' : 
                size === 'sm' ? '300px' :
                size === 'md' ? '400px' :
                '600px'
              }
            />
          </div>

          {/* Rainbow scarf effect - Adjusted for mobile */}
          {effectIntensity !== 'low' && (
            <motion.div
              className="absolute bottom-[38%] left-1/2 -translate-x-1/2 w-[60%] h-[8%] sm:h-[10%] bg-gradient-to-r from-[#FF1493] via-[#FFD700] to-[#00FF7F] blur-sm"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: isMobile ? 3 : 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.div>

        {/* Floating emojis - Reduced for mobile */}
        {effectIntensity !== 'low' && (
          ["🤪", "💸", "🚀"].map((emoji, i) => (
            <motion.div
              key={`emoji-${i}`}
              className={`absolute ${isMobile ? 'text-xl' : 'text-2xl sm:text-3xl'}`}
              style={{
                top: `${15 + (i * (isMobile ? 15 : 12))}%`,
                left: `${80 + (i % 2 * (isMobile ? 8 : 10))}%`,
              }}
              animate={{
                y: [-5, 5],
                x: [-3, 3],
                rotate: [-15, 15],
                scale: [0.9, 1.1],
              }}
              transition={{
                duration: 2 + i * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            >
              {emoji}
            </motion.div>
          ))
        )}

        {/* Sparkles - Reduced for mobile */}
        {effectIntensity === 'high' && [...Array(isMobile ? 6 : 12)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 0.6, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: isMobile ? 2 : 1.5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "backOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CarlImage;