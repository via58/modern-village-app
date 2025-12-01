// components/common/Header.js
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import logo from '@/assets/logo.png';
// import { signInWithGoogle, signOut } from '@/lib/firebase/auth';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAdmin } = useAuth();
  const pathname = usePathname();

  const handleLogin = async () => {
    // const result = await signInWithGoogle();
    // if (!result.success) {
    //   alert('Login failed. Please try again.');
    // }
  };

  const handleLogout = async () => {
    // await signOut();
  };

  const isActive = (path) => pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="Village Welfare Logo" width={64} height={64} />
            <h1 className="text-xl md:text-2xl font-bold text-green-600">
             Modern Village
            </h1>
          </Link>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-green-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link
              href="/"
              className={`font-medium ${isActive('/') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
            >
              Home
            </Link>
            <Link
              href="/donate"
              className={`font-medium ${isActive('/donate') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
            >
              Donate
            </Link>
            <Link
              href="/contact"
              className={`font-medium ${isActive('/contact') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
            >
              Contact
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                className={`font-medium ${isActive('/admin') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
              >
                Admin
              </Link>
            )}
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">
                  {user.displayName || user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Login
              </button>
            )}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3 pb-4">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-medium text-left ${isActive('/') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
            >
              Home
            </Link>
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-medium text-left ${isActive('/donate') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
            >
              Donate
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`font-medium text-left ${isActive('/contact') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
            >
              Contact
            </Link>
            {isAdmin && (
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium text-left ${isActive('/admin') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
              >
                Admin
              </Link>
            )}
            {user ? (
              <>
                <div className="text-sm text-gray-600 py-2">
                  {user.displayName || user.email}
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 justify-center"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Login
              </button>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}