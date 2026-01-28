import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, ChevronRight } from "lucide-react";
import { packages } from './mockData.js';

export function TourPackages() {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800">Packages</Badge>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Tour Packages</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully crafted experiences to suit every traveler's dream
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-emerald-600 text-white text-lg px-3 py-1">{pkg.price}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{pkg.title}</h3>
                <div className="flex items-center gap-4 mb-3 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4" />
                    <span>Best Value</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{pkg.highlights}</p>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  View Details <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
