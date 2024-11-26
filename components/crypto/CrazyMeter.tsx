import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CrazyMeter: React.FC = () => {
  const [crazyLevel, setCrazyLevel] = useState(50);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const interval = setInterval(() => {
      setCrazyLevel(Math.random() * 100);
    }, 1500);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <motion.div 
      className="relative w-full h-8 sm:h-12 bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden
        border border-white/5 hover:border-white/10 transition-colors"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background pulse effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#FF1493]/20 to-[#00FF7F]/20"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Progress bar */}
      <motion.div
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FF1493] to-[#00FF7F]"
        style={{ width: `${crazyLevel}%` }}
        animate={{
          width: `${crazyLevel}%`,
        }}
        transition={{ 
          type: "spring", 
          bounce: 0.3,
          duration: 0.8
        }}
      >
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="flex items-center gap-2 text-sm sm:text-base font-bold text-white drop-shadow-lg"
          animate={{
            textShadow: [
              '0 0 8px rgba(255,20,147,0.5)',
              '0 0 12px rgba(0,255,127,0.5)',
              '0 0 8px rgba(255,20,147,0.5)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <span>Crazy Level:</span>
          <motion.span
            key={crazyLevel}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {Math.round(crazyLevel)}%
          </motion.span>
          <motion.span
            animate={{
              rotate: [0, 15, -15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            🤪
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CrazyMeter;