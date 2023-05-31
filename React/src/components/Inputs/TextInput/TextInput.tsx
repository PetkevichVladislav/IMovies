import { FC, useState } from "react";

import "./TextInput.scss";
import "../Input.scss";

export interface ITextInput{
    placeholder: string;
    value?: string;
    height?: string;
    name?: string;  
    onChange?: (changedVlaue?: string) => void;
}

export const TextInput : FC<ITextInput> = ({placeholder, value = "", height, name, onChange}) => {
    return (
        <>
            <input style={{height:`${height}`}} 
            className="input text-input" 
            name={name} 
            placeholder={placeholder} 
            value={value}
            onChange={event => onChange && onChange(event.target.value)}
            data-testid="text-input"/>
        </>
    )
}