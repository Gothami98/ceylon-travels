import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mountain, Waves, Palmtree, Users } from "lucide-react";
import { whySriLanka } from './mockData.js';

const icons = [Mountain, Waves, Palmtree, Users];

export function WhySriLanka() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800">Why Choose</Badge>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Visit Sri Lanka?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes Sri Lanka one of the world's most captivating destinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whySriLanka.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <Card 
                key={idx} 
                className="text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-600"
              >
                <CardContent className="pt-8">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
