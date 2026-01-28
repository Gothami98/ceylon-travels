import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Palmtree } from "lucide-react";


export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Palmtree className="h-8 w-8 text-emerald-600" />
            <span className="text-2xl font-bold text-gray-900">
              Ceylon<span className="text-emerald-600">Travels</span>
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-emerald-600 transition">Home</a>
            <a href="#destinations" className="text-gray-700 hover:text-emerald-600 transition">Destinations</a>
            <a href="#packages" className="text-gray-700 hover:text-emerald-600 transition">Packages</a>
            <a href="#experiences" className="text-gray-700 hover:text-emerald-600 transition">Experiences</a>
            <a href="#blog" className="text-gray-700 hover:text-emerald-600 transition">Blog</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition">Contact</a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-emerald-600 hover:bg-emerald-700">Book Now</Button>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="#home" className="block py-2 text-gray-700 hover:text-emerald-600">Home</a>
            <a href="#destinations" className="block py-2 text-gray-700 hover:text-emerald-600">Destinations</a>
            <a href="#packages" className="block py-2 text-gray-700 hover:text-emerald-600">Packages</a>
            <a href="#experiences" className="block py-2 text-gray-700 hover:text-emerald-600">Experiences</a>
            <a href="#blog" className="block py-2 text-gray-700 hover:text-emerald-600">Blog</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:text-emerald-600">Contact</a>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Book Now</Button>
          </div>
        </div>
      )}
    </header>
  );
}
