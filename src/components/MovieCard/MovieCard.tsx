import "./MovieCard.scss"
import Image from "./Bitmap.png";

import { FC, useState } from "react";
import { PopupMenu } from "../PopupMenu/PopupMenu";

export interface MenuModel {
    onEditCLick: () => void;
    onDeleteClick: () => void;
}

export interface IMovieCard {
    imageUrl: string;
    movieName: string;
    releaseYear: string;
    genres: string[];
    onClick: () => void;
    movieMenu: MenuModel;
}

export const MovieCard: FC<IMovieCard> = (movie: IMovieCard) => {
    const [isMouseHoveredOnCard, setIsMouseHoveredOnCard] = useState<boolean>(false);
    const [isPopupMenuOpened, setIsPopupMenuOpened] = useState<boolean>(false);
    const [menuItems, setMenuItems] = useState([
        {
            onClick: movie.movieMenu.onEditCLick,
            menuItem: 'Edit',
        },
        {
            onClick: movie.movieMenu.onEditCLick,
            menuItem: 'Delete',
        }
    ]);

    const handleClosePopupMenu = () => {
        setIsPopupMenuOpened(false);
    };

    const handleMouseEnter = () => {
        setIsMouseHoveredOnCard(true);
    }

    const handleMouseLeave = () => {
        setIsPopupMenuOpened(false);
        setIsMouseHoveredOnCard(false);
    }

    const handleCardClick = () => {
        movie.onClick();
    }

    const handleMenuClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        event.stopPropagation();
        setIsPopupMenuOpened(true);
    }

    return (
        <div className="movie-card" data-testid="movie-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleCardClick}>
            {isMouseHoveredOnCard &&
                <span className="movie-card__context-menu icon-more-vertical" data-testid="card-menu-item" onClick={(event) => handleMenuClick(event)}></span>
            }
            {isPopupMenuOpened &&
                <div className="movie-card__popupmenu_container">
                    <PopupMenu menuItems={menuItems} onClose={handleClosePopupMenu} />
                </div>
            }
            <img className="movie-card__image" src={movie.imageUrl} alt="movie_card" />
            <div className="movie-card__description-container">
                <p className="movie-card__description movie-card__description--title">{movie.movieName}</p>
                <p className="movie-card__description movie-card__description--production-year">{movie.releaseYear}</p>
            </div>
            <p className="movie-card__description movie-card__description--genre">{movie.genres.join(", ")}</p>
        </div>
    );
}