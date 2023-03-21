import "./PopupMenu.scss";

import { FC } from "react";

export interface MenuItem {
    onClick: () => void;
    menuItem: string;
}

export interface IDropDownMenu {
    menuItems: MenuItem[];
    onClose : () => void;
}

export const PopupMenu: FC<IDropDownMenu> = ({ menuItems, onClose }) => {
    const buttons = menuItems.map(({menuItem, onClick}) => {
        return <li className="drop-down-menu__item" onClick={onClick}>{menuItem}</li>
    })
    return (
        <div className="drop-down-menu" data-testid="drop-down-menu" onClick={(event) => event.stopPropagation()}>
            <p className="drop-down-menu__cross icon-close" onClick={onClose}></p>
            <ul className="drop-down-menu__item-container">
            {buttons}
            </ul>
        </div>
    )
}