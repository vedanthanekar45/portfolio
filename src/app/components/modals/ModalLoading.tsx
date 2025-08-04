type ModalLoadingProps = {
    bgColor: string;
    iconSrc: string;
}

export default function ModalLoading({bgColor, iconSrc}: ModalLoadingProps) {

    const tileStyle = {
        backgroundColor: bgColor,
    };

    return (
        <div className="w-full h-full" style={tileStyle}>
            <img src={iconSrc} className="flex items-center justify-center" />
        </div>
    )
}