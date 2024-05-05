import React, { useState, useEffect } from 'react';

interface DropdownProps {
  text: string;
  desc: string;
  vid?: string;
}

const Dropdown: React.FC<DropdownProps> = ({text, desc, vid}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [arrowClass, setArrowClass] = useState<string>('rotate-180');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setArrowClass(isOpen ? 'rotate-90' : 'rotate-0');
    }, 0);

    return () => clearTimeout(timeout);
  }, [isOpen]);

  return (
    <div className='flex flex-col'>
      <div
        className="px-4 py-2 cursor-pointer flex items-center"
        onClick={toggleDropdown}
      >
        <span className={`transition-transform duration-200 ${arrowClass}`}>
          <svg
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="ml-[5px] font-semibold">{text}</span>
      </div>
      {isOpen && (
        <div className="px-4 py-2">
          <div className='px-[21px] text-justify'>
            {desc}
          </div>
          {vid && 
            (<div className="flex flex-col items-center my-[20px]">
              <video className="flex w-[60%]" disablePictureInPicture controls>
                <source src={vid} />
              </video>
            </div>
            )
          }
        </div>
      )}
    </div>
  );
};

export default Dropdown;