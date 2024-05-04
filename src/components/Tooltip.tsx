import React, { useState, useRef } from 'react';

interface TooltipProps {
  width: string
  top: string
  left: string
  content: React.ReactNode;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ left, top, width, content, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    setIsVisible(true);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 100);
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-10 px-[30px] py-1 text-lg text-black bg-gray-50 border-2 border-black rounded shadow-sm transform -translate-x-1/2"
        style={{ width, top, left }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
          >
          {content}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[calc(100%+2px)] border-[12px] border-t-gray-50 border-r-transparent border-b-transparent border-l-transparent"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[calc(100%)] border-[14px] border-t-black border-r-transparent border-b-transparent border-l-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;