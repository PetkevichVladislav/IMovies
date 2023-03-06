import Menu from "../Menu/Menu";
import MovieGrid from "../MovieGrid/MovieGrid";

import "./Main.css"

function Main()
{
    return (
        <main className="main">
            <Menu/>
            <MovieGrid/>
        </main>
    );
}

export default Main;