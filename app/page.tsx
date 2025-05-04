// app/page.tsx
"use client";
import GerFlag from "@/public/germanyflag.png";
import HitImage from "@/public/Hit.png";
import KingImage from "@/public/king.png";
import RevoImage from "@/public/revolu.png";
import CasaImage from "@/public/casani.png";
import SeotImage from "@/public/seot.png";
import PunterImage from "@/public/punter.png";
import VulkImage from "@/public/vulk.png";
import LuckyImgae from "@/public/lucky.png";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gray-100 p-6 text-gray-900">
      {/* Header */}
      <section className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Beste Online Casinos in Deutschland 2025
        </h1>
        <p className="text-sm text-gray-700">
          Diese Top 50 enthält ausschließlich staatlich lizenzierte Online
          Spielbanken, deren Webseiten und Kundendienste selbstverständlich für
          deutschsprachige Kunden geeignet sind. Lest bitte meine Testberichte,
          wenn ihr mehr Informationen für eure Entscheidung benötigt.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Casino List */}
        <div className="flex-1">
          <div className="bg-blue-100 p-7 flex-row rounded-md font-semibold mb-4 flex gap-2 justify-center">
            <Image className="w-8 h-5" alt="Germany Flag" src={GerFlag} />
            🇩🇪 Beste deutsche Casinoseiten 2025
          </div>

          {/* Casino Cards */}
          {[
            {
              rank: 1,
              setiings: "96.00%  1 - 5 Tage  7.500+",
              bonus: "800€*",
              rating: "5/5",
              image: HitImage,
              tag: "Regelmäßige Turniere",
            },
            {
              rank: 2,
              setiings: "96.00%  1 - 5 Tage  8.400+",
              bonus: "500€*",
              rating: "4.9/5",
              image: KingImage,
              tag: "Top Spielauswahl",
            },
            {
              rank: 3,

              setiings: "96.00%  1 - 5 Tage  5.000+",
              bonus: "1.500€*",
              rating: "4.8/5",
              image: RevoImage,
              tag: "Exklusiver 150% Bonus",
            },
            {
              rank: 4,
              setiings: "98.00%  1 - 5 Tage  10.000+",
              bonus: "2.000€*",
              rating: "4.8/5",
              image: CasaImage,
              tag: "Top Spielauswahl",
            },
            {
              rank: 5,
              setiings: "96.00%  1 - 5 Tage  7.900+",
              bonus: "1.000€*",
              rating: "4.7/5",
              image: SeotImage,
              tag: "Attraktive Aktionen",
            },
            {
              rank: 6,
              setiings: "96.00%  1 - 5 Tage  12.000+",
              bonus: "500€*",
              rating: "4.7/5",
              image: PunterImage,
              tag: "Mehr als 12.000 Spiele aller Art",
            },
            {
              rank: 7,

              setiings: "97.00%  1 - 4 Tage  3.100+",
              bonus: "1.000€*",
              rating: "4.6/5",
              image: VulkImage,
              tag: "Top Treueprogramm",
            },
            {
              rank: 8,

              setiings: "96.00%  1 - 3 Tage  4.900+",
              bonus: "500€*",
              rating: "4.6/5",
              image: LuckyImgae,
              tag: "Exklusivangebot",
            },
          ].map((casino) => (
            <div
              key={casino.rank}
              className="flex flex-col sm:flex-row w-full items-start sm:items-center justify-between rounded-xl border bg-white p-4 shadow-md mb-4 gap-4"
            >
              {/* Left section */}
              <div className="flex items-center gap-4">
                <div className="text-lg font-bold rounded-full py-10 px-4 bg-blue-200">
                  {casino.rank}
                </div>

                <div className="bg-blue-50 gap-4 p-4 rounded-lg flex items-center w-full sm:w-[280px] h-[100px]">
                <Image
                    src={casino.image}
                    alt={casino.tag}
                    width={80}
                    height={80}
                    className="rounded object-contain"
                  />
                  <div className="text-2xl font-bold">{casino.bonus}</div>
                </div>
              </div>

              {/* Right section */}
              <div className="flex flex-col gap-1 text-sm text-right">
                <div className="text-xs flex items-center justify-end gap-1 text-gray-600">
                  <Star className="w-3 h-3 text-yellow-400" />
                  {casino.rating}
                </div>
                <div className="font-semibold text-green-700">{casino.tag}</div>
                <div className="text-gray-800">{casino.setiings}</div>

                <div className="flex justify-end gap-3 mt-2">
                  <button className="bg-gradient-to-r cursor-pointer from-orange-500 to-red-500 text-white px-4 py-2 rounded-md text-sm font-semibold shadow">
                    Jetzt Spielen
                  </button>
                  <button className="text-blue-500 cursor-pointer text-sm hover:underline">
                    Zum Testbericht
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-[300px] flex-shrink-0 lg:sticky lg:top-6 h-fit">
          {/* Popular Games */}
          <div className="bg-white rounded-md shadow p-4 mb-4">
            <h2 className="text-md font-semibold mb-2">
              Beliebteste Casino Spiele
            </h2>
            <ul className="text-sm space-y-1">
              <li>🎰 Spielautomaten</li>
              <li>🎲 Roulette</li>
              <li>🃏 Blackjack</li>
              <li className="text-blue-600 underline">Weitere Spiele</li>
            </ul>
          </div>

          {/* Help & Info */}
          <div className="bg-white rounded-md shadow p-4 mb-4">
            <h2 className="text-md font-semibold mb-2">Hilfe & Infos</h2>
            <ul className="text-sm space-y-1">
              <li>📘 Online Casino Ratgeber</li>
              <li>ℹ️ Infos zu Online Casinos & GlüStV</li>
            </ul>
          </div>

          {/* Top Casinos List */}
          <div className="bg-white rounded-md shadow p-4 mb-4">
            <h2 className="text-md font-semibold mb-2">
              Beste Online Casinos{" "}
              <span className="text-orange-500">Apr. 2025</span>
            </h2>
            <ol className="text-sm space-y-1 list-decimal list-inside">
              <li>JINSPI</li>
              <li>Kingmaker</li>
              <li>REVOLUTION CASINO</li>
              <li>CASINOVA</li>
              <li>Slotsville</li>
              <li>SPUNTER</li>
              <li>VULKAN</li>
              <li>LUCKY DREAMS</li>
              <li>FRUITY</li>
              <li>GOLDEN CLUB</li>
            </ol>
          </div>

          {/* New Casinos */}
          <div className="bg-white rounded-md shadow p-4 mb-4">
            <h2 className="text-md font-semibold mb-2">Neue Online Casinos</h2>
            <ul className="text-sm space-y-1">
              <li>1. TRIVELABET – 1.000€*</li>
              <li>2. GGSET – 1.000€*</li>
              <li>3. GOLD CLUB – 500€*</li>
            </ul>
          </div>

          <button className="w-full mt-4 bg-gray-300 py-2 rounded text-sm font-medium">
            ZUM SEITENANFANG
          </button>
        </aside>
      </section>
    </main>
  );
}
