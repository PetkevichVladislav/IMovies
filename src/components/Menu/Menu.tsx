import "./Menu.scss"

import List from "../List/List";
import { useCallback, useState } from "react";

const Menu = () => {
    const [itemNames, setItemNames] = useState<string[]>(["Action", "Adventure", "Comedy", "Drama", "Sci-Fi", "Thriller", "Western"]);
    const [preselectedItemName, setSelectedItemName] = useState<string>("Sci-Fi");
    const onSelect = useCallback((query: string) => { console.log(query); }, [])
    
    return (
        <menu className="menu">
            <div className="sorting">
                <List itemNames={itemNames}
                    preselectedItemName={preselectedItemName}
                    onSelect={onSelect} />
                <div className="options">
                    <p className="options__text options__text--sorting">SORT BY</p>
                    <p className="options__text options__text--sorting-option">RELEASE DATE</p>
                    <span className="icon-arrow-down"></span>
                </div>
            </div>
            <hr className="menu__line--bold" />
            <hr className="menu__line--thin" />
        </menu>
    );
}

export default Menu;
