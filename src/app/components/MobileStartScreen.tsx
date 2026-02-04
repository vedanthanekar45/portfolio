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
  const [activeModal, setActiveModal] = useState("");
  const [accentColor, setAccentColor] = useState(METRO_COLORS[0]);

  useEffect(() => {
    const randomColor =
      METRO_COLORS[Math.floor(Math.random() * METRO_COLORS.length)];
    setAccentColor(randomColor);
  }, []);

  const openModal = (tabName: string) => {
    setActiveModal(tabName);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-y-auto select-none flex flex-col segoe items-center">
      <div className="w-full px-4 py-6 sm:max-w-sm sm:px-5 mx-auto">
        {/* Header */}
        <div className="mb-5 flex justify-between items-end pl-1 animate-fade-in-down">
          <h1 className="text-4xl font-light tracking-wide">Start</h1>
          <div className="text-2xl font-light opacity-80 mb-1">
            Vedant Thanekar
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2.5">
          <a
            href="mailto:vedanthanekar45@gmail.com"
            className="col-span-4 aspect-[2/1] relative flex flex-col items-center justify-center hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
            style={{ backgroundColor: accentColor }}
          >
            <img
              src="/mail.png"
              alt="Mail"
              className="w-14 h-14 object-contain mb-1"
            />
            <span className="absolute bottom-2 left-3 text-base font-normal">
              Mail
            </span>
            <span className="absolute top-2 right-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
              3
            </span>
          </a>

          <div
            onClick={() => openModal("profile")}
            className="col-span-2 aspect-square relative flex flex-col items-center justify-center hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
            style={{ backgroundColor: accentColor }}
          >
            <img
              src="/about.png"
              alt="About"
              className="w-10 h-10 mb-1 object-contain"
            />
            <span className="absolute bottom-2 left-3 text-sm font-normal">
              About
            </span>
          </div>

          <a
            href="https://linkedin.com/in/vedant-thanekar"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 bg-[#0077B5] aspect-square relative flex flex-col items-center justify-center hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
          >
            <img
              src="/linkedin.svg"
              alt="LinkedIn"
              className="w-10 h-10 object-contain"
            />
            <span className="absolute bottom-2 left-3 text-sm font-normal">
              LinkedIn
            </span>
          </a>

          <div
            onClick={() => openModal("projects")}
            className="col-span-4 aspect-[2/1] relative flex flex-col items-center justify-center group hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer overflow-hidden"
            style={{ backgroundColor: accentColor }}
          >
            <img
              src="/code.png"
              alt="Projects"
              className="w-14 h-14 object-contain mb-1"
            />
            <span className="absolute bottom-2 left-3 text-base font-normal">
              Projects
            </span>
            <div className="absolute bottom-2 right-3 flex items-center gap-1 text-xs font-medium opacity-80">
              View All <ArrowRight className="w-3 h-3" />
            </div>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 aspect-square relative flex flex-col items-center justify-center hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
            style={{ backgroundColor: accentColor }}
          >
            <img
              src="/resume.png"
              alt="Resume"
              className="w-10 h-10 object-contain"
            />
            <span className="absolute bottom-2 left-3 text-sm font-normal">
              Resume
            </span>
          </a>

          <a
            href="https://github.com/vedanthanekar45"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 bg-[#181717] border border-gray-800 aspect-square relative flex flex-col items-center justify-center hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
          >
            <img
              src="/github.png"
              alt="GitHub"
              className="w-10 h-10 object-contain"
            />
            <div className="absolute bottom-2 left-3">
              <span className="block text-sm font-normal">GitHub</span>
            </div>
          </a>

          <a
            href="https://x.com/ThanekarVedant"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 bg-black border border-gray-700 aspect-square flex items-center justify-center hover:bg-gray-900 cursor-pointer relative"
          >
            <img src="/x.svg" alt="X" className="w-6 h-6 object-contain" />
          </a>

          <a
            href="https://open.spotify.com/user/YOUR_USER"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 bg-[#1DB954] aspect-square flex items-center justify-center hover:opacity-90 cursor-pointer relative"
          >
            <img
              src="/spotify.png"
              alt="Spotify"
              className="w-6 h-6 object-contain"
            />
          </a>

          <a
            href="https://medium.com/@vedanthanekar45"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 bg-white aspect-square flex items-center justify-center hover:opacity-90 cursor-pointer relative"
          >
            <img
              src="/medium.svg"
              alt="Medium"
              className="w-8 h-8 object-contain"
            />
          </a>

          <a
            href="https://letterboxd.com/vedanthanekar"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 bg-blue-950 aspect-square flex items-center justify-center hover:opacity-90 cursor-pointer relative"
          >
            <img
              src="/letterboxd.png"
              alt="Medium"
              className="w-16 h-16 object-contain"
            />
          </a>
        </div>
      </div>

      {activeModal && (
        <MobileProfile
          onClose={() => setActiveModal(null)}
          initialTab={activeModal}
        />
      )}
    </div>
  );
}
