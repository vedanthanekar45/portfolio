"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Resume from "../portfolio/Resume";
import Projects from "../portfolio/Projects";
import Experience from "../portfolio/Experience";
import Education from "../portfolio/Education";
import About from "../portfolio/About";

const navItems = ["About", "Education", "Experience", "Projects", "Resume"];

const SettingsContent: Record<string, React.ReactNode> = {
  About: (
    <div className="text-xl">
      <About />
    </div>
  ),

  Education: (
    <div className="text-xl">
      <Education />
    </div>
  ),

  Experience: (
    <div className="text-xl">
      <Experience />
    </div>
  ),

  Projects: (
    <div className="text-xl">
      <Projects />
    </div>
  ),

  Resume: (
    <div className="text-xl">
      <Resume />
    </div>
  ),
};

type SettingsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialSection: string;
};

export default function SettingsModal({
  isOpen,
  onClose,
  initialSection,
}: SettingsModalProps) {
  const [selected, setSelected] = useState(initialSection);

  React.useEffect(() => {
    if (isOpen) {
      setSelected(initialSection);
    }
  }, [isOpen, initialSection]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed top-0 left-0 w-full h-full bg-white z-50 shadow-xl modal-container"
        >
          {/* Header */}
          <div className="w-full bg-black h-12 flex justify-end">
            <button
              onClick={onClose}
              className="flex items-center justify-center text-white text-xl px-4 hover:bg-red-700"
            >
              <IoMdClose />
            </button>
          </div>

          {/* Body */}
          <div className="flex h-full text-[#0078D7] text-2xl segoe">
            {/* Sidebar */}
            <div className="w-1/4 min-w-[220px] bg-[#f2f2f2] border-r border-gray-300">
              <h2 className="text-5xl font-light px-6 py-8">Information</h2>
              <ul className="space-y-1 overflow-y-auto max-h-[calc(100vh-48px)]">
                {navItems.map((item) => (
                  <li
                    key={item}
                    onClick={() => setSelected(item)}
                    className={`px-6 py-2 cursor-pointer ${
                      item === selected
                        ? "bg-[#0078D7] text-white font-medium"
                        : "text-black hover:bg-gray-200"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Content */}
            <div className="flex-1 p-10 overflow-y-auto">
              <h3 className="text-4xl text-black font-light mb-6">
                {selected}
              </h3>
              <div className="space-y-6">
                {SettingsContent[selected] || (
                  <div className="text-gray-500">No content available</div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
