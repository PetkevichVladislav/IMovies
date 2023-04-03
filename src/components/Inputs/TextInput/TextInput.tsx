import { FC, useState } from "react";

import "./TextInput.scss";
import "../Input.scss";

export interface ITextInput{
    placeholder: string;
    initialValue?: string;
    height?: string;
    name?: string;
}

export const TextInput : FC<ITextInput> = ({placeholder, initialValue = "", height, name}) => {
    const [value, setValue] = useState<string>(initialValue);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    
    return (
        <>
            <input style={{height:`${height}`}} 
            className="input text-input" 
            name={name} 
            placeholder={placeholder} 
            onChange={handleChange} 
            value={value}
            data-testid="text-input"/>
        </>
    )
}