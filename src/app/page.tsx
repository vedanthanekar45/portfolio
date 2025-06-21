'use client';
import style from './home.module.css'
import { inter, bentham } from '@/ui/fonts'
import { GiFallingStar } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import Link from 'next/link'

export default function Home() {
    return (
        <body className={style.body}>
            
            {/* Navbar Div */}
            <div className={`${bentham.className} flex ml-10 font-bold `}>
                <Link href="/" className='flex'>
                    <GiFallingStar className="text-white text-5xl mt-4 mr-4" />
                    <p className="mt-7 text-4xl text-white">
                        StarStruck
                    </p>
                </Link>
                <Link href="https://github.com/vedanthanekar45/starstruck">
                    <BsGithub className="text-white text-4xl mt-8 ml-[1550px] opacity-50 hover:opacity-100" />
                </Link>
            </div>

            {/* Body Div */}  
            <div className={`${inter.className} flex flex-col items-center 
            justify-center text-7xl text-white font-black h-[85vh]`}>
                <h1 className="text-center">Where every star holds a story, <br></br> waiting to be found</h1>
                <button className="mt-10 border h-16 border-slate-300 py-2 px-10 text-center text-xl 
                transition-all shadow-sm hover:shadow-lg text-white hover:text-white 
                hover:bg-black hover:border-black focus:text-white focus:bg-slate-800 
                focus:border-slate-800 active:border-slate-800 active:text-white 
                active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 
                disabled:shadow-none" type="button">
                    Join the Community
                </button>
            </div>

            <footer>
                <div className={`${inter.className} flex justify-center items-center h-16 text-white`}>
                    <p>Photo by Matthew Ansley @ Unsplash</p>
                </div>
            </footer>
        </body>
    );
}
