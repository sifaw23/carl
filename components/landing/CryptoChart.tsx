import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartDataPoint {
  time: string;
  value: number;
}

interface PriceStage {
  price: number;
  message: string;
}

interface MovingSymbolProps {
  cx: number;
  cy: number;
  isGoingUp: boolean;
}

interface CustomDotProps {
  cx?: number;
  cy?: number;
  index?: number;
  data?: ChartDataPoint[];
  isGoingUp: boolean;
}

interface TooltipPayload {
  value: number;
  dataKey: string;
  payload: ChartDataPoint;
}

const PRICE_STAGES: PriceStage[] = [
  { price: 0.0003, message: "We just getting started fam! 😤" },
  { price: 0.0012, message: "Ayy we pumping! 📈" },
  { price: 0.0006, message: "Paper hands getting shaken 🤣" },
  { price: 0.0005, message: "Weak hands gone, real ones know 💎" },
  { price: 0.02, message: "HOLY SHIT WE MOONING! 🚀" },
  { price: 0.5, message: "BROOO 500M MC! WE EATING GOOD! 🍽️" },
  { price: 1.0, message: "1 BILLI MC! IMAGINE NOT APING IN! 🦍" }
];

const MEME_PHRASES = {
  pump: [
    "1000x INCOMING! 🚀",
    "BEARS IN SHAMBLES! 📈",
    "PAPERHANDS NGMI! 🤡",
    "PUMP OR DIE! 🔥",
    "WE ALL GONNA MAKE IT! 💰",
  ],
  dump: [
    "THANKS FOR THE LIQUIDITY! 😂",
    "DISCOUNT OF A LIFETIME! 💎",
    "FILLING MY BAGS RN! 🎯",
    "SHAKING OUT PAPER HANDS! 🧻",
    "LAST CHANCE THIS CHEAP! 🔥",
  ]
} as const;

const formatLargeNumber = (value: number): string => {
  if (value >= 1e9) {
    return `$${(value / 1e9).toFixed(2)}B`;
  } else if (value >= 1e6) {
    return `$${(value / 1e6).toFixed(2)}M`;
  } else if (value >= 1e3) {
    return `$${(value / 1e3).toFixed(2)}K`;
  }
  return `$${value.toFixed(2)}`;
};

