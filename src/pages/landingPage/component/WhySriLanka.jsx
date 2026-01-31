import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Clock, Sprout, Hand } from "lucide-react";
import { whySriLanka } from './mockData.js';

const icons = [Globe, Clock, Sprout, Hand];

export function WhySriLanka() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
          {whySriLanka.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div 
                key={idx} 
                className="text-center p-8 border-r last:border-r-0 md:even:border-r lg:odd:border-r-1 lg:[&:nth-child(4)]:border-r-0"
              >
                <div className="flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-16 w-16 text-teal-700" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}