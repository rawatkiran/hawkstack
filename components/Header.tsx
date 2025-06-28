import React from 'react';

interface HeaderProps {
  heading: string;
  subheading?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ heading, subheading, buttonText, onButtonClick }) => {
  return (
    <div className="bg-[url('/images/home-bg.jpg')] bg-cover bg-center h-96 w-full text-start flex flex-col items-start justify-center h-[490px] p-20">
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
  );
};

export default Header;
