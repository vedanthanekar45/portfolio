import { useEffect } from 'react';

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const video = document.getElementById('boot-video') as HTMLVideoElement;

    // Always start fading in the homepage after a short delay
    const preloadTimeout = setTimeout(() => {
      onFinish();
    }, 300);

    if (video) {
      video.play();
    }

    // Cleanup the timeout just in case
    return () => {
      clearTimeout(preloadTimeout);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        id="boot-video"
        src="/load1.mp4"
        className="w-full h-full object-cover"
        muted
        playsInline
      />
    </div>
  );
}
