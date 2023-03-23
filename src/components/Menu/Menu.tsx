import "./Menu.scss"

import List from "../List/List";
import { useCallback, useState } from "react";
import { SortControl, SortOption } from "../SortControl/SortControl";

const Menu = () => {
    const [itemNames, setItemNames] = useState<string[]>(["Action", "Comedy", "Drama", "Sci-Fi", "Thriller", "Western"]);
    const [preselectedItemName, setSelectedItemName] = useState<string>("Sci-Fi");
    const onSelect = useCallback((query: string) => { console.log(query); }, []);
    const onSortOptionChange = useCallback((currentOption:SortOption) => console.log(currentOption), []);
    
    return (
        <menu className="menu">
            <div className="sorting">
                <List itemNames={itemNames}
                    preselectedItemName={preselectedItemName}
                    onSelect={onSelect} />
                <SortControl sortingOption={SortOption.ReleaseDate} onChange={onSortOptionChange}/>
            </div>
            <hr className="menu__line--bold" />
            <hr className="menu__line--thin" />
        </menu>
    );
}

export default Menu;
