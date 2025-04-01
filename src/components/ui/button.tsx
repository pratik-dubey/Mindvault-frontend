import React from "react";
export interface ButtonProps {
    variant: "primary" | "secondary";
    text: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    onClick?: () => void;
    size: "md" | "lg" | "sm";
    fullWidth?: boolean;
    loading?: boolean
}

export const Button: React.FC<ButtonProps> = ({ variant, text, startIcon, endIcon, onClick, size, fullWidth, loading }) => {
    // items-center is used in tailwind to align items vertically and justify-center is used to align them horizontally
    const baseClasses = "px-4 py-2 font-semibold rounded-md font-normal flex items-center";
const variantClasses = variant === "primary" ? "bg-blue-300 text-blue-600" : "bg-blue-600 text-white";
    const sizeClasses = size === "lg" ? "text-lg" : size === "md" ? "text-md" : "text-sm";

    return (
        <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${sizeClasses} ${fullWidth ? " w-full flex justify-center items-center": ""}`} disabled={loading}>
            {startIcon && <span className="mr-2">{startIcon}</span>}
            {text}
            {endIcon && <span className="ml-2">{endIcon}</span>}
        </button>
    );
};


// const variants = {
//     "primary": "bg-blue-300 text-blue-500",
//     "secondary": "bg-blue-600 text-white"
// }
// const defaultStyles = "rounded-md p-4"
// const sizes = {
//     "sm": "p-2",
//     "md": "p-4",
//     "lg": "p-6"
// }
// export const Button = (props: ButtonProps) => {
//     return (
//         <button className={`${variants[props.variant]} ${defaultStyles} ${sizes}`}>
//             {props.text}
//         </button>
//     )
// }