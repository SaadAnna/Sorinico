"use client";
import React from "react";
import Image from "next/image";
import CasinoHeader from "./CasinoHeader";
import CasinoFooter from "./CasinoFooter";
type Casino = {
  id: number;
  name: string;
  imageAlt: string;
  bonus: string;
  details: string;
  payout: string;
  textbuton: string;
  buttonText: string;
  LinkButton: string;
};

const casinos: Casino[] = [
  {
    id: 1,
    name: "1. Jokerstar",
    imageAlt: "/jokimage.jpeg",
    bonus: "200 % bis zu 100 € + 200 Free Spins",
    details:
      "Auszahlungsquote: 94 bis 97 %\nBeliebte Zahlungsdienste akzeptiert",
    payout: "",
    LinkButton:
      "https://m.jokerstar.de/Redirect.aspx?mid=179&sid=923&cid=&pid=&affid=268",
    textbuton: "Sichere dir jetzt deinen Bonus",
    buttonText: "JETZT SPIELEN",
  },
  {
    id: 2,
    name: "2. Betano",
    imageAlt: "/betr.jpeg",
    bonus: "100 % bis zu 100 € + 20 € Freiwette",
    details:
      "Auszahlungsquote: 92,1 bis 95 %\nBeliebte Zahlungsdienste akzeptiert",
    payout: "",
    LinkButton:
      "https://www.pfxtracking.com/offer/load?o=279305E7D4774AB5899839DB54FD739B",
    textbuton: "Sichere dir jetzt deinen Bonus",
    buttonText: "JETZT SPIELEN",
  },
  {
    id: 3,
    name: "3. Löwen Play",
    imageAlt: "/lown.jpeg",
    bonus: "100 % bis zu 100 € + 150 Free Spins",
    details:
      "Auszahlungsquote: 93 bis 97 %\nBeliebte Zahlungsdienste akzeptiert",
    payout: "",
    LinkButton: "https://anr.loewen-play.de/redirect.aspx?pid=3662&bid=1581",
    textbuton: "Sichere dir jetzt deinen Bonus",
    buttonText: "JETZT SPIELEN",
  },
  {
    id: 4,
    name: "4. BingBong",
    imageAlt: "/bingbow.jpeg",
    bonus: "100 % bis zu 100 € + 50 Free Spins (Book of Ra Deluxe)",
    details:
      "Auszahlungsquote: 93 bis 97 %\nBeliebte Zahlungsdienste akzeptiert",
    payout: "",
    LinkButton:
      "https://www.bingbong.de/?iclid=1-22c00907-7280-367a-807a-a680720709c0-a89905",
    textbuton: "Sichere dir jetzt deinen Bonus",
    buttonText: "JETZT SPIELEN",
  },
  {
    id: 5,
    name: "5. Jackpot Piraten",
    imageAlt: "/jack.jpeg",
    bonus: "100 % bis zu 100 € + 50 Free Spins",
    details:
      "Auszahlungsquote: 92,7 % – 97,54 %\nBeliebte Zahlungsdienste akzeptiert",
    payout: "",
    LinkButton:
      "https://www.jackpotpiraten.de/?iclid=1-22c00907-9a95-3163-8063-e1959a0709c0-a89599",
    textbuton: "Sichere dir jetzt deinen Bonus",
    buttonText: "JETZT SPIELEN",
  },
];

