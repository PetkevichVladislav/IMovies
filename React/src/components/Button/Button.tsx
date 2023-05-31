import "./Button.scss"

import { FC } from "react";

interface IButton{
    isPrimary: boolean;
    text:string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

export const Button : FC<IButton> = ({isPrimary, text, onClick, type}) => {
    return (
        <>
            <button type={type} className={`button button--${isPrimary ? "primary" : "secondary"}`} onClick={onClick}>{text}</button>
        </>
    )
}