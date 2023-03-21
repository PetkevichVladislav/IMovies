import "./MovieCard.scss"
import Image from "./Bitmap.png";

import { FC, useState } from "react";
import { PopupMenu } from "../PopupMenu/PopupMenu";

export interface IMovieCard {
    imageUrl: string;
    movieName: string;
    releaseYear: string;
    genres: string[];
    onClick: () => void;
}

export const MovieCard: FC<IMovieCard> = (movie: IMovieCard) => {
    const [isMouseHoveredOnCard, setIsMouseHoveredOnCard] = useState(false);
    const [isPopupMenuOpened, setIsPopupMenuOpened] = useState(false);
    const [menuItems, setMenuItems] = useState([
        {
            onClick: () => console.log('Edit'),
            menuItem: 'Edit',
        },
        {
            onClick: () => console.log('Delete'),
            menuItem: 'Delete',
        }
    ]);

    const handleClosePopupMenu = () => {
        setIsPopupMenuOpened(false);
        console.log("close form");
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
        console.log("open form");
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