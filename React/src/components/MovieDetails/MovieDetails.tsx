import "./MovieDetails.scss"

import Logo from "../Logo/Logo";
import { MovieModel } from "../../models/MovieModel";
import { Link, useSearchParams } from "react-router-dom";
import { FC, useMemo } from "react";

export interface IMovieDetails {
    movie?: MovieModel | null;
}

export const MovieDetails: FC<IMovieDetails> = ({ movie: details }) => {
    const [searchParams] = useSearchParams();
    const link = useMemo(() => "/?" + searchParams.toString(), [searchParams]);
    
    return (
        <div className="movie-details">
            <div className="movie-details__icons-container">
                <div className="movie-details__logo-container">
                    <Logo />
                </div>
                <Link to={link}>
                    <span className="icon-search" />
                </Link>
            </div>
            <div className="movie-details__info-container">
                <figure className="movie-details__image-container">
                    <img className="movie-details__image" src={details?.imagePath} alt="movie_card"></img>
                </figure>
                <div className="movie-details__details-container">
                    <div className="movie-details__heading-container">
                        <p className="movie-details__details-information--title">{details?.title}</p>
                        {details?.rating && <p className="movie-details__details-information--score">{details?.rating}</p>}
                    </div>
                    <p className="movie-details__details-information--genre">{details?.genres.join(", ")}</p>
                    <p className="movie-details__details-information--release-date">{details?.releaseDate.getFullYear()}</p>
                    {details?.runtime && <p className="movie-details__details-information--duration">{details?.runtime} minutes</p>}
                    <p className="movie-details__details-information--description">{details?.overview}</p>
                </div>
            </div>
        </div>
    );
};