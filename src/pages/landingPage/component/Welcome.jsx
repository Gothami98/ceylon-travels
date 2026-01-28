import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export function Welcome() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-emerald-100 text-emerald-800">Welcome</Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Your Gateway to Sri Lankan Adventures
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Welcome to Ceylon Travels, your trusted partner in exploring the wonders of Sri Lanka. 
              With over 15 years of experience, we craft unforgettable journeys that showcase the best 
              of this beautiful island nation.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              From ancient temples to pristine beaches, misty mountains to vibrant wildlife, we bring 
              you authentic experiences that create memories for a lifetime.
            </p>
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold text-emerald-600">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">50K+</div>
                <div className="text-gray-600">Happy Travelers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600">200+</div>
                <div className="text-gray-600">Tour Packages</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1588417826046-0c2c1f4d1a6b?w=600&h=700&fit=crop" 
              alt="Sri Lanka" 
              className="rounded-lg shadow-2xl" 
            />
            <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded-lg shadow-xl">
              <Star className="h-8 w-8 mb-2" />
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-sm">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
