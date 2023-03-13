import "./MovieGrid.scss"

import { useState } from "react";

import Counter from "../Counter/Counter"
import MovieCard from "../MovieCard/MovieCard";


const MovieGrid = () => {
    const [counterInitialValue, setCounterInitialValue] = useState<number>(0);

    return (
        <section className="movie-grid">
            <Counter initialValue={counterInitialValue}/>
            <div className="movie-cards-container">
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div>
        </section>
    )
}

export default MovieGrid;