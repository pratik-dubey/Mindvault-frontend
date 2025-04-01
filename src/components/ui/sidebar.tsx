import { TwitterIcon } from "../../icons/twitterIcon"
import { YoutubeIcon } from "../../icons/youtubeIcon"
import { SideBarItems } from "./sidebarItems"
import { Logo } from "../../icons/logo"
export const SideBar = () => {
    return (
        <div className="h-screen w-72 bg-white border-r-4 border-r-black-800 pl-6 fixed top-0 left-0">
            <div className="flex text-2xl pt-7">
                <div className="text-blue-600 pr-3">
                    <Logo />
                </div>
                MindVault
            </div>
            <div className="pt-8 pl-3">
                 <SideBarItems text="Youtube" icon={<YoutubeIcon />} />
                 <SideBarItems text="Twitter" icon={<TwitterIcon />} />
           </div>
        </div>
    )
}