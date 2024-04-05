export const RightTimeline = () => {
    return (
        <>

            <div className="bg-[red]" ></div>
            <div className="mb-8 timeline-card relative md:flex md:justify-between  w-full right-timeline">
                <div className="order-1 md:w-5/12" />
                <div className="z-10 md:z-20 flex items-center order-1
                          md:bg-primary-color shadow-xl absolute md:static -top-32
                         w-28 h-28 md:w-12 md:h-12 rounded-full">
                    <h1 className="mx-auto font-semibold text-lg text-white md:block hidden">1</h1>
                </div>
                <div className="order-1 relative z-10 bg-[#222325]  rounded-lg shadow-xl md:w-5/12 px-6 py-6">
                    <h3 className="mb-3 font-bold    text-[white] text-xl">Event Title</h3>
                    <p className="text-[white]   leading-tight">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
                        nisi commodo, aliquet velit ac, dapibus elit.
                    </p>
                </div>
            </div>

        </>
    );
};

