
// components/ui/SocialButton.tsx
'use client'

import { motion } from 'framer-motion';
import React from 'react';
import type { SocialButtonProps } from '@/types';

const platformData = {
  twitter: { 
    icon: '🐦', 
    text: 'Follow Carl',
    href: 'https://x.com/CrazyCarltoken'
  },
  telegram: { 
    icon: '📱', 
    text: 'Join Channel',
    href: 'https://t.me/+o4XlacsvDoQwMzY0'
  }
} as const;

export const SocialButton: React.FC<SocialButtonProps> = ({ 
  platform, 
  className = '',
  onClick 
}) => {
  const { icon, text, href } = platformData[platform];

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full font-bold text-white 
                hover:bg-white/20 transition-colors duration-300 flex items-center gap-2 ${className}`}
    >
      <span className="text-xl">{icon}</span>
      <span>{text}</span>
    </motion.a>
  );
};
