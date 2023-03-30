import { FC } from "react";
import { Button } from "../../Button/Button";
import { ModelBase } from "../ModalBase/ModalBase";
import "./ConfirmationModal.scss";

export interface IConfirmModal{
    onConfirm: () => void;
    onClose: () => void;
    isOpened: boolean;
    title?: string;
    children?: string;
}

export const ConfirmationModal : FC<IConfirmModal> = ({onClose, onConfirm, title, isOpened, children}) => {
    return (
        <>
            <ModelBase isOpened={isOpened} title={title} onClose={onClose}>
                <p className="confirmation-modal__text">{children}</p>
                <div className="confirmation-modal__confirm-button-container">
                    <Button isPrimary={true} text="confirm" onClick={onConfirm}></Button>
                </div> 
            </ModelBase>
        </>
    );
}