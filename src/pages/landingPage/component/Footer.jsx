import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, CheckCircle2 } from "lucide-react";
import PalmTree from "@/components/icons/PalmTree";
import { useState } from "react";

export function Footer() {
  const [agreed, setAgreed] = useState(false);

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <PalmTree className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold text-white">
                Ceylon<span className="text-emerald-600">Travels</span>
              </span>
            </div>
            
         <hr className="border-gray-600 w-40 mb-6" />


            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+94112345678" className="hover:text-white transition">
                  +94 11 234 5678
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@ceylontravels.com" className="hover:text-white transition">
                  info@ceylontravels.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <address className="not-italic">
                  Colombo, Sri Lanka
                </address>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <a href="#" className="bg-gray-700 p-2.5 rounded-full hover:bg-emerald-600 transition-colors duration-200">
                <Facebook className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="bg-gray-700 p-2.5 rounded-full hover:bg-emerald-600 transition-colors duration-200">
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="bg-gray-700 p-2.5 rounded-full hover:bg-emerald-600 transition-colors duration-200">
                <Twitter className="h-4 w-4 text-white" />
              </a>
              <a href="#" className="bg-gray-700 p-2.5 rounded-full hover:bg-emerald-600 transition-colors duration-200">
                <Youtube className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <nav className="space-y-3">
              <a href="#home" className="block text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200">
                Home
              </a>
              <a href="#destinations" className="block text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200">
                Destinations
              </a>
              <a href="#packages" className="block text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200">
                Packages
              </a>
              <a href="#blog" className="block text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200">
                Blog
              </a>
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Newsletter</h3>
            <label className="flex items-start gap-3 cursor-pointer group">
              <div className="relative flex-shrink-0 mt-0.5">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition ${
                  agreed ? 'bg-emerald-600 border-emerald-600' : 'border-gray-500 bg-transparent'
                }`}>
                  {agreed && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
              </div>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition">
                I agree to all terms and policies
              </span>
            </label>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-base text-white">
            &copy; 2026 Ceylon Travels. All rights reserved. Made with ❤️ in Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}