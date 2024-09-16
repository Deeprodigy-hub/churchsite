import React from 'react';
import { useState, useEffect } from 'react';
import cau1 from '../assets/cau1.jpg';
import cau2 from '../assets/cau2.jpg';
import cau3 from '../assets/cau3.jpg';

const Carousel = () => {
  const images = [cau1, cau2, cau3];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide images every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000); // 8000 ms = 8 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[60vh] sm:h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
