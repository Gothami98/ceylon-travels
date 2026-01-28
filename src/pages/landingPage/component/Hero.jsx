import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-emerald-900 to-teal-800 mt-16">
      <div 
    className="absolute inset-0  bg-black opacity-70" 
    style={{
      backgroundImage: "url('https://voyaztravel.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-18-at-08.38.08.jpeg')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center'
    }}>
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <Badge className="mb-4 bg-emerald-600 text-yellow-100">Explore Paradise</Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Discover the Pearl of the Indian Ocean
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Experience the magic of Sri Lanka - where ancient culture meets pristine beaches
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-6">
            Explore Tours <ChevronRight className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-6">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
