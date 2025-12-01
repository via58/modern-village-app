// components/common/Footer.js
import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌾</span>
              <h3 className="text-xl font-bold">Village Welfare</h3>
            </div>
            <p className="text-green-100 text-sm">
              Empowering farmers and building sustainable communities through 
              collective support and modern agricultural practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-green-100">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-white transition">
                  Donate Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-green-100">
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span className="text-sm">info@villagewelfare.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span className="text-sm">+91 98765 43210</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-green-200 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-green-200 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-green-200 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-500 pt-6 text-center">
          <p className="text-green-100 text-sm">
            © {new Date().getFullYear()} Village Welfare Fund. All rights reserved.
          </p>
          <p className="text-green-200 text-xs mt-2">
            Building better futures for farming communities
          </p>
        </div>
      </div>
    </footer>
  );
}