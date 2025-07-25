'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Info, Shield, Moon, Sun } from 'lucide-react';
import HeaderIcon from "@/public/headericon.jpeg";
import Image from 'next/image';

export default function CasinoHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme on component mount
  useEffect(() => {
    // Get theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    setTheme(initialTheme);
    setMounted(true);
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Update DOM
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Update state and localStorage
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // ThemeToggle component integrated directly in the file
  const ThemeToggle = () => {
    if (!mounted) return <div className="w-6 h-6"></div>; // Placeholder while loading
    
    return (
      <button
        onClick={toggleTheme}
        className="p-1 rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? (
          <Moon size={16} className="text-white" />
        ) : (
          <Sun size={16} className="text-yellow-300" />
        )}
      </button>
    );
  };

  return (
    <div className="w-full font-sans">
      {/* Top bar with dark background */}
      <div className="bg-gray-900 dark:bg-gray-950 text-white flex justify-end items-center py-2 px-4 space-x-4">
        <div className="flex items-center">
          <Info size={16} className="mr-1" />
          <span className="text-sm dark:text-white">Werbehinweise.</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 bg-gray-700 rounded flex items-center justify-center">
            <Shield size={14} />
          </div>
          <div className="h-6 w-6 bg-gray-700 rounded flex items-center justify-center">
            <span className="text-xs font-bold">18+</span>
          </div>
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white dark:bg-gray-800 py-4 px-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image className='object-contain rounded-2xl' src={HeaderIcon} alt="web icon" width={40} height={7} />
            <div>
              <span className="font-bold text-xl">
                <span className="text-black dark:text-white">Lucky Charms Gambling</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="font-medium text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400">
              Beste Online Casinos
            </a>
            <div className="relative">
              <button 
                className="flex items-center font-medium text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400"
                onClick={() => toggleDropdown('bonus')}
              >
                Bonus
                <ChevronDown size={16} className="ml-1" />
              </button>
              {activeDropdown === 'bonus' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-md py-1 z-10">
                  <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Willkommensbonus</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Freispiele</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Reload Bonus</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button 
                className="flex items-center font-medium text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400"
                onClick={() => toggleDropdown('spiele')}
              >
                Spiele
                <ChevronDown size={16} className="ml-1" />
              </button>
              {activeDropdown === 'spiele' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-md py-1 z-10">
                  <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Slots</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Tischspiele</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Live Casino</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button 
                className="flex items-center font-medium text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400"
                onClick={() => toggleDropdown('zahlungsmethoden')}
              >
                Zahlungsmethoden
                <ChevronDown size={16} className="ml-1" />
              </button>
              {activeDropdown === 'zahlungsmethoden' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-md py-1 z-10">
                  <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">PayPal</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Kreditkarte</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Überweisung</a>
                </div>
              )}
            </div>
            <a href="#" className="font-medium text-gray-800 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400">
              News
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center text-gray-800 dark:text-gray-200"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <a href="#" className="block py-2 px-4 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              Beste Online Casinos
            </a>
            <div>
              <button 
                className="flex items-center justify-between w-full py-2 px-4 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => toggleDropdown('mobile-bonus')}
              >
                <span>Bonus</span>
                <ChevronDown size={16} />
              </button>
              {activeDropdown === 'mobile-bonus' && (
                <div className="bg-gray-50 dark:bg-gray-700 py-1">
                  <a href="#" className="block py-2 px-8 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Willkommensbonus</a>
                  <a href="#" className="block py-2 px-8 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Freispiele</a>
                  <a href="#" className="block py-2 px-8 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Reload Bonus</a>
                </div>
              )}
            </div>
            <div>
              <button 
                className="flex items-center justify-between w-full py-2 px-4 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => toggleDropdown('mobile-spiele')}
              >
                <span>Spiele</span>
                <ChevronDown size={16} />
              </button>
              {activeDropdown === 'mobile-spiele' && (
                <div className="bg-gray-50 dark:bg-gray-700 py-1">
                  <a href="#" className="block py-2 px-8 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Slots</a>
                  <a href="#" className="block py-2 px-8 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Tischspiele</a>
                  <a href="#" className="block py-2 px-8 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Live Casino</a>
                </div>
              )}
            </div>
            <div>
              <button 
                className="flex items-center justify-between w-full py-2 px-4 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => toggleDropdown('mobile-zahlungsmethoden')}
              >
                <span>Zahlungsmethoden</span>
                <ChevronDown size={16} />
              </button>
              {activeDropdown === 'mobile-zahlungsmethoden' && (
                <div className="bg-gray-50 dark:bg-gray-700 py-1">
                  <a href="#" className="block py-2 px-8 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">PayPal</a>
                  <a href="#" className="block py-2 px-8 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Kreditkarte</a>
                  <a href="#" className="block py-2 px-8 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Überweisung</a>
                </div>
              )}
            </div>
            <a href="#" className="block py-2 px-4 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
              News
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}