import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Enrollment Request Received!",
      description: "We'll contact you within 24 hours to discuss your course selection.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Start Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Fashion Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Fill out the form below and our team will get back to you within 24 hours
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Enrollment Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">Full Name *</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">Email Address *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">Phone Number *</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 1234567890"
                  className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">Interested Course</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:border-purple-500"
                >
                  <option value="">Select a course</option>
                  <option value="basic-tailoring">Basic Tailoring Course</option>
                  <option value="pattern-making">Advanced Pattern Making</option>
                  <option value="fashion-designing">Fashion Designing</option>
                  <option value="bridal-wear">Bridal & Party Wear</option>
                  <option value="boutique-management">Boutique Management</option>
                  <option value="kids-wear">Kids Wear Designing</option>
                </select>
              </div>

              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals and experience..."
                  rows={4}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105 group"
              >
                Submit Enrollment
                <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-900/30 to-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email Us</h4>
                    <p className="text-gray-400">info@sowthasfashion.com</p>
                    <p className="text-gray-400">sowthas.academy@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-rose-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Call Us</h4>
                    <p className="text-gray-400">+91 98765 43210</p>
                    <p className="text-gray-400">+91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                    <p className="text-gray-400">
                      SOWTHAS Fashion Academy<br />
                      Fashion Street, Design District<br />
                      Bangalore, Karnataka 560001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">Class Timings</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Morning Batch:</span>
                  <span className="text-purple-400 font-semibold">9:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Afternoon Batch:</span>
                  <span className="text-purple-400 font-semibold">2:00 PM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Evening Batch:</span>
                  <span className="text-purple-400 font-semibold">6:00 PM - 9:00 PM</span>
                </div>
                <div className="pt-3 border-t border-gray-700">
                  <p className="text-sm text-gray-400">Weekend batches also available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;