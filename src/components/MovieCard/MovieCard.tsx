import "./MovieCard.scss"

import { FC, useMemo, useState } from "react";
import { PopupMenu } from "../PopupMenu/PopupMenu";
import { CardModel } from "../../models/CardModel";

export interface MenuModel {
    onEditCLick: () => void;
    onDeleteClick: () => void;
}

export interface IMovieCard {
    card : CardModel;
    id: string;
    onCardClick: () => void;
    movieMenu: MenuModel;
}

export const MovieCard: FC<IMovieCard> = ({card, id, onCardClick, movieMenu}) => {
    const [isMouseHoveredOnCard, setIsMouseHoveredOnCard] = useState<boolean>(false);
    const [isPopupMenuOpened, setIsPopupMenuOpened] = useState<boolean>(false);
    const menuItems = useMemo(() => [
        {
            onClick: movieMenu.onEditCLick,
            menuItem: 'Edit',
        },
        {
            onClick: movieMenu.onDeleteClick,
            menuItem: 'Delete',
        }
    ], [movieMenu]);

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
        onCardClick();
    }

    const handleMenuClick = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        event.stopPropagation();
        setIsPopupMenuOpened(true);
    }

    return (
        <div className="movie-card" id={id} data-testid="movie-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleCardClick}>
            {isMouseHoveredOnCard &&
                <span className="movie-card__context-menu icon-more-vertical" data-testid="card-menu-item" onClick={(event) => handleMenuClick(event)}></span>
            }
            {isPopupMenuOpened &&
                <div className="movie-card__popupmenu_container">
                    <PopupMenu menuItems={menuItems} onClose={handleClosePopupMenu} />
                </div>
            }
            <figure className="movie-card__image-container">
            <img className="movie-card__image" src={card.imageUrl} alt={card.movieName + "_movie_poster"} />
            </figure>
            <div className="movie-card__description-container">
                <p className="movie-card__description movie-card__description--title">{card.movieName}</p>
                <p className="movie-card__description movie-card__description--production-year">{card.releaseYear}</p>
            </div>
            <p className="movie-card__description movie-card__description--genre">{card.genres.join(", ")}</p>
        </div>
    );
}