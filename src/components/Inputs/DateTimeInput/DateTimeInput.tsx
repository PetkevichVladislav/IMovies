import { FC, useState } from "react";

import "../Input.scss";

export interface IDateTimeInput {
    initialValue?: string;
    name?: string;
}

export const DateTimeInput: FC<IDateTimeInput> = ({ initialValue, name }) => {
    const [date, setDate] = useState<string|undefined>(initialValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    };

    return (
        <>
            <input className="input" type="date" name={name} onChange={handleChange} value={date}/>
        </>
    )
}