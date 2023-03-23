import "./MovieGrid.scss"

import { useState } from "react";

import Counter from "../Counter/Counter"
import { MovieCard } from "../MovieCard/MovieCard";

import Image from "../MovieCard/Bitmap.png";

const MovieGrid = () => {
    const [counterInitialValue, setCounterInitialValue] = useState<number>(0);
    const [movieData, setMovieData] = useState({
        imageUrl: Image,
        movieName: 'Example Movie',
        releaseYear: '2022',
        genres: ['Action', 'Drama'],
    });

    const cards = Array(10).fill(<MovieCard {...movieData} onClick={() => console.log("card clicked")}/>);

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