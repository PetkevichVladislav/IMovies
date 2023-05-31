import { FC } from "react";

import "./CheckBoxInput.scss";
import "../Input.scss";

export interface ICheckBoxInput {
    label: string;
    isChecked?: boolean;
    onChange: (event : React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBoxInput: FC<ICheckBoxInput> = ({ isChecked = false, label, onChange }) => {
    return (
        <label className="checkbox-input__container" data-testid="checkbox-container">{label}
            <input className="checkbox-input__input"
                key={label.replace(" ", "-").toLowerCase()}
                value={label}
                type="checkbox"
                checked={isChecked}
                onChange={event => onChange(event)}
                data-testid="checkbox-input" />
            <span className="checkbox-input__checkmark"></span>
        </label>
    )
}