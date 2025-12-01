// app/page.js
'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Carousel from '@/components/home/Carousel';
import { Sprout, Droplets, Users, Heart } from 'lucide-react';

export default function HomePage() {
  const impactAreas = [
    { 
      icon: Sprout, 
      title: 'Agriculture', 
      desc: 'Modern farming equipment and training for better yields' 
    },
    { 
      icon: Droplets, 
      title: 'Irrigation', 
      desc: 'Sustainable water management systems for all seasons' 
    },
    { 
      icon: Users, 
      title: 'Community', 
      desc: 'Building stronger village bonds through collective growth' 
    },
    { 
      icon: Heart, 
      title: 'Healthcare', 
      desc: 'Accessible medical facilities for farming families' 
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Carousel Section */}
        <Carousel />

        {/* Impact Areas */}
        <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
              Our Impact Areas
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every contribution helps us create lasting change in rural communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {impactAreas.map((area, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="text-green-600 flex justify-center mb-4">
                  <area.icon size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-green-600 text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-green-100">Farmers Supported</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                <div className="text-green-100">Villages Reached</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">₹10L+</div>
                <div className="text-green-100">Funds Raised</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
              Make a Difference Today
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Your contribution, no matter the size, helps provide essential resources 
              and support to hardworking farmers and their families.
            </p>
            {/* <Link 
              href="/donate"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 shadow-lg transform hover:scale-105 transition"
            > */}
              Donate Now
            {/* </Link> */}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-100 py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-12 text-center">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Ravi Kumar',
                  role: 'Farmer, Green Valley',
                  text: 'The new irrigation system has doubled our crop yield. We are truly grateful.'
                },
                {
                  name: 'Priya Sharma',
                  role: 'Village Leader',
                  text: 'Community programs have brought us together and improved our lives significantly.'
                },
                {
                  name: 'Suresh Patel',
                  role: 'Organic Farmer',
                  text: 'Training in sustainable farming practices has transformed how we work our land.'
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="text-green-600 text-4xl mb-4">"</div>
                  <p className="text-gray-600 mb-4 italic">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-lg">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}