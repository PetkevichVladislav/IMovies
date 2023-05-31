import { FC, useState } from "react";

import "./TextAreaInput.scss";
import "../Input.scss";

export interface ITextAreaInput{
    placeholder: string;
    value?: string;
    height?: string;
    name?: string;
    onChange?: (value: string) => void;
}

export const TextAreaInput : FC<ITextAreaInput> = ({placeholder, value = "", height, name, onChange}) => {    
    return (
        <>
            <textarea style={{height:`${height}`}} 
            className="input text-area-input" 
            name={name} 
            placeholder={placeholder} 
            value={value}
            data-testid="text-area-input"
            onChange={event => onChange && onChange(event.target.value)}/>
        </>
    )
}