import { Badge } from "@/components/ui/badge";
import { experiences } from './mockData.js';

export function Experiences() {
  return (
    <section id="experiences" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800">Activities</Badge>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Attractions & Experiences</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in unforgettable adventures and cultural experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => {
            return (
              <div key={idx} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={exp.image} 
                  alt={exp.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-2xl font-bold">{exp.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}