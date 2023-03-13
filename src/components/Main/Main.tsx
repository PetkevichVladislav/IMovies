import "./Main.css"

import Menu from "../Menu/Menu";
import MovieGrid from "../MovieGrid/MovieGrid";

const Main = () => {
    return (
        <main className="main">
            <Menu/>
            <MovieGrid/>
        </main>
    );
}

export default Main;