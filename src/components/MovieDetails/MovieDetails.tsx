import "./MovieDetails.scss"

import { FC, useCallback } from "react"
import Logo from "../Logo/Logo";
import { useMovieContext } from "../MovieListPage/MovieListPage";
import { MovieModel } from "../../models/MovieModel";

export interface IMovieDetails {
    movie?: MovieModel | null | undefined;
}

export const MovieDetails: FC<IMovieDetails> = ({movie: details}) => {
    const movieContextModel = useMovieContext();
    const onIconClick = useCallback(() => movieContextModel?.setSelectedMovieId(null), [movieContextModel]);
    
    return (
        <div className="movie-details">
            <div className="movie-details__icons-container">
                <div className="movie-details__logo-container">
                    <Logo />
                </div>
                <span className="icon-search" onClick={onIconClick}></span>
            </div>
            <div className="movie-details__info-container">
                <figure className="movie-details__image-container">
                    <img className="movie-details__image" src={details?.imagePath} alt="movie_card"></img>
                </figure>
                <div className="movie-details__details-container">
                    <div className="movie-details__heading-container">
                        <p className="movie-details__details-information--title">{details?.title}</p>
                        <p className="movie-details__details-information--score">{details?.rating}</p>
                    </div>
                    <p className="movie-details__details-information--genre">{details?.genres.join(", ")}</p>
                    <p className="movie-details__details-information--release-date">{details?.releaseDate.getFullYear()}</p>
                    <p className="movie-details__details-information--duration">{details?.runtime} minutes</p>
                    <p className="movie-details__details-information--description">{details?.overview}</p>
                </div>
            </div>
        </div>
    );
};