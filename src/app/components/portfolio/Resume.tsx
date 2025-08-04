export default function Resume() {
    return (
        <div>
            <a href="/resume.pdf" target="_blank" download>
                <div className="bg-[#0078d7] px-4 py-[5px] w-[118px]">
                    <h1 className="segoe text-xl text-white">Download</h1>
                </div>
            </a>
            <iframe
                src="/resume.pdf"
                className="w-full h-[800px] border mt-10 border-gray-300"
            ></iframe>
        </div>
    )
}