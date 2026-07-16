import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-900/20 via-gray-900 to-pink-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Students Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Real stories from real students who transformed their passion into successful careers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="text-purple-500 opacity-50" size={32} />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-700">
                  <Avatar className="w-12 h-12 ring-2 ring-purple-500/30">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-purple-600 text-white">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-purple-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-purple-900/30 to-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              95%
            </div>
            <p className="text-gray-300 font-medium">Student Satisfaction Rate</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-pink-900/30 to-gray-800/30 backdrop-blur-sm border border-pink-500/20 rounded-xl">
            <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">
              200+
            </div>
            <p className="text-gray-300 font-medium">Successful Entrepreneurs</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-br from-rose-900/30 to-gray-800/30 backdrop-blur-sm border border-rose-500/20 rounded-xl">
            <div className="text-5xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent mb-2">
              4.9/5
            </div>
            <p className="text-gray-300 font-medium">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;