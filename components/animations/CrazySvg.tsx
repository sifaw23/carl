
// components/animations/CrazySvg.tsx
'use client'

import React from 'react';

export const CrazySvg: React.FC = () => {
  return (
    <svg 
      viewBox="0 0 400 400" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="crazyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%">
            <animate 
              attributeName="stop-color" 
              values="#FF1493; #00FF7F; #FF1493"
              dur="4s" 
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%">
            <animate 
              attributeName="stop-color" 
              values="#00FF7F; #FF1493; #00FF7F"
              dur="4s" 
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>

        <filter id="turbulence">
          <feTurbulence 
            type="turbulence" 
            baseFrequency="0.01" 
            numOctaves="3" 
            seed="1"
          >
            <animate 
              attributeName="baseFrequency"
              values="0.01;0.02;0.01"
              dur="10s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="20"/>
        </filter>
      </defs>

      <circle cx="200" cy="200" r="180" fill="url(#crazyGradient)">
        <animate
          attributeName="r"
          values="180;190;180"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      <g id="orbiters">
        {['🚀', '💎', '🌙'].map((emoji, index) => (
          <text
            key={emoji}
            x={200 + 150 * Math.cos((index * 2 * Math.PI) / 3)}
            y={200 + 150 * Math.sin((index * 2 * Math.PI) / 3)}
            fontSize="20"
            fill="white"
            textAnchor="middle"
          >
            {emoji}
            <animateTransform
              attributeName="transform"
              type="rotate"
              from={`${index * 120} 200 200`}
              to={`${index * 120 + 360} 200 200`}
              dur={`${3 + index}s`}
              repeatCount="indefinite"
            />
          </text>
        ))}
      </g>

      <text 
        x="200" 
        y="210" 
        textAnchor="middle" 
        fontSize="48" 
        fill="white" 
        filter="url(#turbulence)"
      >
        $CARL
      </text>
    </svg>
  );
};
