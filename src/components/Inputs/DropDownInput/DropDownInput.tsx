import { FC, ReactNode, useEffect, useMemo, useState } from "react";

import "./DropDownInput.scss";
import "../Input.scss";
import React from "react";
import { transform } from "typescript";

export interface IDropDownInput {
    placeholder: string;
    children?: ReactNode;
}

export const DropDownInput: FC<IDropDownInput> = ({ placeholder, children}) => {
    const [isExpanded, setIsDropDownExpanded] = useState(false);

    const onDropDownClicked = () => {
        setIsDropDownExpanded(!isExpanded);
    };

    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //         ["drop-down-input__content", 'drop-down-input__content']
    //         const a = (event.target as Element).className === ;
    //         console.log((event.target as Element).className);
    //         if (isExpanded && !a) {
    //             setIsDropDownExpanded(false);
    //         }
    //     };

    //     document.addEventListener('click', (event) => handleClickOutside(event), true);
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside, true);
    //     };
    // }, [isExpanded, setIsDropDownExpanded]);
    
    return (
        <>
            <div className="drop-down-input__select-container" onClick={onDropDownClicked}>
                <select className="input drop-down-input__select">
                    <option>{placeholder}</option>
                </select>
                <span className={`drop-down-input__appearance icon-arrow-down ${isExpanded ? "rotated": ""}`}></span>
                <div className="drop-down-input__content-container"></div>
            </div>
            {isExpanded &&
                <div className="drop-down-input__content">
                    {children}
                </div>
            }
        </>
    )
}


