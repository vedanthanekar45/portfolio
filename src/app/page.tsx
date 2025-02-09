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
            justify-center text-7xl text-white font-black h-[75vh]`}>
                <h1 className="text-center">Where every star holds a story, <br></br> waiting to be found</h1>
            </div>
        </body>
    );
}
