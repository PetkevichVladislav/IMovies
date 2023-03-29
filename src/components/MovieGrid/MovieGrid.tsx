import "./MovieGrid.scss"

import { useState } from "react";

import Counter from "../Counter/Counter"
import { IMovieCard, MovieCard } from "../MovieCard/MovieCard";

import Image from "../MovieCard/Bitmap.png";

const MovieGrid = () => {
    const [counterInitialValue, setCounterInitialValue] = useState<number>(0);
    const [movieData, setMovieData] = useState<IMovieCard>({
        imageUrl: Image,
        movieName: 'Example Movie',
        releaseYear: '2022',
        genres: ['Action', 'Drama'],
        onClick: () => console.log("card clicked"),
        movieMenu: {
            onDeleteClick: () => console.log("remove"),
            onEditCLick: () => {
            }
        }
    });

    const cards = Array(10).fill(<MovieCard {...movieData}/>);

    return (
        <section className="movie-grid">
            <Counter initialValue={counterInitialValue} />
            <div className="movie-cards-container">
                {cards}
            </div>
        </section>
    )
}

export default MovieGrid;