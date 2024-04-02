import { CiFacebook } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { TiSocialGithub } from "react-icons/ti";



export const SocialIcons = () => {
    return (
        <div className="text-[gray] text-2xl flex gap-6 ml-2 md:ml-8 items-center">
        <CiFacebook/>
        <RiLinkedinLine className="text-2xl outline outline-[1px] rounded-full outline-[gray] p-1"/>
        <TiSocialGithub className="text-2xl outline outline-[1px] rounded-full outline-[gray] p-[1px]"/>
         </div>
    );
};

