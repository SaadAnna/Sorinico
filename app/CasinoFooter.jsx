import React, { useState } from 'react';
import { Phone, Globe, ChevronDown } from 'lucide-react';

export default function CasinoFooter() {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  
  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  return (
    <footer className="w-full font-sans text-gray-100">
      {/* Top footer navigation */}
      <div className="bg-gray-700 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 lg:gap-8">
            <a href="#" className="hover:text-gary-200 text-white text-lg px-2 py-1">Impressum & Kontakt</a>
            <a href="#" className="hover:text-gary-200 text-white text-lg px-2 py-1">Über uns</a>
            <a href="#" className="hover:text-gary-200 text-white text-lg px-2 py-1">Wie wir bewerten</a>
            <a href="#" className="hover:text-gary-200 text-white text-lg px-2 py-1">Karriere</a>
            <a href="#" className="hover:text-gary-200 text-white text-lg px-2 py-1">AGB</a>
            <a href="#" className="hover:text-gary-200 text-white text-lg px-2 py-1">Datenschutz</a>
            <a href="#" className="hover:text-gary-200 text-white text-lg px-2 py-1">Verantwortungsvolles Spielen</a>
          </nav>
        </div>
      </div>

      {/* Responsible gambling section */}
      <div className="bg-blue-950 py-6 md:py-8 px-4 text-center relative overflow-hidden rounded-2xl">
        {/* Phone icon watermark */}
        <div className="absolute left-0 top-0 opacity-10 w-full h-full flex items-center justify-center pointer-events-none">
          <Phone className="w-40 sm:w-64 h-40 sm:h-64" />
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-2xl sm:text-xl font-bold mb-2 sm:mb-4">Bitte spielt verantwortungsbewusst!</h2>
          
          <p className="text-xs text-white sm:text-sm mb-4">
            Teilnahme ab 18 Jahren. Glücksspiel kann süchtig machen. Bitte spielt verantwortungsvoll! Infos und Hilfe unter 
            <a href="https://www.buwei.de/" className="text-neutral-500 ml-1 hover:underline">https://www.buwei.de/</a>
          </p>
          
          <div className="flex justify-center gap-3 sm:gap-6 mb-4 sm:mb-6">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-lg">18+</span>
            </div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Globe className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="flex items-center mt-4 w-4 h-4 sm:mt-6">
                <img src="/fottericon.png" alt="GGL Logo" className="mr-4" />
              </div>
          </div>
          
          <div className="mb-2">
            <h3 className="text-lg text-white text-bold sm:text-xl mb-1">
              <span className="block sm:inline">Anonyme & kostenlose BZgA-Telefonberatung zur Glücksspielsucht:</span> 
              <span className="text-orange-400 block sm:inline">0800 1 37 27 00</span>
            </h3>
            <p className="text-xs text-neutral-500 sm:text-sm">
              Beratungszeiten: Montag bis Donnerstag: von 10 bis 22 Uhr und Freitag bis Sonntag: 10 bis 18 Uhr
            </p>
          </div>
        </div>
      </div>

      {/* Legal information section */}
      <div className="bg-gray-100 py-6 sm:py-8 px-4 text-gray-700">
        <div className="container mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="order-2 md:order-1">
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-gray-800 text-bold">Glücksspielllizenzen und rechtliche Hinweise:</h3>
            <div className="text-xs sm:text-sm">
              <p className="mb-3">
                Amtliche Liste der Veranstalter und Vermittler von Glücksspielen, die über eine Erlaubnis oder Konzession nach dem Glücksspielstaatsvertrag 2021 verfügen - 
                <a href="https://www.gluecksspiel-behoerde.de" className="text-blue-600 hover:underline block sm:inline-block sm:ml-1">https://www.gluecksspiel-behoerde.de</a>
              </p>
              <div className="flex items-center mt-4 w-4 h-4 sm:mt-6">
                <img src="/fottericon.png" alt="GGL Logo" className="mr-4" />
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-bold text-gray-800">Allgemeine Geschäftsbedingungen & Promotionen</h3>
            <p className="text-xs sm:text-sm">
              Alle hier gelisteten Gratisangebote, Aktionen und Boni unterliegen bestimmten Bedingungen und Umsatzanforderungen
              des jeweiligen Anbieters. In den meisten Fällen sind nur Neukunden zum Erhalt von Angeboten, Aktionen und Boni
              berechtigt. Alle Bonusangebote präsentieren den höchstmöglichen Betrag. Die tatsächliche Höhe hängt von der
              individuellen Einzahlungsgröße ab. Um den Maximalbetrag in Anspruch zu nehmen, erfordern manche Bonusangebote
              mehrere Einzahlungen. Bitte überprüfen Sie die Webseite des jeweiligen Anbieters für dessen vollständige AGB.
            </p>
            <p className="text-xs sm:text-sm mt-2 sm:mt-3 uppercase">
              Onlinecasinosdeutschland.com bietet keinerlei Kundenbetreuung für jegliche Angebote oder Aktionen, die auf dieser Webseite erscheinen.
            </p>
          </div>
        </div>
      </div>

      {/* Social links in header */}
      <div className="bg-gray-700 py-4">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="mr-2">
              <span className="text-orange-500 text-2xl">🇩🇪</span>
            </div>
            <div>
              <span className="font-bold text-base sm:text-xl">
                <span className="text-gray-300">ONLINE</span>
                <span className="text-white">CASINOS</span>
                <span className="text-white">Deutschland</span>
                <span className="text-gray-400 font-normal">.com</span>
              </span>
            </div>
          </div>
          
          <div className="flex items-center">
            <span className="mr-2 text-xs sm:text-sm">Folgen:</span>
            <a href="#" className="mx-1 text-white hover:text-orange-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="mx-1 text-white hover:text-orange-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.866 3H5.134A2.134 2.134 0 003 5.134v7.732A2.134 2.134 0 005.134 15h7.732A2.134 2.134 0 0015 12.866V5.134A2.134 2.134 0 0012.866 3zM14 13a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h8a1 1 0 011 1v8z"/>
                <path d="M7 7h4v1H7zm0 2h6v1H7zm0 2h2v1H7z"/>
              </svg>
            </a>
            
            <div className="ml-4 relative">
              <button 
                className="flex items-center bg-white text-gray-800 rounded px-2 sm:px-3 py-1 text-xs sm:text-sm"
                onClick={toggleLanguageMenu}
              >
                <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                Weitere Sprachen
                <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-1 w-40 bg-white shadow-lg rounded-md py-1 z-10">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-xs sm:text-sm">English</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-xs sm:text-sm">Français</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-xs sm:text-sm">Español</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-xs sm:text-sm">Italiano</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}