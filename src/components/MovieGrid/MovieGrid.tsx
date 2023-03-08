import "./MovieGrid.scss"

import Counter from "../Counter/Counter"
import MovieCard from "../MovieCard/MovieCard";

function MovieGrid()
{
    return (
        <section className="movie-grid">
            <Counter count={39} />
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