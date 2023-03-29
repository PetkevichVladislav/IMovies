import { FC, ReactNode } from "react"
import Logo from "../../Logo/Logo";
import "./ModalBase.scss"

interface IModelBase {
    title?: string;
    onClose: () => void;
    children?: ReactNode;
}

export const ModelBase: FC<IModelBase> = ({title , children, onClose}) => {
    return (
        <div className="modal-base">
            <div className="modal-base__logo">
                <Logo/>
            </div>
            <div className="modal-base__window-container">
                <div className="modal-base__window">
                <span className="modal-base__close-element icon-close" onClick={onClose}></span> 
                    {title && <p className="modal-base__heading">{title}</p>}
                    <div className="modal-base__children-container">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}