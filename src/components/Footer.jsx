import React from 'react';
import { Heart, Instagram, Facebook, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                SOWTHAS
              </span>
              <span className="text-white ml-1">Academy</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Empowering women through skill development and passion-driven fashion education.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram size={20} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook size={20} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Youtube size={20} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Mail size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="text-gray-400 hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }} className="text-gray-400 hover:text-purple-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" onClick={(e) => { e.preventDefault(); scrollToSection('#courses'); }} className="text-gray-400 hover:text-purple-400 transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('#testimonials'); }} className="text-gray-400 hover:text-purple-400 transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white font-semibold mb-4">Popular Courses</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Basic Tailoring</li>
              <li className="text-gray-400">Pattern Making</li>
              <li className="text-gray-400">Fashion Designing</li>
              <li className="text-gray-400">Bridal Wear</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Bangalore, Karnataka</li>
              <li>+91 98765 43210</li>
              <li>info@sowthasfashion.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500 fill-red-500" /> by SOWTHAS Fashion Academy © 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;