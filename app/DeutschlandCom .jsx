import React from 'react';

const DeutschlandCom = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Deutschland.com</h1>
      </header>

      {/* Casino Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Beste Online Casinos</h2>
        
        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-4 md:gap-6">
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Bonus</a>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Spiele</a>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Zahlungsmethoden</a>
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">News</a>
        </nav>
      </section>
    </div>
  );
};

export default DeutschlandCom;