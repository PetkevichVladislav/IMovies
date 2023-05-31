import "./Header.scss"
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

import { useState } from 'react';
import { InformationModal } from "../Modals/InformationModal/InformationModal";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";

function Header() {
    const [isEditMovieModelOpened, setIsEditMovieModelOpened] = useState<boolean>(false);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const onOpenCreateModal = () => {
        console.log(`/new?` + searchParams.toString());
        navigate(`/new?` + searchParams.toString());
    };

    return (
        <>
            <header className="banner">
                <div className="add-movie">
                    <Logo />
                    <button className="add-movie__button" onClick={onOpenCreateModal}>+ADD MOVIE</button>
                </div>
                <div className="search-container">
                    <h1 className="search-container__heading">
                        FIND YOUR MOVIE
                    </h1>
                    <Search/>
                </div>
            </header>
            <Outlet />
            <InformationModal isOpened={isEditMovieModelOpened}
                onClose={() => setIsEditMovieModelOpened(false)}
                title="congratulations !"
                children="The movie has been added to database successfully" />
        </>
    )
}

export default Header;