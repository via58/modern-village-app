// components/home/Carousel.js
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import carousel1 from '@/assets/Carousal_1.png';
import carousel2 from '@/assets/Carousal_2.png';
import carousel3 from '@/assets/Carousal_3.png';
import carousel4 from '@/assets/Carousal_4.png';
import carousel5 from '@/assets/Carousal_5.jpg';
import carousel6 from '@/assets/Carousal_6.jpg';
import carousel7 from '@/assets/Carousal_7.jpg';


export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: carousel5,
      title: 'Bridging the Learning Divide',
      description: 'Tailored STEM tools help rural children grasp concepts faster, with curiosity and relevance.'
    },
    {
      image: carousel6,
      title: 'Local Role Models',
      description: 'Young innovators from the village inspire community-wide transformation.'
    },
    {
      image: carousel7,
      title: 'Future-Readiness',
      description: 'STEM skills—coding, robotics, problem-solving—are essential for 21st-century livelihoods.'
    },
    {
      image: carousel4,
      title: 'Building Community Capacity',
      description: 'Local youth are trained as educators and researchers—creating sustainable knowledge ecosystems.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <Image 
        src={slides[currentIndex].image} 
        alt={slides[currentIndex].title}
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Slide Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white z-10">
        <div className="text-center px-4 animate-fadeIn">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            {slides[currentIndex].title}
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white drop-shadow-md">
            {slides[currentIndex].description}
          </p>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur-sm transition z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white" size={28} />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full backdrop-blur-sm transition z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white" size={28} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}