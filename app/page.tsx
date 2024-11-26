"use client";

import { useState, useEffect } from "react";
import SlotMachine from "@/components/SlotMachine";
import GenerateButton from "@/components/GenerateButton";
import { sfPro } from "./fonts";

export default function Home() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<DateIdea | null>(null);

  const handleGenerate = () => {
    setIsSpinning(true);
    setTimeout(() => {
      setIsSpinning(false);
      setResult({
        dayTime: generateRandomDayTime(),
        activity: generateRandomActivity(),
        pricePoint: generateRandomPricePoint(),
      });
    }, 3000);
  };

  return (
    <main
      className={`min-h-screen p-8 flex flex-col items-center justify-center bg-[#1A1B23] relative overflow-hidden ${sfPro.variable} font-sans`}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FF3333]/10 to-transparent" />

      {/* Header with gaming style */}
      <div className="relative">
        <div className="absolute -top-12 -left-16 w-32 h-32 bg-[#FF3333] rounded-full blur-[100px] opacity-20" />
        <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
          <span className="text-[#FF3333] relative">
            🎲
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF3333] rounded-full animate-ping" />
          </span>
          Date Idea Generator
        </h1>
        <p className="text-[#FF3333]/60 text-center mb-8">
          Level up your dating game!
        </p>
      </div>

      {/* Main card with enhanced styling */}
      <div className="bg-[#232530] rounded-2xl p-8 shadow-2xl w-full max-w-md border border-[#2F3142] relative">
        {/* Glowing corner accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#FF3333]/30 rounded-tl-2xl" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FF3333]/30 rounded-br-2xl" />

        <SlotMachine isSpinning={isSpinning} result={result} />

        <div className="mt-8">
          <GenerateButton
            onClick={handleGenerate}
            isSpinning={isSpinning}
            isRegenerating={!!result}
          />
        </div>

        {result && !isSpinning && (
          <div className="mt-6 flex justify-center gap-4">
            <button className="px-4 py-2 bg-[#2F3142] text-[#FF3333] rounded-lg hover:bg-[#383B52] transition-colors flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF3333] rounded-full animate-pulse" />
              Save
            </button>
            <button className="px-4 py-2 bg-[#2F3142] text-[#FF3333] rounded-lg hover:bg-[#383B52] transition-colors flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF3333] rounded-full animate-pulse" />
              Share
            </button>
          </div>
        )}

        {/* Bottom stats */}
        <div className="mt-8 pt-4 border-t border-[#2F3142] flex justify-between text-xs text-[#FF3333]/60">
          <span>v1.0.0</span>
          <span>Made with ❤️ for couples</span>
        </div>
      </div>
    </main>
  );
}

// Types
interface DateIdea {
  dayTime: string;
  activity: string;
  pricePoint: string;
}

// Helper functions
function generateRandomDayTime(): string {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const times = ["Morning", "Afternoon", "Evening", "Night"];
  return `${days[Math.floor(Math.random() * days.length)]} ${
    times[Math.floor(Math.random() * times.length)]
  }`;
}

function generateRandomActivity(): string {
  const activities = [
    "Movie Night",
    "Picnic in the Park",
    "Cooking Class",
    "Museum Visit",
    "Beach Walk",
    "Dance Lessons",
    "Board Game Café",
    "Art Gallery",
    "Wine Tasting",
    "Hiking Adventure",
    "Concert",
    "Food Truck Tour",
  ];
  return activities[Math.floor(Math.random() * activities.length)];
}

function generateRandomPricePoint(): string {
  const pricePoints = ["$ Budget-Friendly", "$$ Moderate", "$$$ Splurge"];
  return pricePoints[Math.floor(Math.random() * pricePoints.length)];
}
