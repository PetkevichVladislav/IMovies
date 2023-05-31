import "./InformationModal.scss";

import { FC } from "react";
import { ModalBaseStyling, ModelBase } from "../ModalBase/ModalBase";

export interface IInformationModal {
    onClose: () => void;
    isOpened: boolean;
    title?: string;
    children?: string;
}

export const InformationModal: FC<IInformationModal> = ({ onClose, title, isOpened, children }) => {
    const baseModelStyle : ModalBaseStyling = {
        contentPosition: "center",
        headingPosition: "center",
    }

    return (
        <>
            <ModelBase isOpened={isOpened} title={title} onClose={onClose} style={baseModelStyle}>
                <p className="information-modal__text">{children}</p>
            </ModelBase>
        </>
    );
}