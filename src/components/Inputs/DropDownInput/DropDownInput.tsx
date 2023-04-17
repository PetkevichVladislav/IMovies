import "../Input.scss";
import "./DropDownInput.scss";

import { FC, ReactNode, useState } from "react";

export interface IDropDownInput {
    placeholder: string;
    children?: ReactNode;
}

export const DropDownInput: FC<IDropDownInput> = ({ placeholder, children }) => {
    const [isExpanded, setIsDropDownExpanded] = useState<boolean>(false);

    const onDropDownClicked = () => {
        setIsDropDownExpanded(!isExpanded);
    };

    return (
        <div className="drop-down-input">
            <div className="drop-down-input__select-container" onClick={onDropDownClicked} data-testid="drop-down-container">
                <select className="input drop-down-input__select">
                    <option>{placeholder}</option>
                </select>
                <span className={`drop-down-input__appearance icon-arrow-down ${isExpanded ? "rotated" : ""}`}></span>
                <div className="drop-down-input__content-container"></div>
            </div>
            {isExpanded &&
                <div className="drop-down-input__content" data-testid="drop-down-content">
                    {children}
                </div>
            }
        </div>
    )
}


