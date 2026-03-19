'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-3 py-1.5 rounded-lg font-bold text-lg shadow-sm group-hover:shadow-md transition-all duration-300">
              AI Stack
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/pillars/ai-writing" className="text-gray-600 hover:text-purple-600 transition font-medium">
              Writing
            </Link>
            <Link href="/pillars/ai-design" className="text-gray-600 hover:text-purple-600 transition font-medium">
              Design
            </Link>
            <Link href="/pillars/ai-automation" className="text-gray-600 hover:text-purple-600 transition font-medium">
              Automation
            </Link>
            <Link href="/pillars/ai-coding" className="text-gray-600 hover:text-purple-600 transition font-medium">
              Coding
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-purple-600 transition font-medium">
              Articles
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-purple-600 transition font-medium">
              About
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="px-4 py-4 space-y-2">
            <Link href="/pillars/ai-writing" className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition py-3 px-3 rounded-lg font-medium">
              Writing
            </Link>
            <Link href="/pillars/ai-design" className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition py-3 px-3 rounded-lg font-medium">
              Design
            </Link>
            <Link href="/pillars/ai-automation" className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition py-3 px-3 rounded-lg font-medium">
              Automation
            </Link>
            <Link href="/pillars/ai-coding" className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition py-3 px-3 rounded-lg font-medium">
              Coding
            </Link>
            <Link href="/blog" className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition py-3 px-3 rounded-lg font-medium">
              Articles
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition py-3 px-3 rounded-lg font-medium">
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
