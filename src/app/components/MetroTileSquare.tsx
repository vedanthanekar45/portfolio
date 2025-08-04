'use client'

type MetroTileProps = {
    bgColor: string;
    iconSrc?: string;
    text: string;
    link: string;
    className?: string;
}

export default function MetroTileSquare({ bgColor, iconSrc, text, link, className }: MetroTileProps) {

    const tileStyle = {
        backgroundColor: bgColor,
    };

    return (
        <a href={link} target="_blank">
            <div className={`relative w-52 h-52 mt-2 flex flex-col justify-between
            border-2 border-transparent transition-all duration-200 ease-in-out hover:border-white hover:shadow-[0_0_5px_rgba(255,255,255,0.4)] ${className}`}
            style={tileStyle}>
                <div className="h-full flex items-center justify-center">
                    <img src={iconSrc} className="w-12 h-12"></img>
                    <div className="absolute bottom-2 left-3 text-white text-xl font-light">
                        <h2 className="text-white segoe font-light">{text}</h2>
                    </div>
                </div>
            </div>
        </a>
    )
}