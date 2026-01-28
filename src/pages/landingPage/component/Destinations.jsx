import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ChevronRight } from "lucide-react";
import { destinations } from './mockData.js';

export function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800">Explore</Badge>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Top Destinations</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the most spectacular places Sri Lanka has to offer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, idx) => (
            <Card key={idx} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-emerald-600 text-white">Popular</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <h3 className="text-2xl font-bold text-gray-900">{dest.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{dest.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-emerald-600 group-hover:text-white transition"
                >
                  Explore <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
