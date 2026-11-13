import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
  light = false,
}) => {
  const sizeMap = {
    sm: { height: 32, icon: 28, text: 'text-xl', tag: 'text-[10px]' },
    md: { height: 42, icon: 38, text: 'text-2xl', tag: 'text-xs' },
    lg: { height: 54, icon: 48, text: 'text-3xl', tag: 'text-sm' },
    xl: { height: 68, icon: 60, text: 'text-4xl', tag: 'text-base' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Nidhara Original Logo Icon Mark */}
      <div 
        className="relative flex items-center justify-center shrink-0 transition-transform duration-200"
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
        >
          {/* Orange Dot / Sun at top center */}
          <circle cx="50" cy="22" r="11" fill="#FF792E" />

          {/* Left Navy Leg of N */}
          <path
            d="M26 84V42C26 36.4772 30.4772 32 36 32C39.5 32 42.8 33.8 44.8 36.8L59 58V84C59 84 41 84 36 84C30.4772 84 26 84 26 84Z"
            fill={light ? "#E8F4F8" : "#087F78"}
          />
          <path
            d="M26 36C26 32.6863 28.6863 30 32 30C35.3137 30 38 32.6863 38 36V80C38 83.3137 35.3137 86 32 86C28.6863 86 26 83.3137 26 80V36Z"
            fill={light ? "#FFFFFF" : "#087F78"}
          />
          <path
            d="M32 32L61 74C62.5 76.2 64.2 78 66 78C68.5 78 70 76 70 73.5V36"
            stroke={light ? "#FFFFFF" : "#087F78"}
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right Vibrant Green Leaf */}
          <path
            d="M59 78C59 52 75 30 84 28C84 44 80 72 63 84C60.5 86 59 82 59 78Z"
            fill="url(#leafGradient)"
          />
          
          <defs>
            <linearGradient id="leafGradient" x1="59" y1="28" x2="84" y2="84" gradientUnits="userSpaceOnUse">
              <stop stopColor="#20B85A" />
              <stop offset="1" stopColor="#087F78" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <span
          className={`font-bold tracking-tight leading-none ${
            currentSize.text
          } ${light ? 'text-white' : 'text-[#087F78]'}`}
        >
          Nidhara
        </span>
        {showTagline && (
          <span
            className={`font-semibold tracking-wide mt-1 uppercase ${
              currentSize.tag
            } ${light ? 'text-[#DDF5EC]' : 'text-[#20B85A]'}`}
          >
            Credit Readiness
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
