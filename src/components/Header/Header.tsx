import "./Header.scss"
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

import { useCallback, useState } from 'react';
import { CreateMovieModal } from "../Modals/CreateMovieModal/CreateMovieModal";
import { InformationModal } from "../Modals/InformationModal/InformationModal";

function Header() {
    const [searchQuery, setSearchQuery] = useState<string>('Comedy');
    const [isCreateMovieModelOpened, setIsCreateMovieModelOpened] = useState<boolean>(false);
    const [isEditMovieModelOpened, setIsEditMovieModelOpened] = useState<boolean>(false);

    const searchByQuery = useCallback((query: string) => {
        console.log(query);
    }, [])

    return (
        <>
            <header className="banner">
                <div className="add-movie">
                    <Logo />
                    <button className="add-movie__button" onClick={() => setIsCreateMovieModelOpened(true)}>+ADD MOVIE</button>
                </div>
                <div className="search-container">
                    <h1 className="search-container__heading">
                        FIND YOUR MOVIE
                    </h1>
                    <Search initialQuery={searchQuery} onSearch={searchByQuery} />
                </div>
            </header>
            <CreateMovieModal isOpened={isCreateMovieModelOpened}
                onClose={() => setIsCreateMovieModelOpened(false)}
                onSubmit={() => {
                    setIsCreateMovieModelOpened(false);
                    setIsEditMovieModelOpened(true);
                }}
                title="add movie"
                movie={null} />
            <InformationModal isOpened={isEditMovieModelOpened}
                onClose={() => setIsEditMovieModelOpened(false)}
                title="congratulations !"
                children="The movie has been added to database successfully" />
        </>
    )
}

export default Header;