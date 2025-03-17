import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { MainLayout } from '@/layouts/MainLayout';
import { Icon } from '@iconify/react';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  alt?: string;
}

interface HomePageProps {
  slides: Slide[];
  textContent: string;
}

export default function HomePage({ slides, textContent }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Change slide with controls
  const changeSlide = (index: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match this to your transition duration
  };

  // Next slide
  const nextSlide = () => {
    if (isTransitioning) return;
    changeSlide((currentSlide + 1) % slides.length);
  };

  // Previous slide
  const prevSlide = () => {
    if (isTransitioning) return;
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <MainLayout className="home-page">
      <Head title="Home" />
      
      <section className="relative overflow-hidden bg-gray-900 h-[500px] md:h-[600px]">
        {/* Slides */}
        <div className="slider-container h-full">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="relative h-full">
                <img 
                  src={slide.image} 
                  alt={slide.alt || slide.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">{slide.title}</h2>
                    <p className="text-lg md:text-xl text-white">{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex flex-col items-center">
          <div className="flex space-x-4 mb-3">
            <button 
              onClick={prevSlide}
              className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <Icon icon="fa-solid:chevron-left" className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <Icon icon="fa-solid:chevron-right" className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="body-content max-w-4xl mx-auto py-10 px-4">
        <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: textContent }} />
      </section>
    </MainLayout>
  );
} 