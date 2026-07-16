import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { galleryImages } from '../data/mock';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Our Gallery</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Celebrating <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Witness the joy and pride of our graduates as they complete their journey and step into their new careers
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ImageIcon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-gray-300 font-medium">Proud Graduates</p>
              <p className="text-gray-500 text-sm mt-1">Building successful careers</p>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">
                95%
              </div>
              <p className="text-gray-300 font-medium">Placement Success</p>
              <p className="text-gray-500 text-sm mt-1">In fashion industry</p>
            </div>
            <div>
              <div className="text-5xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent mb-2">
                10+
              </div>
              <p className="text-gray-300 font-medium">Years of Excellence</p>
              <p className="text-gray-500 text-sm mt-1">Training professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
