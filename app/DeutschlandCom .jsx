import React from "react";
import IconWeb from "@/public/iconprincip.png";
import Image from "next/image";
const DeutschlandCom = () => {
  return (
    <section className="max-w-7xl mx-auto lg:flex items-center lg:justify-between flex flex-col bg-white shadow-2xl shadow-black">
      <div className="text-xl text-black text-bold">
        <div>Deutschland.com</div>
      </div>
      <nav className="lg:flex items-center flex flex-col gap-4 md:gap-6">
        <a href="#" className="text-black font-semibold text-lg p-4 transition-all ease-in hover:bg-gray-200">
          Beste Online Casinos
        </a>
        <a href="#" className="text-black font-semibold text-lg p-4 transition-all ease-in hover:bg-gray-200">
          Bonus
        </a>
        <a href="#" className="text-black font-semibold text-lg p-4 transition-all ease-in hover:bg-gray-200">
          Spiele
        </a>
        <a href="#" className="text-black font-semibold text-lg p-4 transition-all ease-in hover:bg-gray-200">
          Zahlungsmethoden
        </a>
        <a href="#" className="text-black font-semibold text-lg p-4 transition-all ease-in hover:bg-gray-200">
          News
        </a>
      </nav>
    </section>
  );
};

export default DeutschlandCom;
