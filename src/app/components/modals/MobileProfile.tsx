"use client";

import { useState } from "react";
import { ArrowLeft, MoreHorizontal, MapPin, Code } from "lucide-react";
import Link from "next/link";

interface ProfileModalProps {
  onClose: () => void;
  initialTab?: string;
}

export default function MobileProfile({
  onClose,
  initialTab = "profile",
}: ProfileModalProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div className="fixed inset-0 z-50 bg-black text-white font-sans segoe overflow-hidden select-none animate-in slide-in-from-right duration-300 ease-out">
      {/* --- 1. HEADER (Pivot Control) --- */}
      <div className="mt-8 mb-6 pb-6 pl-5 flex items-baseline gap-5 whitespace-nowrap overflow-x-hidden">
        <button
          onClick={() => setActiveTab("profile")}
          className={`transition-all duration-300 ease-out text-left focus:outline-none ${
            activeTab === "profile"
              ? "text-6xl font-light opacity-100"
              : "text-6xl font-light text-gray-500 opacity-40 hover:opacity-60"
          }`}
        >
          profile
        </button>

        <button
          onClick={() => setActiveTab("projects")}
          className={`transition-all duration-300 ease-out text-left focus:outline-none ${
            activeTab === "projects"
              ? "text-6xl font-light opacity-100 -ml-2"
              : "text-6xl font-light text-gray-500 opacity-40 hover:opacity-60"
          }`}
        >
          projects
        </button>
      </div>

      {/* --- 2. CONTENT AREA --- */}
      <div className="pl-5 pr-4 pb-24 h-[calc(100vh-180px)] overflow-y-auto no-scrollbar">
        {/* VIEW 1: PROFILE */}
        {activeTab === "profile" && (
          <div className="flex flex-col gap-8 animate-fade-in">
            <div className="mb-2">
              <h3 className="text-3xl font-light text-[#0078D7]">
                Vedant Thanekar
              </h3>
              <p className="text-sm text-gray-400 mt-1 leading-snug">
                "Building systems end-to-end. Backend APIs, Data Pipelines, and
                Production Deployments."
              </p>
            </div>

            {/* Email */}
            <div className="group cursor-pointer">
              <h4 className="text-3xl font-light lowercase">send email</h4>
              <a
                href="mailto:vedant@example.com"
                className="text-sm font-semibold text-[#E81123] mt-0.5 block"
              >
                vedant@example.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="group cursor-pointer">
              <h4 className="text-3xl font-light lowercase">connect</h4>
              <Link
                href="https://linkedin.com"
                className="text-sm font-semibold text-[#E81123] mt-0.5 block"
              >
                LinkedIn Profile
              </Link>
            </div>

            {/* Location */}
            <div className="group cursor-pointer">
              <h4 className="text-3xl font-light lowercase">location</h4>
              <span className="text-sm font-semibold text-[#E81123] mt-0.5 block">
                India
              </span>
            </div>
          </div>
        )}

        {/* VIEW 2: PROJECTS */}
        {activeTab === "projects" && (
          <div className="flex flex-col gap-9 animate-fade-in">
            {/* Project 1 */}
            <div className="group">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="text-3xl font-light lowercase">novel nest</h4>
                <div className="flex gap-2 opacity-60">
                  <Code className="w-4 h-4" />
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                Letterboxd for books. Track reading and discover new books using
                Google Books API.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-sm font-semibold text-[#E81123]">
                  view code
                </Link>
                <Link href="#" className="text-sm font-semibold text-[#E81123]">
                  demo
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group">
              <h4 className="text-3xl font-light lowercase">ferry</h4>
              <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                High-throughput context extraction engine for AI workflows
                written in Go.
              </p>
              <span className="text-sm font-semibold text-[#E81123] opacity-60">
                coming soon
              </span>
            </div>

            {/* Project 3 */}
            <div className="group">
              <h4 className="text-3xl font-light lowercase">the wanderer</h4>
              <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                Travel companion app. Backend infrastructure with Express and
                MySQL.
              </p>
              <Link href="#" className="text-sm font-semibold text-[#E81123]">
                view code
              </Link>
            </div>

            {/* Project 4 */}
            <div className="group">
              <h4 className="text-3xl font-light lowercase">kinoji</h4>
              <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                Data engineering analytics system for film industry trends.
              </p>
              <Link href="#" className="text-sm font-semibold text-[#E81123]">
                view code
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* --- 3. BOTTOM APP BAR --- */}
      <div className="absolute bottom-0 w-full bg-[#1F1F1F] h-16 flex items-center justify-center gap-12 border-t border-gray-800 z-50">
        <button className="flex flex-col items-center justify-center w-10 h-10 rounded-full border-2 border-white opacity-80 active:bg-white active:text-black transition-colors">
          <MapPin className="w-5 h-5" />
        </button>

        <button
          onClick={onClose}
          className="flex flex-col items-center justify-center w-10 h-10 rounded-full border-2 border-white opacity-80 active:bg-white active:text-black transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <button className="flex flex-col items-center justify-center w-10 h-10 rounded-full border-2 border-white opacity-80 active:bg-white active:text-black transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
