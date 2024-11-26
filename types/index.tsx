// types/index.ts

// Base Particle System Types
export interface Particle {
  x: number;
  y: number;
  speed: number;
  angle: number;
  spin: number;
  emoji: string;
  size: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

export interface CrazyParticleProps {
  intensity?: 'low' | 'medium' | 'high';
}

// Chart & Data Types
export interface ChartDataPoint {
  time: string;
  value: number;
}

export interface CryptoChartProps {
  data?: ChartDataPoint[];
  height?: number | string;
  width?: number | string;
  showControls?: boolean;
  theme?: 'light' | 'dark';
  animate?: boolean;
}

export interface ChartState extends ChartDataPoint {
  isGoingUp: boolean;
  currentPhrase: number;
  priceStageIndex: number;
}

export interface PriceStage {
  price: number;
  message: string;
}

// Market Types
export interface MarketMoodProps {
  mood: 'pump' | 'dump';
  setMood: (mood: 'pump' | 'dump') => void;
}

export interface TradingStats {
  price: number;
  volume24h: number;
  marketCap: number;
  holders: number;
}

// Hero Component Types
export interface RainbowTextProps {
  text: string;
  className?: string;
  speed?: 'slow' | 'medium' | 'fast';
  colorScheme?: 'default' | 'warm' | 'cool';
}

export interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

// Carl Image Types
export interface CarlImageProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  interactive?: boolean;
  effectIntensity?: 'low' | 'medium' | 'high';
  animationPreset?: 'default' | 'crazy' | 'calm';
}

export interface ImageEffectProps {
  type: 'glow' | 'sparkle' | 'rainbow' | 'hue-rotate';
  intensity?: number;
  speed?: number;
  color?: string;
}

// UI Component Types
export interface ActionButtonProps {
  href: string;
  variant: 'primary' | 'secondary';
  icon?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface GlowingButtonProps extends ActionButtonProps {
  glowColor?: string;
  glowIntensity?: number;
  pulseEffect?: boolean;
}

export interface SocialButtonProps {
  platform: 'twitter' | 'telegram';
  className?: string;
  onClick?: () => void;
}

// Background Effect Types
export interface CrazyBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'normal' | 'fast';
  colorScheme?: string[];
  mobile?: boolean;
}

// Emoji Component Types
export interface CrazyEmojiProps {
  emojis?: string[];
  followMouse?: boolean;
  followTouch?: boolean;
  maxEmojis?: number;
  opacity?: number;
}

export interface EmojiPosition {
  x: number;
  y: number;
  rotation: number;
  scale: number;
}

// Animation Types
export interface AnimationVariants {
  initial: object;
  animate: object;
  exit?: object;
}

export type AnimationPreset = {
  initial: object;
  animate: object;
  exit?: object;
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string;
    type?: string;
    repeat?: number | boolean;
  };
};

export interface MotionConfig {
  reduced?: boolean;
  speed?: number;
  intensity?: number;
}

// Theme Types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface ExtendedThemeColors extends ThemeColors {
  gradient: {
    primary: string[];
    secondary: string[];
    accent: string[];
  };
  effects: {
    glow: string;
    sparkle: string;
    rainbow: string[];
  };
}

// SVG Types
export interface SvgGradientStop {
  offset: string;
  color: string;
  opacity?: number;
}

export interface SvgAnimationProps {
  duration?: number;
  delay?: number;
  repeat?: number | 'indefinite';
  type?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
}

// Community Types
export interface CommunityMetrics {
  telegram: number;
  twitter: number;
}

// Toast/Notification Types
export interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

// Layout Types
export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

// SEO Types
export interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

// Responsive Types
export interface ResponsiveConfig {
  breakpoints: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  scaling: {
    text: number;
    spacing: number;
    effects: number;
  };
}

// Device & Performance Types
export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  performance: 'low' | 'medium' | 'high';
}

export interface PerformanceConfig {
  enableHeavyEffects: boolean;
  maxParticles: number;
  reduceMotion: boolean;
  optimizeMobile: boolean;
}

// Event Types
export interface InteractionEvents {
  onHover?: () => void;
  onTap?: () => void;
  onLongPress?: () => void;
  onDoubleTap?: () => void;
}

// Error Types
export interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

export interface ErrorState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

// Utility Types
export type ColorScheme = 'default' | 'warm' | 'cool' | 'custom';
export type AnimationSpeed = 'slow' | 'normal' | 'fast';
export type EffectIntensity = 'low' | 'medium' | 'high';

// Constants
export const ANIMATION_PRESETS: Record<string, AnimationPreset> = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  popIn: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { type: "spring" }
  }
};

export const DEFAULT_THEME: ExtendedThemeColors = {
  primary: '#FF1493',
  secondary: '#00FF7F',
  accent: '#FFD700',
  background: '#120321',
  text: '#FFFFFF',
  gradient: {
    primary: ['#FF1493', '#FF4500'],
    secondary: ['#00FF7F', '#00BFFF'],
    accent: ['#FFD700', '#FF1493']
  },
  effects: {
    glow: 'rgba(255,20,147,0.5)',
    sparkle: 'rgba(255,255,255,0.8)',
    rainbow: ['#FF1493', '#FF4500', '#FFD700', '#00FF7F', '#00BFFF', '#9400D3']
  }
};

export const PERFORMANCE_CONFIGS: Record<'low' | 'medium' | 'high', PerformanceConfig> = {
  low: {
    enableHeavyEffects: false,
    maxParticles: 20,
    reduceMotion: true,
    optimizeMobile: true
  },
  medium: {
    enableHeavyEffects: true,
    maxParticles: 50,
    reduceMotion: false,
    optimizeMobile: true
  },
  high: {
    enableHeavyEffects: true,
    maxParticles: 100,
    reduceMotion: false,
    optimizeMobile: false
  }
};

// Default Animation Values
export const DEFAULT_ANIMATION_SPEEDS = {
  slow: 2,
  normal: 1,
  fast: 0.5
};

// Breakpoint Values
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280
};