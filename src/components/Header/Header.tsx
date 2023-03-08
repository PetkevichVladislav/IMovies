import Logo from "../Logo/Logo";
import Search from "../Search/Search";

import "./Header.scss"

function Header()
{
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
                <Search/>
            </div>
            <hr className="banner_line"/>
        </header>
    )
}

export default Header;