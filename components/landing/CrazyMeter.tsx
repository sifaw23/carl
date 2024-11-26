
// components/landing/CrazyMeter.tsx
'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CrazyMeter: React.FC = () => {
  const [crazyLevel, setCrazyLevel] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setCrazyLevel(Math.random() * 100);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="relative w-full h-12 bg-gray-200 rounded-full overflow-hidden"
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
        animate={{
          width: `${crazyLevel}%`,
        }}
        transition={{ type: "spring", bounce: 0.5 }}
      />
      <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
        Crazy Level: {Math.round(crazyLevel)}%
      </div>
    </motion.div>
  );
};
