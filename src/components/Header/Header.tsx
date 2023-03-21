import "./Header.scss"

import { useCallback, useState } from 'react';

import Logo from "../Logo/Logo";
import Search from "../Search/Search";

function Header() {
    const [searchQuery, setSearchQuery] = useState<string>('Comedy');

    const searchByQuery = useCallback((query: string) => {
        console.log(query);
    }, [])

    return (
        <header className="banner">
            <div className="add-movie">
                <Logo/>
                <button className="add-movie__button">+ADD MOVIE</button>
            </div>
            <div className="search-container">
                <h1 className="search-container__heading">
                    FIND YOUR MOVIE
                </h1>
                <Search initialQuery={searchQuery} onSearch={searchByQuery}/>
            </div>
        </header>
    )
}

export default Header;