const MovingSymbol: React.FC<MovingSymbolProps> = ({ cx, cy, isGoingUp }) => (
  <motion.g>
    <motion.circle
      cx={cx}
      cy={cy}
      r={20}
      fill={isGoingUp ? "rgba(0, 255, 127, 0.2)" : "rgba(255, 20, 147, 0.2)"}
      animate={{
        r: [20, 25, 20],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
    />
    <motion.text
      x={cx}
      y={cy}
      textAnchor="middle"
      dominantBaseline="middle"
      fill="white"
      fontSize="14"
      fontWeight="bold"
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, -5, 5, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
    >
      $CARL
    </motion.text>
  </motion.g>
);

const CustomDot: React.FC<CustomDotProps> = ({ cx, cy, index, data, isGoingUp }) => {
  if (typeof cx !== 'number' || typeof cy !== 'number' || !data?.length) return null;
  if (index === data.length - 1) {
    return <MovingSymbol cx={cx} cy={cy} isGoingUp={isGoingUp} />;
  }
  return null;
};

export const CryptoChart: React.FC = () => {
  // Initialize with empty array of correct type
  const initialDataPoint: ChartDataPoint[] = [{ time: '0', value: PRICE_STAGES[0].price }];
  const [data, setData] = useState<ChartDataPoint[]>(initialDataPoint);
  const [isGoingUp, setIsGoingUp] = useState(true);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(PRICE_STAGES[0].price);
  const [priceStageIndex, setPriceStageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const generateData = (): ChartDataPoint[] => {
      let value = currentPrice;
      const targetPrice = PRICE_STAGES[priceStageIndex].price;
      const isMovingUp = targetPrice > currentPrice;
      const volatility = isMovingUp ? 0.5 : 0.3;
      const trend = isMovingUp ? 1.3 : 0.85;

      return Array.from({ length: 20 }, (_, i): ChartDataPoint => {
        value = value * (trend + (Math.random() - 0.5) * volatility);
        if (isMovingUp && value > targetPrice * 1.1) {
          value = targetPrice * (0.9 + Math.random() * 0.2);
        } else if (!isMovingUp && value < targetPrice * 0.9) {
          value = targetPrice * (0.9 + Math.random() * 0.2);
        }
        return {
          time: i.toString(),
          value
        };
      });
    };

    const dataInterval = setInterval(() => {
      const newData = generateData();
      setData(newData);
      const lastPrice = newData[newData.length - 1].value;
      setCurrentPrice(lastPrice);

      const targetPrice = PRICE_STAGES[priceStageIndex].price;
      if (Math.abs(lastPrice - targetPrice) / targetPrice < 0.1) {
        if (priceStageIndex < PRICE_STAGES.length - 1) {
          setPriceStageIndex(prev => prev + 1);
        }
      }

      setIsGoingUp(lastPrice > currentPrice);
      setCurrentPhrase(Math.floor(Math.random() * 5));
    }, 2000);

    return () => clearInterval(dataInterval);
  }, [currentPrice, priceStageIndex]);

  const formatPrice = (value: number): string => {
    if (value < 0.0001) return value.toExponential(4);
    if (value < 0.01) return value.toFixed(6);
    if (value < 1) return value.toFixed(4);
    return value.toFixed(2);
  };

  const getMarketCap = (price: number): string => {
    const supply = 1_000_000_000;
    const marketCap = price * supply;
    return formatLargeNumber(marketCap);
  };

  const getPercentChange = (): string => {
    if (data.length < 2) return '0';
    const firstPrice = data[0].value;
    const lastPrice = data[data.length - 1].value;
    return ((lastPrice - firstPrice) / firstPrice * 100).toFixed(2);
  };

  return (
    <div className="relative w-full h-full bg-[#0A0A0A] rounded-lg p-2 sm:p-4 border border-gray-800">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-2 sm:mb-4">
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="text-[#FF1493] text-xl sm:text-2xl font-bold font-mono">$CARL</span>
          <div className="flex flex-col">
            <span className="text-white/60 text-xs sm:text-sm">Price Chart</span>
            <span className={`text-xs ${isGoingUp ? 'text-[#00FF7F]' : 'text-[#FF1493]'}`}>
              {getPercentChange()}% {isGoingUp ? '↑' : '↓'}
            </span>
          </div>
        </div>
        <div className="flex items-end sm:items-center gap-2 sm:gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`price-${currentPrice}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex flex-col items-end"
            >
              <span 
                className="text-lg sm:text-2xl font-mono font-bold" 
                style={{ color: isGoingUp ? '#00FF7F' : '#FF1493' }}
              >
                ${formatPrice(currentPrice)}
              </span>
              <span className="text-white/40 font-mono text-xs sm:text-sm">
                MC: {getMarketCap(currentPrice)}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative h-[calc(100%-60px)]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={isGoingUp ? "#00FF7F" : "#FF1493"} stopOpacity={0.2}/>
                <stop offset="100%" stopColor={isGoingUp ? "#00FF7F" : "#FF1493"} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="time" 
              stroke="#333"
              tick={{ fill: '#666', fontSize: isMobile ? 10 : 12 }}
            />
            <YAxis 
              type="number"
              domain={['auto', 'auto']}
              stroke="#333"
              tick={{ fill: '#666', fontSize: isMobile ? 10 : 12 }}
              tickFormatter={formatPrice}
              width={isMobile ? 60 : 80}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length > 0) {
                  const value = (payload[0] as TooltipPayload).value;
                  return (
                    <div className="bg-black/90 border border-gray-800 p-2 sm:p-3 rounded-lg backdrop-blur-sm">
                      <p className="text-xs sm:text-sm font-mono">
                        <span style={{ color: isGoingUp ? '#00FF7F' : '#FF1493' }}>
                          ${formatPrice(value)}
                        </span>
                        <br />
                        <span className="text-xs text-white/60">
                          MC: {getMarketCap(value)}
                        </span>
                        <br />
                        <span className="text-xs text-white/60">
                          {isGoingUp ? MEME_PHRASES.pump[currentPhrase] : MEME_PHRASES.dump[currentPhrase]}
                        </span>
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={isGoingUp ? "#00FF7F" : "#FF1493"}
              strokeWidth={2}
              dot={false}
              fill="url(#chartGradient)"
            />
          </LineChart>
        </ResponsiveContainer>

        <motion.div
          className="absolute top-4 right-4 z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          key={priceStageIndex}
        >
          <span className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg ${
            isGoingUp ? 'bg-[#00FF7F]/20 text-[#00FF7F]' : 'bg-[#FF1493]/20 text-[#FF1493]'
          }`}>
            {PRICE_STAGES[priceStageIndex].message}
          </span>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-[1px]"
              style={{
                left: `${i}%`,
                height: `${20 + Math.random() * 80}%`,
                backgroundColor: isGoingUp ? '#00FF7F' : '#FF1493',
                opacity: 0.1
              }}
              animate={{
                height: [`${20 + Math.random() * 80}%`, `${20 + Math.random() * 80}%`],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};