import React from "react";
import Image from "next/image";

interface ImageCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg gap-10">
      <Image
        src={imageSrc}
        alt={title}
        width={360}
        height={360}
        className="w-full object-cover"
      />
      <div style={{backgroundColor: '#4B6FDD'}} className="px-6 py-4 text-center h-50">
        <div className="font-bold text-xl mb-2 text-white p-2">{title}</div>
        <p className="text-gray-500 text-white pb-5">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
