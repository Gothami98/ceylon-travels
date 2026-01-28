import { Palmtree, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Palmtree className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold">Ceylon<span className="text-emerald-600">Travels</span></span>
            </div>
            <p className="text-gray-400">Your trusted partner for unforgettable Sri Lankan adventures since 2010.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-emerald-600 transition">Home</a>
              <a href="#destinations" className="block text-gray-400 hover:text-emerald-600 transition">Destinations</a>
              <a href="#packages" className="block text-gray-400 hover:text-emerald-600 transition">Packages</a>
              <a href="#blog" className="block text-gray-400 hover:text-emerald-600 transition">Blog</a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-emerald-600" />
                <span>+94 11 234 5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-emerald-600" />
                <span>info@ceylontravels.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-emerald-600" />
                <span>Colombo, Sri Lanka</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-emerald-600 transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Ceylon Travels. All rights reserved. Made with ❤️ in Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
