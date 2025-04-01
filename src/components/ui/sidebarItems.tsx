import { ReactElement } from "react";

export function SideBarItems({ text, icon }: {
    text: string; 
    icon: ReactElement
}) {
    return (
        <div className="flex text-gray-700 mb-4 py-2 cursor-pointer hover:bg-gray-300 rounded max-w-48 pl-4">
            <div className="">
                {icon}
            </div>
            <div className="pl-4">
                {text}
            </div>
        </div>
    )
}