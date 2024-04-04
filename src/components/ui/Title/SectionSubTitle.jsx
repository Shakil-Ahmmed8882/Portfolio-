export const SectionSubTitle = ({ subtitle }) => {


    const subTitleArray = subtitle?.split(' ')
    return (
        <div className="text-[32px] mt-4 font-bold font-[Caveat]"> {subTitleArray.length > 0 ? <>
            <span className="text-gradient">{subTitleArray[0]}</span>
            <span className="ml-3 text-[#8f8f8f]">{subTitleArray[1]}</span>
        </> : <span className="text-gradient">{subTitleArray[0]}</span>}</div>
    );
};

