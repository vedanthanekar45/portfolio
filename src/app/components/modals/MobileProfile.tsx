"use client";

import { useState } from "react";
import { ArrowLeft, GraduationCap } from "lucide-react";
import Link from "next/link";

interface ProfileModalProps {
  onClose: () => void;
  initialTab?: string;
  accentColor: string;
}

export default function MobileProfile({
  onClose,
  initialTab = "profile",
  accentColor,
}: ProfileModalProps) {
  const [activeTab, setActiveTab] = useState(initialTab);

  const renderHeaderBtn = (tabName: string, label: string) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`transition-all duration-300 ease-out text-left focus:outline-none flex-shrink-0 ${
        activeTab === tabName
          ? "text-5xl font-light opacity-100"
          : "text-5xl font-light text-gray-500 opacity-40 hover:opacity-60"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="fixed inset-0 z-50 bg-black text-white font-sans segoe overflow-hidden select-none animate-in slide-in-from-right duration-300 ease-out">
      <div className="mt-8 mb-6 pb-6 pl-5 flex items-baseline gap-6 whitespace-nowrap overflow-x-auto no-scrollbar">
        {renderHeaderBtn("profile", "profile")}
        {renderHeaderBtn("experience", "experience")}
        {renderHeaderBtn("projects", "projects")}
        {renderHeaderBtn("education", "education")}
      </div>

      <div className="pl-5 pr-4 pb-40 h-[calc(100vh-180px)] overflow-y-auto no-scrollbar">
        {activeTab === "profile" && (
          <div className="flex flex-col gap-8 animate-fade-in">
            <div className="mb-2">
              <h3 className="text-3xl font-light text-[#0078D7]">
                Vedant Thanekar
              </h3>
              <p className="text-sm text-gray-400 mt-1 leading-snug">
                Hi, I’m a final-year Information Technology student who enjoys
                building systems, from backend APIs and data pipelines to
                production deployments.
              </p>
              <p className="text-sm text-gray-400 mt-3 leading-snug">
                Apart from tech, I am interested in films and storytelling.
                Whether I'm writing code or writing stories, I love chasing that
                feeling of curiosity.
              </p>
            </div>

            <div className="group cursor-pointer">
              <h4 className="text-3xl font-light lowercase">send email</h4>
              <a
                href="mailto:vedanthanekar45@gmail.com"
                className="text-sm font-semibold mt-0.5 block"
                style={{ color: accentColor }}
              >
                vedanthanekar45@gmail.com
              </a>
            </div>

            <div className="group cursor-pointer">
              <h4 className="text-3xl font-light lowercase">connect</h4>
              <Link
                href="https://linkedin.com/in/vedant-thanekar"
                className="text-sm font-semibold mt-0.5 block"
                style={{ color: accentColor }}
              >
                LinkedIn Profile
              </Link>
            </div>
          </div>
        )}

        {activeTab === "experience" && (
          <div className="flex flex-col gap-9 animate-fade-in lowercase">
            {/* Exp 1 */}
            <div className="group">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="text-3xl font-light lowercase">ignaite, llc</h4>
              </div>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: accentColor }}
              >
                software developer intern
              </p>
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">
                Dec 2025 – Present
              </p>
              <p className="text-sm text-gray-400 mb-2 leading-snug">
                Building a Financial Portfolio Optimizer for employees in the
                United States to help them pick an optimal portfolio for their
                401k (PF) package. Using FastAPI backend and ETL using
                Databricks.
              </p>
            </div>

            <div className="group">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="text-3xl font-light lowercase">commusync</h4>
              </div>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: accentColor }}
              >
                mern developer intern
              </p>
              <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest">
                Aug 2025 – Oct 2025
              </p>
              <p className="text-sm text-gray-400 leading-snug">
                A startup developing a modern SaaS platform designed to
                streamline society and apartment complex management. Developed
                and implemented frontend, user-facing features for the CommuSync
                web platform in Next.js and Typescript.
              </p>
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <div className="flex flex-col gap-9 animate-fade-in lowercase">
            <div className="group">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="text-3xl font-light lowercase">kinoji</h4>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-400">
                  stack: python, fastapi, svelte, digitalocean
                </p>
              </div>
              <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                a data engineering and analytics system with AI integration, to
                map trends in the film industry.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/vedanthanekar45/kinoji"
                  className="text-sm font-semibold"
                  style={{ color: accentColor }}
                >
                  view code
                </a>
                <a
                  href="https://kinoji.vercel.app"
                  className="text-sm font-semibold"
                  style={{ color: accentColor }}
                >
                  demo
                </a>
                <a
                  href="https://medium.com/@vedanthanekar45/making-a-film-data-visualizing-platform-using-etl-fastapi-svelte-and-digitalocean-f1cb23fcfb81"
                  className="text-sm font-semibold"
                  style={{ color: accentColor }}
                >
                  blog
                </a>
              </div>
            </div>

            <div className="group">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="text-3xl font-light lowercase">flow.js</h4>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-400">
                  stack: javascript, three.js
                </p>
              </div>
              <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                a javascript library built on top of three.js that abstracts and
                simplifies 3D rendering pipelines on browsers.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/AshutoshKhadse23/flow-js"
                  className="text-sm font-semibold"
                  style={{ color: accentColor }}
                >
                  view code
                </a>
                <Link
                  href="https://flowjs3d.vercel.app"
                  className="text-sm font-semibold"
                  style={{ color: accentColor }}
                >
                  website
                </Link>
              </div>
            </div>

            <div className="group">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="text-3xl font-light lowercase">novel nest</h4>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-400">
                  stack: react, django, postgresql
                </p>
              </div>
              <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                a full-stack book cataloging platform where users can track,
                review, and organize their reading lists.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/vedanthanekar45/NovelNest"
                  className="text-sm font-semibold"
                  style={{ color: accentColor }}
                >
                  view code
                </a>
                <Link
                  href="https://novlnest-tr48.onrender.com"
                  className="text-sm font-semibold"
                  style={{ color: accentColor }}
                >
                  demo
                </Link>
              </div>
            </div>

            <div className="group">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="text-3xl font-light lowercase">booktalk</h4>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-400">
                  stack: mongodb, express, react, node.js
                </p>
              </div>
              <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                a minimalistic chat application using websockets.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/vedanthanekar45/BookTok"
                  className="text-sm font-semibold"
                  style={{ color: accentColor }}
                >
                  view code
                </a>
                <Link
                  href="https://booktalk-66lw.onrender.com"
                  className="text-sm font-semibold"
                  style={{ color: accentColor }}
                >
                  demo
                </Link>
              </div>
            </div>

            <div className="group">
              <h4 className="text-3xl font-light lowercase">ferry</h4>
              <div>
                <p className="text-sm font-semibold text-gray-400">
                  stack: golang, net/http
                </p>
              </div>
              <p className="text-sm text-gray-400 mb-2 line-clamp-2">
                context transfer engine for AI workflows written in Go.
              </p>
              <div className="flex gap-4">
                <span
                  className="text-sm font-semibold opacity-60"
                  style={{ color: accentColor }}
                >
                  in development
                </span>
                <Link
                  href="https://github.com/vedanthanekar45/ferry"
                  className="text-sm font-semibold"
                  style={{ color: accentColor }}
                >
                  view code
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* === VIEW 4: EDUCATION === */}
        {activeTab === "education" && (
          <div className="flex flex-col gap-9 animate-fade-in">
            <div className="group">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="text-3xl font-light lowercase">
                  bachelors (B.Tech)
                </h4>
                <GraduationCap className="w-5 h-5 opacity-60" />
              </div>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: accentColor }}
              >
                Information Technology
              </p>
              <p className="text-sm text-gray-400 mb-2">
                Nov 2022 - June 2026 (expected)
              </p>
              <p className="text-sm text-gray-500 leading-snug lowercase">
                Focused on Computer Networks, Database Management Systems, and
                Object-Oriented Programming.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 w-full bg-[#1F1F1F] h-16 flex items-center justify-center border-t border-gray-800 z-50">
        <button
          onClick={onClose}
          className="flex flex-col items-center justify-center w-10 h-10 rounded-full border-2 border-white opacity-80 active:bg-white active:text-black transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div className="w-10 h-10" />
      </div>
    </div>
  );
}
