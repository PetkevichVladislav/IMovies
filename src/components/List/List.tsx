import "./List.scss";

import { FC, useState } from "react";

const selectedItemClassName = "list__item list__item--selected";
const unselectedItemClassName = "list__item";

interface IGenreListProps {
    itemNames: string[],
    preselectedItemName: string,
    onSelect: (itemName: string) => void,
}

const List: FC<IGenreListProps> = ({ itemNames, preselectedItemName, onSelect }) => {
    const [selectedItemName, setSelectedItemName] = useState<string>(preselectedItemName);
    const listItems = itemNames.map((itemName) => {
        const className = itemName === selectedItemName ? selectedItemClassName : unselectedItemClassName;
        return <li key={itemName} className={className} onClick={() => selectItem(itemName)}>{itemName}</li>;
    });

    const selectItem = (itemName: string) => {
        setSelectedItemName(itemName);
        onSelect(itemName);
    }

    return (
        <ul className="list">
            {listItems}
        </ul>
    );
}

export default List;