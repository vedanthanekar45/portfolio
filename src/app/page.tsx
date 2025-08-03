'use client';
import MetroTile from './components/MetroTile';
import MetroTileSquare from './components/MetroTileSquare';

export default function Home() {

    return (
        <>
            <div className="flex justify-between items-center pb-16">
                <h1 className="segoe text-5xl ml-40 mt-16 text-white">Start</h1>
                <div className="mt-20 mr-20 flex">
                    <h2 className="segoe text-white text-3xl mr-6">Vedant Thanekar</h2>
                    <img src="/photo.jpeg" className="w-10 h-10
                    border-2 border-transparent transition-all duration-200 ease-in-out hover:border-white hover:shadow-[0_0_5px_rgba(255,255,255,0.4)]" />
                </div>
            </div>

            <div className='flex mx-40'>
                <div>
                    <MetroTile bgColor="#06777a" iconSrc="/mail.png" text="Mail" link="mailto:vedanthanekar45@gmail.com" />
                    <MetroTile bgColor="#cc4a04" iconSrc="/about.png" text="About" link="#" />
                    <MetroTile bgColor="#006912ff" iconSrc="/resume.png" text="Resume" link="#" />
                </div>
                <div>
                    <div className="flex">
                        <MetroTileSquare bgColor="#00527eff" iconSrc="./linkedin.svg" text="LinkedIn" link="https://www.linkedin.com/in/vedant-thanekar/" />
                        <MetroTileSquare bgColor="#00001dff" iconSrc="/github.png" text="Github" link="https://www.github.com/vedanthanekar45" />
                    </div>    
                    <div className="flex">
                        <MetroTileSquare bgColor="#01ad09ff" iconSrc="./spotify.png" text="Spotify" link="https://open.spotify.com/user/t80raipjue8g40p5c6zd1490z?si=39P2j1UIR5Wvb6n9Yd2Riw" />
                        <MetroTileSquare bgColor="#0c0c0cff" iconSrc="/x.svg" text="Twitter" link="https://x.com/ThanekarVedant" />
                    </div>
                    <div>
                        <MetroTile bgColor="#0065fdff" iconSrc="/code.png" text="Projects" link="#" className="ml-2 w-full"/>
                    </div>
                </div>
            </div>

        </>
    )
}