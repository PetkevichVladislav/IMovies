import "./MovieCard.scss"
import Image from "./Bitmap.png";

function MovieCard()
{
    return (
        <div className="movie-card">
            <img className="movie-card__image" src={Image} alt="movie_card"/>
            <div className="movie-card__description-container">
                <p className="movie-card__description movie-card__description--title">Glitch</p>
                <p className="movie-card__description movie-card__description--production-year">2004</p>
            </div>
            <p className="movie-card__description movie-card__description--genre">Action, Music</p>
        </div>
    );
}

export default MovieCard;