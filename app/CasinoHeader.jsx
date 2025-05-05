import React, { useState } from 'react';
import { Menu, X, ChevronDown, Info, Shield } from 'lucide-react';
import HeaderIcon from "@/public/headericon.jpeg";
import Image from 'next/image';

export default function CasinoHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="w-full font-sans">
      {/* Top bar with dark background */}
      <div className="bg-gray-900 text-white flex justify-end items-center py-2 px-4 space-x-4">
        <div className="flex items-center">
          <Info size={16} className="mr-1" />
          <span className="text-sm">Werbehinweise</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 bg-gray-700 rounded flex items-center justify-center">
            <Shield size={14} />
          </div>
          <div className="h-6 w-6 bg-gray-700 rounded flex items-center justify-center">
            <span className="text-xs font-bold">18+</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white py-4 px-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
           
            <Image className='object-contain rounded-xl' src={HeaderIcon} alt="web icon" width={7} height={7} />
            <div>
              <span className="font-bold text-xl">
                <span className="text-black">Lucky Charms Gambling</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="font-medium text-gray-800 hover:text-red-600">
              Beste Online Casinos
            </a>
            <div className="relative">
              <button 
                className="flex items-center font-medium text-gray-800 hover:text-red-600"
                onClick={() => toggleDropdown('bonus')}
              >
                Bonus
                <ChevronDown size={16} className="ml-1" />
              </button>
              {activeDropdown === 'bonus' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Willkommensbonus</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Freispiele</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Reload Bonus</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button 
                className="flex items-center font-medium text-gray-800 hover:text-red-600"
                onClick={() => toggleDropdown('spiele')}
              >
                Spiele
                <ChevronDown size={16} className="ml-1" />
              </button>
              {activeDropdown === 'spiele' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Slots</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Tischspiele</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Live Casino</a>
                </div>
              )}
            </div>
            <div className="relative">
              <button 
                className="flex items-center font-medium text-gray-800 hover:text-red-600"
                onClick={() => toggleDropdown('zahlungsmethoden')}
              >
                Zahlungsmethoden
                <ChevronDown size={16} className="ml-1" />
              </button>
              {activeDropdown === 'zahlungsmethoden' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-10">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">PayPal</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Kreditkarte</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Überweisung</a>
                </div>
              )}
            </div>
            <a href="#" className="font-medium text-gray-800 hover:text-red-600">
              News
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-100">
              Beste Online Casinos
            </a>
            <div>
              <button 
                className="flex items-center justify-between w-full py-2 px-4 text-gray-800 hover:bg-gray-100"
                onClick={() => toggleDropdown('mobile-bonus')}
              >
                <span>Bonus</span>
                <ChevronDown size={16} />
              </button>
              {activeDropdown === 'mobile-bonus' && (
                <div className="bg-gray-50 py-1">
                  <a href="#" className="block py-2 px-8 text-gray-800 hover:bg-gray-100">Willkommensbonus</a>
                  <a href="#" className="block py-2 px-8 text-gray-800 hover:bg-gray-100">Freispiele</a>
                  <a href="#" className="block py-2 px-8 text-gray-800 hover:bg-gray-100">Reload Bonus</a>
                </div>
              )}
            </div>
            <div>
              <button 
                className="flex items-center justify-between w-full py-2 px-4 text-gray-800 hover:bg-gray-100"
                onClick={() => toggleDropdown('mobile-spiele')}
              >
                <span>Spiele</span>
                <ChevronDown size={16} />
              </button>
              {activeDropdown === 'mobile-spiele' && (
                <div className="bg-gray-50 py-1">
                  <a href="#" className="block py-2 px-8 text-gray-800 hover:bg-gray-100">Slots</a>
                  <a href="#" className="block py-2 px-8 text-gray-800 hover:bg-gray-100">Tischspiele</a>
                  <a href="#" className="block py-2 px-8 text-gray-800 hover:bg-gray-100">Live Casino</a>
                </div>
              )}
            </div>
            <div>
              <button 
                className="flex items-center justify-between w-full py-2 px-4 text-gray-800 hover:bg-gray-100"
                onClick={() => toggleDropdown('mobile-zahlungsmethoden')}
              >
                <span>Zahlungsmethoden</span>
                <ChevronDown size={16} />
              </button>
              {activeDropdown === 'mobile-zahlungsmethoden' && (
                <div className="bg-gray-50 py-1">
                  <a href="#" className="block py-2 px-8 text-gray-800 hover:bg-gray-100">PayPal</a>
                  <a href="#" className="block py-2 px-8 text-gray-800 hover:bg-gray-100">Kreditkarte</a>
                  <a href="#" className="block py-2 px-8 text-gray-800 hover:bg-gray-100">Überweisung</a>
                </div>
              )}
            </div>
            <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-gray-100">
              News
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}