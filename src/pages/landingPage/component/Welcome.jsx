import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import PalmTree from "@/components/icons/PalmTree";

export function Welcome() {
  return (
    <section id="welcome" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative max-w-sm mx-auto">
            <img 
              src="https://voyaztravel.com/wp-content/uploads/elementor/thumbs/Voyaz_Sigiriya-scaled-r7bzhvckwxw0qt0qtfnahgnhk2ln39wlchtfqo26b4.jpg" 
              alt="Sri Lanka" 
              className="rounded-lg shadow-2xl w-full" 
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
            <PalmTree className="h-8 w-8 text-emerald-600" />
            <span className="text-4xl font-bold text-white-600">
              Ceylon<span className="text-emerald-600">Travels</span>
            </span>
          </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Welcome to Ceylon Travels
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
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors">
              Read More
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}