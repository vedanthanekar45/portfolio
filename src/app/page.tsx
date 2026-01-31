"use client";
import { motion, TargetAndTransition } from "framer-motion";
import MetroTile from "./components/MetroTile";
import MetroTileSquare from "./components/MetroTileSquare";
import SettingsModal from "./components/modals/SettingsModal";
import { useState } from "react";

export default function Home() {
  type CustomVariants = {
    hidden: TargetAndTransition;
    visible: (delay: number) => TargetAndTransition;
  };

  const tileColumnVariants: CustomVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (delay: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay,
        duration: 0.4,
        ease: [0.34, 1.56, 0.64, 1],
      },
    }),
  };

  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [initialSection, setInitialSection] = useState("About");

  return (
    <>
      <div>
        <motion.h1
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut", delay: 0.2 }}
          className="segoe text-5xl text-white"
        >
          <div className="flex justify-between items-center pb-16">
            <h1 className="segoe text-5xl ml-40 mt-16 text-white">Start</h1>
            <div className="mt-20 mr-20 flex">
              <h2 className="segoe text-white text-3xl mr-6">
                Vedant Thanekar
              </h2>
              <img
                alt="my photo"
                src="/photo.jpg"
                className="w-10 h-10 border-2 border-transparent transition-all duration-200 ease-in-out hover:border-white hover:shadow-[0_0_5px_rgba(255,255,255,0.4)]"
                onClick={() => {
                  setSettingsOpen(true);
                  setInitialSection("About");
                }}
              />
            </div>
          </div>
        </motion.h1>

        <div className="flex mx-40">
          <motion.div
            custom={0.3}
            initial="hidden"
            animate="visible"
            variants={tileColumnVariants}
          >
            <MetroTile
              bgColor="#06777a"
              iconSrc="/mail.png"
              text="Mail"
              link="mailto:vedanthanekar45@gmail.com"
            />
            <MetroTile
              bgColor="#cc4a04"
              iconSrc="/about.png"
              text="About"
              onClick={() => {
                setSettingsOpen(true);
                setInitialSection("About");
              }}
            />
            <MetroTile
              bgColor="#006912ff"
              iconSrc="/resume.png"
              text="Resume"
              onClick={() => {
                setSettingsOpen(true);
                setInitialSection("Resume");
              }}
            />
          </motion.div>

          <motion.div
            custom={0.4}
            variants={tileColumnVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="flex">
              <MetroTileSquare
                bgColor="#00527eff"
                iconSrc="./linkedin.svg"
                text="LinkedIn"
                link="https://www.linkedin.com/in/vedant-thanekar/"
                className="ml-2"
              />
              <MetroTileSquare
                bgColor="#00001dff"
                iconSrc="/github.png"
                text="Github"
                link="https://www.github.com/vedanthanekar45"
                className="ml-2"
              />
            </div>
            <div className="flex">
              <MetroTileSquare
                bgColor="#0c0c0cff"
                iconSrc="/x.svg"
                text="Twitter"
                link="https://x.com/ThanekarVedant"
                className="ml-2"
              />
              <MetroTileSquare
                bgColor="#01ad09ff"
                iconSrc="./spotify.png"
                text="Spotify"
                link="https://open.spotify.com/user/t80raipjue8g40p5c6zd1490z?si=39P2j1UIR5Wvb6n9Yd2Riw"
                className="ml-2"
              />
            </div>
            <div>
              <MetroTile
                bgColor="#e90101ff"
                iconSrc="/code.png"
                text="Projects"
                className="ml-2 w-[425px]"
                onClick={() => {
                  setSettingsOpen(true);
                  setInitialSection("Projects");
                }}
              />
            </div>
          </motion.div>

          <motion.div
            className="ml-96"
            custom={0.5}
            variants={tileColumnVariants}
            initial="hidden"
            animate="visible"
          >
            <MetroTile
              bgColor="#d86800ff"
              iconSrc="/blog.svg"
              text="Blogs and Stories"
              link="https://medium.com/@vedanthanekar45"
              target="_blank"
            />
            <MetroTile
              bgColor="#7a00aaff"
              iconSrc="/resume.png"
              text="Screenplays"
              link="/blogs"
            />
            <MetroTileSquare
              bgColor="#008299ff"
              iconSrc="/photos.png"
              text="Photos"
              link="https://www.instagram.com/vedanthanekar/"
            />
          </motion.div>
        </div>
        <SettingsModal
          isOpen={isSettingsOpen}
          onClose={() => setSettingsOpen(false)}
          initialSection={initialSection}
        />
      </div>
    </>
  );
}
