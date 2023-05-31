import { FC, useState } from "react";

import "../Input.scss";
import "./DateTimeInput.scss";

export interface IDateTimeInput {
    value?: string;
    name?: string;
    onChange?: (value: string) => void;
}

export const DateTimeInput: FC<IDateTimeInput> = ({ value, name, onChange }) => {
    return (
        <>
            <input className="input date-time-input" 
            type="date" 
            name={name} 
            value={value} 
            data-testid="date-time-input"
            onChange={event => onChange && onChange(event.target.value)}/>
        </>
    )
}