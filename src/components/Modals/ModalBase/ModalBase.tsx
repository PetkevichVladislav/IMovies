import "./ModalBase.scss"

import { CSSProperties, FC, ReactNode } from "react"
import Logo from "../../Logo/Logo";
import { ModalPortal } from "../ModalPortal/ModalPortal";
import FocusTrap from "focus-trap-react";

export interface ModalBaseStyling {
    headingPosition?: string;
    contentPosition?: string;
}

export interface IModelBase {
    title?: string;
    isOpened: boolean;
    onClose: () => void;
    children?: ReactNode;
    style?: ModalBaseStyling;
}

const defaultStyling: ModalBaseStyling = {
    headingPosition: "flex-start",
    contentPosition: "flex-start",
}

export const ModelBase: FC<IModelBase> = ({ title, children, onClose, isOpened, style = defaultStyling }) => {
    const headingStyle: CSSProperties = style.headingPosition === "center" 
    ? { marginLeft: "0px", justifyContent: style.headingPosition } 
    : { justifyContent: style.headingPosition };

    return (
        <>
            {isOpened &&
                <ModalPortal>
                    <FocusTrap>
                        <div className="modal-base">
                            <div className="modal-base__logo">
                                <Logo />
                            </div>
                            <div className="modal-base__window-container">
                                <div className="modal-base__window">
                                    <span className="modal-base__close-element icon-close" tabIndex={0} onClick={onClose}></span>
                                    {title && <p className="modal-base__heading" style={headingStyle}>{title}</p>}
                                    <div className="modal-base__children-container" style={{ justifyContent: style.contentPosition }}>
                                        {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FocusTrap>
                </ModalPortal>
            }
        </>
    );
}