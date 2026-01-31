import { Badge } from "@/components/ui/badge";
import { experiences } from './mockData.js';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Experiences() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsToShow = isMobile ? 1 : 3; // 1 on mobile, 3 on desktop

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev >= experiences.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev <= 0 ? experiences.length - 1 : prev - 1
    );
  };

  // Get consecutive items starting from currentIndex
  const getVisibleExperiences = () => {
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % experiences.length;
      visible.push(experiences[index]);
    }
    return visible;
  };

  const visibleExperiences = getVisibleExperiences();

  // Touch/swipe handlers for mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swiped left - go to next
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      // Swiped right - go to previous
      prevSlide();
    }
  };

  return (
    <section id="experiences" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Attractions & Experiences</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in unforgettable adventures and cultural experiences
          </p>
        </div>

        <div className="relative">
          {/* Previous Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
          </button>

          {/* Slider Content with touch support */}
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6 transition-transform duration-500 ease-in-out`}
            >
              {visibleExperiences.map((exp, idx) => {
                return (
                  <div 
                    key={`${currentIndex}-${idx}`} 
                    className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
                  >
                    <img 
                      src={exp.image} 
                      alt={exp.title}
                      className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Always visible gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    
                    {/* Hover overlay - extra darkening */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Title - always visible */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h3 className="text-white text-xl md:text-2xl font-bold">{exp.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-white rounded-full p-2 md:p-3 shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {experiences.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                idx === currentIndex ? 'bg-emerald-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
         <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-base md:text-lg py-4 md:py-6 px-6 md:px-8"
          >
             More Attractions <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}