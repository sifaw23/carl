import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

type MoodType = 'pump' | 'dump';

interface MarketMoodProps {
  mood: MoodType;
  setMood: (mood: MoodType) => void;
}

const moodContent = {
  pump: {
    icon: <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 text-[#00FF7F] mx-auto mb-4" />,
    title: "Carl&apos;s Going Parabolic!",
    description: "Sending it harder than your morning coffee, no cap! 💥☕",
    titleColor: "text-[#00FF7F]",
    textColor: "text-[#00FF7F]/80"
  },
  dump: {
    icon: <TrendingDown className="w-12 h-12 sm:w-16 sm:h-16 text-[#FF1493] mx-auto mb-4" />,
    title: "Dip? Carl Just Laughs!",
    description: "Still crazy after all these charts! 😎",
    titleColor: "text-[#FF1493]",
    textColor: "text-[#FF1493]/80"
  }
};

export const MarketMood: React.FC<MarketMoodProps> = ({ mood, setMood }) => {
  const content = moodContent[mood];

  return (
    <motion.div
      className="bg-black/20 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 
        hover:border-white/20 cursor-pointer transition-colors relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => setMood(mood === 'pump' ? 'dump' : 'pump')}
    >
      {/* Background gradient effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: mood === 'pump' 
            ? ['radial-gradient(circle at 30% 30%, #00FF7F 0%, transparent 70%)',
               'radial-gradient(circle at 70% 70%, #00FF7F 0%, transparent 70%)']
            : ['radial-gradient(circle at 30% 30%, #FF1493 0%, transparent 70%)',
               'radial-gradient(circle at 70% 70%, #FF1493 0%, transparent 70%)']
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={mood}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center relative z-10"
        >
          {/* Icon with pulse effect */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {content.icon}
          </motion.div>

          {/* Title with glow effect */}
          <motion.h3 
            className={`text-2xl sm:text-3xl md:text-4xl mb-4 font-bold ${content.titleColor}`}
            animate={{
              textShadow: [
                '0 0 8px rgba(255,255,255,0.2)',
                '0 0 16px rgba(255,255,255,0.4)',
                '0 0 8px rgba(255,255,255,0.2)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {content.title}
          </motion.h3>

          {/* Description with fade effect */}
          <motion.p 
            className={`text-base sm:text-lg md:text-xl ${content.textColor}`}
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            {content.description}
          </motion.p>
        </motion.div>
      </AnimatePresence>

      {/* Particle effects */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${
            mood === 'pump' ? 'bg-[#00FF7F]' : 'bg-[#FF1493]'
          }`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.5, 0],
            y: [0, -20],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut",
          }}
        />
      ))}
    </motion.div>
  );
};