export default function Home() {
  return (
    
      <div>
      <CasinoHeader />
    <section className="bg-gray-100 dark:bg-gray-800 py-10 px-4 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 ">
        Unsere Empfehlungen basierend auf Bonusangeboten im April 2025:
      </h2>

      {/* FLEX WRAPPER */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* MAIN CONTENT */}
        <div className="flex-1 space-y-6">
          {casinos.map((casino) => (
            <div
              key={casino.id}
              className="bg-white dark:bg-gray-700 shadow-md p-4 rounded-lg flex flex-col md:flex-row items-center w-ma justify-between"
            >
              <div className="flex flex-col items-center gap-4 w-full md:w-auto">
                <span className="text-xl font-bold">{casino.name}</span>
                <div className="w-32 h-32 relative">
                  <Image
                    src={casino.imageAlt}
                    alt="image icon"
                    width={96}
                    height={96}
                    className="rounded-md "
                  />
                </div>
              </div>
              <div className="flex gap-2 itmes-center mt-4 md:mt-0 md:px-6 text-center md:text-left">
                <p className="font-bold text-sm text-yellow-600 text-center">
                  {casino.bonus}
                </p>
                <p className="text-sm text-gray-600 dark:text-white/70 text-center whitespace-pre-line  solid border-l-black">
                  {casino.details}
                </p>
              </div>
              <div className="flex flex-col gap-3 text-center">
                <h4 className="text-black dark:text-white text-base text-bold">
                  {casino.textbuton}
                </h4>
                <a
                  href={casino.LinkButton}
                  className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-2"
                >
                  {casino.buttonText}
                </a>
              </div>
            </div>
          ))}
          <p className="text-sm text-center text-gray-600 mt-4">
            Angebot gilt nur für neue Spieler. Verfügbar für Personen ab 18
            Jahren.
          </p>
        </div>

        {/* SIDEBAR */}
        <aside className="w-full lg:w-[300px] flex-shrink-0 lg:sticky lg:top-6 h-fit">
          {/* Popular Games */}
          <div className="bg-white rounded-md shadow p-4 mb-4">
            <h2 className="text-md font-semibold mb-2 dark:text-black">
              Beliebteste Casino Spiele
            </h2>
            <ul className="text-sm space-y-1">
              <li className=" dark:text-black">🎰 Spielautomaten</li>
              <li className=" dark:text-black">🎲 Roulette</li>
              <li className=" dark:text-black">🃏 Blackjack</li>
              <li className="text-blue-600 underline">Weitere Spiele</li>
            </ul>
          </div>

          {/* Help & Info */}
          <div className="bg-white rounded-md shadow p-4 mb-4">
            <h2 className="text-md font-semibold mb-2 dark:text-black">Hilfe & Infos</h2>
            <ul className="text-sm space-y-1">
              <li className="dark:text-black">📘 Online Casino Ratgeber</li>
              <li className="dark:text-black">ℹ️ Infos zu Online Casinos & GlüStV</li>
            </ul>
          </div>

          {/* Top Casinos List */}
          <div className="bg-white rounded-md shadow p-4 mb-4">
            <h2 className="text-md font-semibold mb-2 dark:text-black">
              Beste Online Casinos{" "}
              <span className="text-orange-500">Apr. 2025</span>
            </h2>
            <ol className="text-sm space-y-1 list-decimal list-inside">
              <li className="dark:text-black">JINSPI</li>
              <li className="dark:text-black">Kingmaker</li>
              <li className="dark:text-black">REVOLUTION CASINO</li>
              <li className="dark:text-black">CASINOVA</li>
              <li className="dark:text-black">Slotsville</li>
              <li className="dark:text-black">SPUNTER</li>
              <li className="dark:text-black">VULKAN</li>
              <li className="dark:text-black">LUCKY DREAMS</li>
              <li className="dark:text-black">FRUITY</li>
              <li className="dark:text-black">GOLDEN CLUB</li>
            </ol>
          </div>

          {/* New Casinos */}
          <div className="bg-white rounded-md shadow p-4 mb-4">
            <h2 className="text-md font-semibold mb-2 dark:text-black">Neue Online Casinos</h2>
            <ul className="text-sm space-y-1">
              <li className="text-black">1. TRIVELABET – 1.000€*</li>
              <li className="text-black">2. GGSET – 1.000€*</li>
              <li className="text-black">3. GOLD CLUB – 500€*</li>
            </ul>
          </div>

          <button className="w-full mt-4 bg-gray-300 dark:bg-gray-500 py-2 rounded text-sm font-medium">
            ZUM SEITENANFANG
          </button>
        </aside>
      </div>
    </section>
    <CasinoFooter />
    </div>
  );
}
