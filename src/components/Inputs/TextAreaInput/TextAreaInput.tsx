import { FC, useState } from "react";

import "./TextAreaInput.scss";
import "../Input.scss";

export interface ITextAreaInput{
    placeholder: string;
    initialValue?: string;
    height?: string;
    name?: string;
}

export const TextAreaInput : FC<ITextAreaInput> = ({placeholder, initialValue = "", height, name}) => {
    const [value, setValue] = useState<string>(initialValue);
    
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };
    
    return (
        <>
            <textarea style={{height:`${height}`}} 
            className="input text-area-input" 
            name={name} 
            placeholder={placeholder} 
            onChange={handleChange} 
            value={value}
            data-testid="text-area-input"/>
        </>
    )
}