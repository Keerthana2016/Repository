import React from 'react';
import { Heart, Target, Award } from 'lucide-react';
import { founderStory } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Our Story & <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Empowering women through skill development and passion-driven education
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={founderStory.image}
                alt={founderStory.name}
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-2xl"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl -z-10 blur-3xl opacity-30"></div>
          </div>

          {/* Story Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">{founderStory.name}</h3>
              <p className="text-purple-400 font-medium text-lg">{founderStory.title}</p>
            </div>

            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>

            <p className="text-gray-300 leading-relaxed text-lg">
              {founderStory.story}
            </p>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <p className="text-gray-300 italic">
                "What began as SOWTHAS Fashion has now grown into SOWTHAS Fashion Academy—a trusted 
                learning platform dedicated to empowering aspiring tailors and fashion designers through 
                practical, easy-to-understand, and industry-focused training."
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-900/30 to-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6">
              <Heart className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Passion</h3>
            <p className="text-gray-400">
              We believe that anyone can learn tailoring with the right guidance. Our passion is to make 
              fashion education accessible and practical for everyone.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-900/30 to-gray-800/30 backdrop-blur-sm border border-pink-500/20 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-rose-600 rounded-lg flex items-center justify-center mb-6">
              <Target className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
            <p className="text-gray-400">
              To empower women with valuable skills, inspire creativity, and support them in building 
              successful careers or businesses in the fashion industry.
            </p>
          </div>

          <div className="bg-gradient-to-br from-rose-900/30 to-gray-800/30 backdrop-blur-sm border border-rose-500/20 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-rose-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
              <Award className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Our Promise</h3>
            <p className="text-gray-400">
              We don't just teach tailoring—we help create confident professionals, successful 
              entrepreneurs, and brighter futures through hands-on, personalized training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;