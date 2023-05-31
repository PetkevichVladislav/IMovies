import "./MovieGrid.scss"

import { useCallback, useMemo, useState } from "react";

import Counter from "../Counter/Counter"
import { IMovieCard, MovieCard } from "../MovieCard/MovieCard";
import { InformationModal } from "../Modals/InformationModal/InformationModal";
import { useMovieContext } from "../MovieListPage/MovieListPage";
import { mapMovieModelToCardModel } from "../../services/MovieMapService";
import { useNavigate, useSearchParams } from "react-router-dom";

const MovieGrid = () => {
    const movieContextModel = useMovieContext();
    const [isEditMovieInformationModelOpened, setIsEditMovieInformationModelOpened] = useState<boolean>(false);

    const setMovieQuantity = useCallback(() => {
        return movieContextModel ? movieContextModel?.moviesQuantity : 0  
    }, [movieContextModel])

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const onEditClick = useCallback((movieId: string) => {
        navigate(`/${movieId}/edit?` + searchParams.toString());
    }, [navigate, searchParams]);

    const onRemoveClick = useCallback((movieId: string) => {
        navigate(`/${movieId}/remove?` + searchParams.toString());
    }, [navigate, searchParams]);


    const cards = useMemo( () => movieContextModel?.movieList.map(movie => {
        const card = mapMovieModelToCardModel(movie);
        const movieData : IMovieCard = {
            id: movie.id,
            card: card,
            movieMenu: {
                onDeleteClick: () => onRemoveClick(movie.id),
                onEditCLick: () => onEditClick(movie.id),
            }
        };
        return <MovieCard key={movie.id + card.movieName.toLowerCase().replace(" ", "-")} {...movieData} />
    }
    ), [movieContextModel, onEditClick, onRemoveClick]);

    return (
        <>
            <section className="movie-grid">
                <Counter count={setMovieQuantity()} />
                <div className="movie-cards-container">
                    {cards}
                </div>
            </section>
            <InformationModal isOpened={isEditMovieInformationModelOpened}
                onClose={() => setIsEditMovieInformationModelOpened(false)}
                title="congratulations !"
                children="The movie has been updated successfully" />
        </>
    )
}

export default MovieGrid;