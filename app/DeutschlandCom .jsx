import React from 'react';
import IconWeb from "@/public/iconprincip.png";
import Image from 'next/image';
const DeutschlandCom = () => {
  return (
    <div className="max-w-7xl mx-auto lg:flex items-center gap-10">
      {/* Header */}
      <header className="mb-8">
        <Image src={IconWeb} alt='Website Icon' width={50} height={50} />
      </header>

      {/* Casino Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Beste Online Casinos</h2>
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-4 md:gap-6">
          <a href="#" className="text-black font-semibold text-lg">Bonus</a>
          <a href="#" className="text-black font-semibold text-lg">Spiele</a>
          <a href="#" className="text-black font-semibold text-lg">Zahlungsmethoden</a>
          <a href="#" className="text-black font-semibold text-lg">News</a>
        </nav>
      </section>
    </div>
  );
};

export default DeutschlandCom;