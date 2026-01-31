import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function WhyShowcase() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Beach Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://voyaztravel.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-18-at-08.38.08.jpeg')`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/5"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-end px-4 md:px-8 lg:px-16">
        {/* Text Card */}
        <Card className="w-full max-w-xl bg-white/95 backdrop-blur-sm shadow-2xl border-none">
          <CardContent className="p-8 md:p-12">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-800 mb-6 text-center">
              Why Sri Lanka?
            </h1>
            
            {/* Decorative Line */}
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-8"></div>
            
            {/* Description Text */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center font-light">
              A land of breathtaking contrasts—Sri Lanka offers serene beaches, 
              misty hills, rich heritage, and vibrant wildlife all in one compact 
              island. Whether you seek adventure, relaxation, or cultural discovery, 
              this tropical gem promises unforgettable memories at every turn.
            </p>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
