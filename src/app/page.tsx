'use client';
import style from './home.module.css'
import { inter } from '@/ui/fonts'
import { useEffect, useState } from "react";
// import { BsGithub } from "react-icons/bs";
// import Link from 'next/link'
import { greetings } from '@/ui/hello';

export default function Home() {

    const [idx, setIdx] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prevIndex) => {
        return (prevIndex + 1) % greetings.length;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

    return (
        <body className={style.body}>
            <div className="flex justify-center mt-36">
                <h1 className={`${inter.className} font-bold text-4xl text-white`}>
                    {greetings[idx]}, I'm Vedant Thanekar
                </h1>
            </div>
        </body>
    );
}
