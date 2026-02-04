"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import MobileProfile from "../components/modals/MobileProfile";

const METRO_COLORS = [
  "#0078D7",
  "#E81123",
  "#00B294",
  "#800080",
  "#F09609",
  "#D24726",
  "#A4C400",
  "#E3008C",
  "#008A00",
  "#68217A",
];

export default function MobileStartScreen() {
  const [activeModal, setActiveModal] = useState(null);
  const [accentColor, setAccentColor] = useState(METRO_COLORS[0]);

  const openModal = (tabName) => {
    setActiveModal(tabName);
  };

  useEffect(() => {
    const randomColor =
      METRO_COLORS[Math.floor(Math.random() * METRO_COLORS.length)];
    setAccentColor(randomColor);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans p-4 pb-20 overflow-y-auto select-none relative segoe">
      {/* 1. Header */}
      <div className="mb-6 mt-2 flex justify-between items-end animate-fade-in-down">
        <h1 className="text-4xl font-light tracking-wide">Start</h1>
        <div className="text-2xl font-light opacity-80 mb-1">
          Vedant Thanekar
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 auto-rows-[minmax(80px,_auto)]">
        <a
          href="mailto:vedanthanekar45@gmail.com" // <--- Update email
          className="col-span-4 w-full aspect-[2/1] relative flex flex-col items-center justify-center hover:scale-[0.98] transition-transform active:opacity-90 cursor-pointer"
          style={{ backgroundColor: accentColor }}
        >
          <img src="/mail.png" alt="Mail" className="w-16 h-16" />
          <span className="absolute bottom-2 left-3 text-lg font-light">
            Contact Me
          </span>
          <span className="absolute top-3 right-3 text-xs bg-white/20 px-2 py-0.5 rounded-full">
            3
          </span>
        </a>

        <div
          onClick={() => openModal("profile")}
          className="col-span-2 w-full aspect-square relative flex flex-col items-center justify-center hover:scale-[0.98] transition-transform cursor-pointer active:opacity-90"
          style={{ backgroundColor: accentColor }}
        >
          <img src="/about.png" alt="About" className="w-12 h-12 mb-1" />
          <span className="absolute bottom-2 left-3 font-normal">About</span>
        </div>

        <a
          href="https://linkedin.com/in/vedant-thanekar" // <--- Update URL
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 w-full bg-[#0077B5] aspect-square relative flex flex-col items-center justify-center hover:scale-[0.98] transition-transform cursor-pointer"
        >
          <img src="/linkedin.svg" alt="LinkedIn" className="w-12 h-12" />
          <span className="absolute bottom-2 left-3 font-normal">LinkedIn</span>
        </a>

        <div
          onClick={() => openModal("projects")}
          className="col-span-4 w-full aspect-[2/1] relative flex flex-col items-center justify-center group hover:scale-[0.98] transition-transform cursor-pointer overflow-hidden"
          style={{ backgroundColor: accentColor }}
        >
          <img src="/code.png" alt="Projects" className="w-16 h-16" />
          <span className="absolute bottom-2 left-3 text-lg font-light">
            Projects
          </span>
          <div className="absolute bottom-3 right-3 flex items-center gap-1 text-sm font-medium opacity-80">
            View All <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        <a
          href="https://drive.google.com/file/d/1yEYljrjUQK6sYT5GuNkaVc1O7Byn2Xns/view?usp=drive_link" // <--- Ensure file is in 'public' folder
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 w-full aspect-square relative flex flex-col items-center justify-center hover:scale-[0.98] transition-transform cursor-pointer"
          style={{ backgroundColor: accentColor }}
        >
          <img src="/resume.png" alt="Resume" className="w-12 h-12" />
          <span className="absolute bottom-2 left-3 font-normal">Resume</span>
        </a>

        <a
          href="https://github.com/vedanthanekar45" // <--- Update URL
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 w-full bg-[#181717] border border-gray-800 aspect-square relative flex flex-col items-center justify-center hover:scale-[0.98] transition-transform cursor-pointer"
        >
          <img src="/github.png" alt="GitHub" className="w-12 h-12" />
          <div className="absolute bottom-2 left-3">
            <span className="block font-normal">GitHub</span>
          </div>
        </a>

        <a
          href="https://x.com/ThanekarVedant"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-1 w-full bg-black border border-gray-700 aspect-square flex items-center justify-center hover:bg-gray-900 cursor-pointer relative"
        >
          <img src="/x.svg" alt="X" className="w-8 h-8" />
        </a>

        <a
          href="https://open.spotify.com/user/vedant_45"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-1 w-full bg-[#1DB954] aspect-square flex items-center justify-center cursor-pointer relative"
        >
          <img src="/spotify.png" alt="Spotify" className="w-8 h-8" />
        </a>

        <a
          href="https://medium.com/@vedanthanekar45"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-1 w-full bg-white aspect-square flex items-center justify-center cursor-pointer relative"
        >
          <img src="/medium.svg" alt="Medium" className="w-24 h-24" />
        </a>

        <div className="col-span-1 w-full bg-gray-800 aspect-square flex items-center justify-center opacity-50">
          <span className="text-xs">...</span>
        </div>
      </div>

      {/* Bottom Arrow */}
      <div
        className="mt-8 flex justify-end pr-2 animate-bounce opacity-50"
        onClick={() => openModal("profile")}
      >
        <ArrowRight className="w-6 h-6 border rounded-full border-white p-1" />
      </div>

      {/* --- Modal --- */}
      {activeModal && (
        <MobileProfile
          onClose={() => setActiveModal(null)}
          initialTab={activeModal} // <--- Pass the specific tab here
        />
      )}
    </div>
  );
}
