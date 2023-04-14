import { FC, useCallback, useState } from "react";

import "./CheckBoxInput.scss";
import "../Input.scss";

export interface ICheckBoxInput {
    label: string;
    defaultChecked?: boolean;
    name?: string;
    onChange: (isChecked: boolean) => void;
}

export const CheckBoxInput: FC<ICheckBoxInput> = ({defaultChecked = false, label, onChange, name}) => {
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

    const onChanged = useCallback(() => {
        setIsChecked(!isChecked);
        onChange(!isChecked);
    }, [onChange, isChecked, setIsChecked]);

    return (
        <>
            <label className="checkbox-input__container" defaultChecked={isChecked} onChange={onChanged} data-testid="checkbox-container">{label}
                <input className="checkbox-input__input" name={name} type="checkbox" checked={isChecked} data-testid="checkbox-input"/>
                <span className="checkbox-input__checkmark"></span>
            </label>
        </>
    )
}