import React, { useState } from 'react';
import { Clock, BarChart, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { courses } from '../data/mock';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="courses" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Our Programs</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Fashion & Tailoring <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Choose from our comprehensive range of courses designed to take you from beginner to professional
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden group cursor-pointer"
              onClick={() => setSelectedCourse(course)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-purple-600 text-white border-none">
                  {course.level}
                </Badge>
              </div>

              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2">{course.description}</p>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center text-gray-400">
                    <Clock size={16} className="mr-1 text-purple-400" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <BarChart size={16} className="mr-1 text-pink-400" />
                    {course.level}
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{course.price}</span>
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToContact();
                      }}
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full group/btn"
                    >
                      Enroll
                      <ArrowRight size={16} className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Not sure which course is right for you?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our expert counselors will help you choose the perfect course based on your goals and experience level.
            </p>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get Free Counseling
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;