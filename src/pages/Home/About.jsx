
import Container from "../../components/Shared/Container";
import { Description } from "../../components/Shared/Title&Description/Description";
import { Heading } from "../../components/Shared/Title&Description/Heading";
import { SocialIcons } from "../../components/ui/SocialIcons/SocialIcons";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import { Squarelines } from "../../components/ui/Lines/Squarelines";

export const About = () => {
    const { about, isLoading } = usePortfolioData();


    if (isLoading) return null;

    const { name, title, subTitle, description, quote, exp_year, address, some_total, phoneNumber, contactEmail, avatar, alternateAvatars } = about;

    return (
        <Container>
            <div className="flex justify-between flex-wrap gap-16 -z-50">
                <div className="flex-1 min-w-200px mt-5 md:mt-11">
                    <Heading>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-5">Let's create something <br /> amazing together.</h1>
                    </Heading>
                    <Description className="description" text={description.slice(0, 147)} />
                    <div className="mt-11 md:mt-14 md:flex gap-6">
                        <button className="button text-sm md:text-base w-2/3 mb-11 md:mb-0 md:w-1/3 bg-[#2C5DEC] rounded-full p-2 sm:p-3 md:p-4 text-[white] hover:bg-primary-color/90 ">Download CV</button>
                        <SocialIcons />
                    </div>
                </div>
                <div className="w-1/3 hidden lg:block">
                    <div className="aspect-w-1 aspect-h-1 md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px]">
                        <img src={avatar?.url} className=" object-cover w-full h-full rounded-full border-2" alt="" />
                    </div>
                </div>
            </div>
            <Squarelines />
        </Container>
    )
}