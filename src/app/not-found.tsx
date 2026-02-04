"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 6000);

    const progressInterval = setInterval(() => {
      setPercentage((prev) => (prev < 100 ? prev + 20 : 100));
    }, 800);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0078D7] text-white font-sans p-8 md:pt-32 md:pl-48 cursor-none select-none">
      <div className="text-[9rem] md:text-[10rem] leading-none mb-4 font-light">
        :(
      </div>

      <div className="text-xl md:text-3xl font-light leading-snug max-w-6xl mb-10">
        <p className="mt-2">Oops. You found a page I haven&apos;t built yet.</p>
        <p className="mt-2">
          I was going to do it, but I started a new side project instead.
        </p>
        <p className="mt-2">Redirecting you back. Hang tight..</p>
      </div>

      <div className="text-xl md:text-3xl font-light mb-10">
        {percentage}% complete
      </div>

      <div className="flex flex-row items-start gap-4">
        <div className="bg-white p-2 w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://github.com/vedanthanekar45&color=0078D7`}
            alt="QR Code"
            className="w-full h-full"
          />
        </div>

        <div className="text-sm md:text-base font-light space-y-1 mt-1">
          <p>
            For more information about this issue and possible fixes, send an
            email to: vedanthanekar45@gmail.com
          </p>
          <p className="mt-4">
            If you call a support person, give them this info:
          </p>
          <p className="font-medium">Stop code: YUP_ITS_WORKING_AS_DESIGNED</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
