"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MobileProfile from "../components/modals/MobileProfile";

// 1. ANIMATION VARIANTS
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Cascades the tiles in
      delayChildren: 0.1,
    },
  },
} as const;

const tileVariants = {
  hidden: { opacity: 0, rotateX: 90, y: 50 }, // Start folded down
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: { type: "spring", stiffness: 150, damping: 20 },
  },
} as const;

const tapAnimation = {
  scale: 0.95,
  rotateX: 10, // The 3D Tilt Press
  transition: { duration: 0.1 },
} as const;

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
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center py-1 mb-2 opacity-60"
        >
          <span className="text-xs tracking-wider">{time}</span>
        </motion.div>

        {/* Grid Container (Animated) */}
        <motion.div
          className="grid grid-cols-4 gap-2.5 perspective-1000" // Added perspective for 3D effect
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- Mail --- */}
          <motion.a
            href="mailto:vedanthanekar45@gmail.com"
            className="col-span-4 aspect-[2/1] relative flex flex-col items-center justify-center cursor-pointer origin-center"
            style={{ backgroundColor: accentColor }}
            variants={tileVariants}
            whileTap={tapAnimation}
          >
            <img
              src="/mail.png"
              alt="Mail"
              className="w-14 h-14 object-contain mb-1"
            />
            <span className="absolute bottom-2 left-3 text-base font-normal">
              Mail
            </span>
          </motion.a>

          {/* --- About --- */}
          <motion.div
            onClick={() => openModal("profile")}
            className="col-span-2 aspect-square relative flex flex-col items-center justify-center cursor-pointer origin-center"
            style={{ backgroundColor: accentColor }}
            variants={tileVariants}
            whileTap={tapAnimation}
          >
            <img
              src="/about.png"
              alt="About"
              className="w-10 h-10 mb-1 object-contain"
            />
            <span className="absolute bottom-2 left-3 text-sm font-normal">
              About
            </span>
          </motion.div>

          {/* --- LinkedIn --- */}
          <motion.a
            href="https://linkedin.com/in/vedant-thanekar"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 bg-[#0077B5] aspect-square relative flex flex-col items-center justify-center cursor-pointer origin-center"
            variants={tileVariants}
            whileTap={tapAnimation}
          >
            <img
              src="/linkedin.svg"
              alt="LinkedIn"
              className="w-10 h-10 object-contain"
            />
            <span className="absolute bottom-2 left-3 text-sm font-normal">
              LinkedIn
            </span>
          </motion.a>

          {/* --- Projects --- */}
          <motion.div
            onClick={() => openModal("projects")}
            className="col-span-4 aspect-[2/1] relative flex flex-col items-center justify-center group overflow-hidden cursor-pointer origin-center"
            style={{ backgroundColor: accentColor }}
            variants={tileVariants}
            whileTap={tapAnimation}
          >
            <img
              src="/code.png"
              alt="Projects"
              className="w-14 h-14 object-contain mb-1"
            />
            <span className="absolute bottom-2 left-3 text-base font-normal">
              Projects
            </span>
          </motion.div>

          {/* --- Resume --- */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 aspect-square relative flex flex-col items-center justify-center cursor-pointer origin-center"
            style={{ backgroundColor: accentColor }}
            variants={tileVariants}
            whileTap={tapAnimation}
          >
            <img
              src="/resume.png"
              alt="Resume"
              className="w-10 h-10 object-contain"
            />
            <span className="absolute bottom-2 left-3 text-sm font-normal">
              Resume
            </span>
          </motion.a>

          {/* --- GitHub --- */}
          <motion.a
            href="https://github.com/vedanthanekar45"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 bg-[#181717] border border-gray-800 aspect-square relative flex flex-col items-center justify-center cursor-pointer origin-center"
            variants={tileVariants}
            whileTap={tapAnimation}
          >
            <img
              src="/github.png"
              alt="GitHub"
              className="w-10 h-10 object-contain"
            />
            <div className="absolute bottom-2 left-3">
              <span className="block text-sm font-normal">GitHub</span>
            </div>
          </motion.a>

          {/* --- X / Twitter --- */}
          <motion.a
            href="https://x.com/ThanekarVedant"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 bg-black border border-gray-700 aspect-square flex items-center justify-center cursor-pointer relative origin-center"
            variants={tileVariants}
            whileTap={tapAnimation}
          >
            <img src="/x.svg" alt="X" className="w-6 h-6 object-contain" />
          </motion.a>

          {/* --- Spotify --- */}
          <motion.a
            href="https://open.spotify.com/user/YOUR_USER"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 bg-[#1DB954] aspect-square flex items-center justify-center cursor-pointer relative origin-center"
            variants={tileVariants}
            whileTap={tapAnimation}
          >
            <img
              src="/spotify.png"
              alt="Spotify"
              className="w-6 h-6 object-contain"
            />
          </motion.a>

          {/* --- Medium --- */}
          <motion.a
            href="https://medium.com/@vedanthanekar45"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 bg-white aspect-square flex items-center justify-center cursor-pointer relative origin-center"
            variants={tileVariants}
            whileTap={tapAnimation}
          >
            <img
              src="/medium.svg"
              alt="Medium"
              className="w-8 h-8 object-contain"
            />
          </motion.a>

          {/* --- Letterboxd --- */}
          <motion.a
            href="https://letterboxd.com/vedanthanekar"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-1 bg-blue-950 aspect-square flex items-center justify-center cursor-pointer relative origin-center"
            variants={tileVariants}
            whileTap={tapAnimation}
          >
            <img
              src="/letterboxd.png"
              alt="Letterboxd"
              className="w-16 h-16 object-contain"
            />
          </motion.a>
        </motion.div>
      </div>

      {activeModal && (
        <MobileProfile
          onClose={() => setActiveModal("")}
          initialTab={activeModal}
        />
      )}
    </div>
  );
}
