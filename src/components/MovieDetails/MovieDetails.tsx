import "./MovieDetails.scss"
import { FC } from "react"

import Logo from "../Logo/Logo";

const bottomBorderScore = 0;
const topBottomBorderScore = 10;

export interface IMovieDetails {
    imageUrl: string;
    movieName: string;
    movieGenres: string[];
    releaseYear: string;
    rating: number;
    duration: string;
    description: string;
}

export const MovieDetails: FC<IMovieDetails> = (details: IMovieDetails) => {
    let score = details.rating > topBottomBorderScore ? 10 : details.rating;
    score = score < bottomBorderScore ? bottomBorderScore : score

    return (
        <div className="movie-details">
            <div className="movie-details__icons-container">
                <div className="movie-details__logo-container">
                    <Logo />
                </div>
                <span className="icon-search"></span>
            </div>
            <div className="movie-details__info-container">
                <figure className="movie-details__image-container">
                    <img className="movie-details__image" src={details.imageUrl} alt="movie_card"></img>
                </figure>
                <div className="movie-details__details-container">
                    <div className="movie-details__heading-container">
                        <p className="movie-details__details-information--title">{details.movieName}</p>
                        <p className="movie-details__details-information--score">{score}</p>
                    </div>
                    <p className="movie-details__details-information--genre">{details.movieGenres.join(", ")}</p>
                    <p className="movie-details__details-information--release-date">{details.releaseYear}</p>
                    <p className="movie-details__details-information--duration">{details.duration}</p>
                    <p className="movie-details__details-information--description">{details.description}</p>
                </div>
            </div>
        </div>
    );
};