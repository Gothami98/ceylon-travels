import { destinations } from './mockData.js';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
export function Destinations() {
  // Define grid layout patterns for each destination
  const gridPatterns = [
    "col-span-12 md:col-span-4 row-span-2", // Sigiriya - tall left
    "col-span-12 md:col-span-4 row-span-2", // Ella - tall center
    "col-span-12 md:col-span-4",            // Galle - top right
    "col-span-12 md:col-span-4",            // Kandy - bottom left
    "col-span-12 md:col-span-4",            // Mirissa - bottom center
    "col-span-12 md:col-span-4",            // Yala - bottom right
  ];

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center mb-16 relative py-12"
          style={{
            backgroundImage: 'url(https://www.filingsmadeeasy.com/wp-content/themes/CFS/assets/img/state_img/hi-state.jpg)',
            backgroundAttachment: 'fixed',
            backgroundSize: '50%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Optional overlay to improve text readability */}
          <div className="absolute inset-0 bg-white/80"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Top Destinations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover Sri Lanka's most breathtaking locations — from serene beaches and misty hill country to ancient cities and wildlife escapes. Perfect spots for every kind of traveler. 
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 auto-rows-[280px]">
          {destinations.map((destination, index) => (
            <div 
              key={destination.name}
              className={`${gridPatterns[index]} relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer`}
            >
              <img 
                src={destination.image} 
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <h3 className="absolute bottom-6 left-6 text-3xl md:text-4xl font-bold text-white">
                {destination.name}
              </h3>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg py-6 ">
             More Destinations <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}