import { FC, ReactNode } from "react"
import "./TitledContainer.scss"

interface ITitledContainer {
    title: string;
    error?: string;
    children?: ReactNode;
}

export const TitledContainer: FC<ITitledContainer> = ({ title, children, error }) => {
    return (
        <div className="titled-container">
            <span className="titled-container__title">{title}</span>
            {children}
            <span className="titled-container__error">{error}</span>
        </div>
    );
}