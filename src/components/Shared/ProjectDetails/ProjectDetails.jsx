export const ProjectDetails = () => {
    return (
        <div className="bg-[#121212] min-h-screen flex flex-col items-center justify-center text-white p-4">
            <div className="flex items-center space-x-2 mb-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white h-6 w-6"
                >
                    <path d="M6 18h8" />
                    <path d="M3 22h18" />
                    <path d="M14 22a7 7 0 1 0 0-14h-1" />
                    <path d="M9 14h2" />
                    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
                    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
                </svg>
                <h1 className="text-4xl font-bold">Lyrify</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full ">
                <div
                    className="flex min-h-[80px] w-full text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-48 bg-[#1E1E1E] border border-[#333] p-4 rounded-md"
                    placeholder="Content"
                    defaultValue={""}
                >
                </div>
                
                <div
                    className="flex min-h-[80px] w-full text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-48 bg-[#1E1E1E] border border-[#333] p-4 rounded-md"
                    placeholder="Content"
                    defaultValue={""}
                >
                </div>
                
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-8">
                <div
                    className="rounded-lg text-card-foreground shadow-sm bg-[#1E1E1E] border border-[#333]"
                    data-v0-t="card"
                >
                    <div className="p-6">
                        <div className="h-24" />
                    </div>
                    <div className="flex items-center border-t border-[#333] p-4">
                        ChatGPT 3.5
                    </div>
                </div>
                <div
                    className="rounded-lg text-card-foreground shadow-sm bg-[#1E1E1E] border border-[#333]"
                    data-v0-t="card"
                >
                    <div className="p-6">
                        <div className="h-24" />
                    </div>
                    <div className="flex items-center border-t border-[#333] p-4">
                        Gemini Pro
                    </div>
                </div>
                <div
                    className="rounded-lg text-card-foreground shadow-sm bg-[#1E1E1E] border border-[#333]"
                    data-v0-t="card"
                >
                    <div className="p-6">
                        <div className="h-24" />
                    </div>
                    <div className="flex items-center border-t border-[#333] p-4">
                        Qwen Turbo
                    </div>
                </div>
                <div
                    className="rounded-lg text-card-foreground shadow-sm bg-[#1E1E1E] border border-[#333]"
                    data-v0-t="card"
                >
                    <div className="p-6">
                        <div className="h-24" />
                    </div>
                    <div className="flex items-center border-t border-[#333] p-4">
                        GLM 3 Turbo
                    </div>
                </div>
                <div
                    className="rounded-lg text-card-foreground shadow-sm bg-[#1E1E1E] border border-[#333]"
                    data-v0-t="card"
                >
                    <div className="p-6">
                        <div className="h-24" />
                    </div>
                    <div className="flex items-center border-t border-[#333] p-4">
                        DeepL X
                    </div>
                </div>
                <div
                    className="rounded-lg text-card-foreground shadow-sm bg-[#1E1E1E] border border-[#333]"
                    data-v0-t="card"
                >
                    <div className="p-6">
                        <div className="h-24" />
                    </div>
                    <div className="flex items-center border-t border-[#333] p-4">
                        Microsoft
                    </div>
                </div>
                <div
                    className="rounded-lg text-card-foreground shadow-sm bg-[#1E1E1E] border border-[#333]"
                    data-v0-t="card"
                >
                    <div className="p-6">
                        <div className="h-24" />
                    </div>
                    <div className="flex items-center border-t border-[#333] p-4">Google</div>
                </div>
                <div
                    className="rounded-lg text-card-foreground shadow-sm bg-[#1E1E1E] border border-[#333]"
                    data-v0-t="card"
                >
                    <div className="p-6">
                        <div className="h-24" />
                    </div>
                    <div className="flex items-center border-t border-[#333] p-4">
                        Transmart
                    </div>
                </div>
                <div
                    className="rounded-lg text-card-foreground shadow-sm bg-[#1E1E1E] border border-[#333]"
                    data-v0-t="card"
                >
                    <div className="p-6">
                        <div className="h-24" />
                    </div>
                    <div className="flex items-center border-t border-[#333] p-4">
                        NiuTrans
                    </div>
                </div>
            </div>
        </div>

    );
};
