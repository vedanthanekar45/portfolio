"use client";

import { useEffect, useRef } from "react";

const BackgroundSound = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize the audio object on the client side
    audioRef.current = new Audio("/back_sound.mp3");

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Do not play sound if the click is on an interactive element.
      // This checks for links, buttons, elements with a button role, the specific profile photo,
      // or any element that has an onClick handler attached.
      if (
        target.closest(
          'a, button, [role="button"], img[alt="my photo"], .modal-container',
        ) ||
        typeof target.onclick === "function"
      ) {
        return;
      }

      // If the click is not on an excluded element, play the sound.
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch((error) => {
          // Autoplay was prevented by browser policies.
          // This is expected if the user hasn't interacted with the page yet.
          console.error("Audio play failed:", error);
        });
      }
    };

    window.addEventListener("click", handleClick);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return null; // This component does not render anything
};

export default BackgroundSound;
