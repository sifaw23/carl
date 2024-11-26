
// components/ui/ActionButton.tsx
'use client'

import { motion } from 'framer-motion';
import React from 'react';
import type { ActionButtonProps } from '@/types';

export const ActionButton: React.FC<ActionButtonProps> = ({
  href,
  variant,
  icon,
  children,
  className = '',
  onClick
}) => {
  const baseStyles = "px-6 py-3 rounded-full text-lg font-bold text-white shadow-lg transition-all duration-300 flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-gradient-to-r from-pink-500 to-purple-500 shadow-pink-500/25 hover:shadow-pink-500/40 hover:from-pink-600 hover:to-purple-600",
    secondary: "bg-gradient-to-r from-cyan-400 to-blue-500 shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-cyan-500 hover:to-blue-600"
  };

  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && (
        <motion.span
          className="inline-block"
          animate={{ y: [-2, 2] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        >
          {icon}
        </motion.span>
      )}
      <span>{children}</span>
    </motion.a>
  );
};