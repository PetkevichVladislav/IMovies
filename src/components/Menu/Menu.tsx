import "./Menu.scss"

import List from "../List/List";
import { useMemo } from "react";
import { SortControl } from "../SortControl/SortControl";
import { Genre } from "../../models/enum/MenuGenre";
import { SortOption } from "../../models/enum/SortOption";

const Menu = () => {
    const genres = useMemo(() => Object.values(Genre), []);
    
    return (
        <menu className="menu">
            <div className="sorting">
                <List genreNames={genres}/>
                <SortControl sortingOption={SortOption.ReleaseDate}/>
            </div>
            <hr className="menu__line--bold" />
            <hr className="menu__line--thin" />
        </menu>
    );
}

export default Menu;
