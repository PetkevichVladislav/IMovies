import "./List.scss";

import { FC, useState } from "react";

const selectedItemClassName = "list__item list__item--selected";
const unselectedItemClassName = "list__item";

interface IGenreListProps {
    itemNames: string[],
    preselectedItemName: string,
    onSelect: (itemName: string) => void,
}

const GenreList: FC<IGenreListProps> = ({itemNames, preselectedItemName, onSelect}) => {
    const [selectedItemName, setSelectedItemName] = useState(preselectedItemName);
    const listItems = itemNames.map((itemName) => {
        var className = itemName === selectedItemName ? selectedItemClassName : unselectedItemClassName;
        return <li key={itemName} className={className} onClick={() => SelectItem(itemName)}>{itemName}</li>;
    });

    const SelectItem = (itemName: string) => {
        setSelectedItemName(itemName);
        onSelect(itemName);
    }

    return (
        <ul className="list">
            {listItems}
        </ul>
    );
}

export default GenreList;