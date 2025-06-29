import React from 'react';
import Image from 'next/image';

interface HeroProps {
  heading: string;
  subheading?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  fetchPriority?: 'low' | 'high' | 'auto';
}

const HeroComponent: React.FC<HeroProps> = ({
  heading,
  subheading,
  buttonText,
  onButtonClick,
  fetchPriority = 'low',
}) => {
  return (
    <div className="relative h-[490px] w-full text-start flex flex-col items-start justify-center p-25">
      <Image
        src="/images/hero-bg.webp"
        alt="Background"
        fill
        priority={fetchPriority === 'high'}
        fetchPriority={fetchPriority}
        sizes="100vw"
        quality={85}
        className="z-0 object-cover"
      />
      <div className="relative z-10">
        <h1 className="text-6xl text-white">{heading}</h1>
        {subheading && <p className="mt-2 text-white-600">{subheading}</p>}
        {buttonText && onButtonClick && (
          <button
            onClick={onButtonClick}
            className="mt-20 px-10 p-8 py-2 h-[60px] bg-white text-black text-[15px] rounded-full hover:text-blue-700 cursor-pointer transition"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroComponent;
