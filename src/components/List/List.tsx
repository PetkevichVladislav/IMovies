import "./List.scss";

import { FC, useState } from "react";

const selectedItemClassName = "list__item list__item--selected";
const unselectedItemClassName = "list__item";

interface IGenreListProps {
    itemNames: string[],
    preselectedItemName: string,
    onSelect: (itemName: string) => void,
    selectedItemColor?: string,
}

export const List: FC<IGenreListProps> = ({ itemNames, preselectedItemName, onSelect, selectedItemColor}) => {
    const [selectedItemName, setSelectedItemName] = useState<string>(preselectedItemName);
    const listItems = itemNames.map((itemName) => {
        const className = itemName === selectedItemName ? selectedItemClassName : unselectedItemClassName;
        return <li key={itemName} className={className} onClick={() => selectItem(itemName)}>{itemName}</li>;
    });

    const selectItem = (itemName: string) => {
        setSelectedItemName(itemName);
        onSelect(itemName);
    }

    const listClassNames : string[] = ["list"];
    if(selectedItemColor != null) {
        listClassNames.push(selectedItemColor);
    }
    return (
        <ul className={listClassNames.join(" ")}>
            {listItems}
        </ul>
    );
}

export default List;