import "./MovieGrid.scss"

import { useCallback, useMemo, useState } from "react";

import Counter from "../Counter/Counter"
import { IMovieCard, MovieCard } from "../MovieCard/MovieCard";

import Image from "../MovieCard/Bitmap.png";
import { CreateMovieModal } from "../Modals/CreateMovieModal/CreateMovieModal";
import { ConfirmationModal } from "../Modals/ConfirmationModal/ConfirmationModal";
import { InformationModal } from "../Modals/InformationModal/InformationModal";
import { useMovieContext } from "../MovieListPage/MovieListPage";
import { mapMovieModelToCardModel } from "../../services/MovieMapService";

const MovieGrid = () => {
    const movieContextModel = useMovieContext();
    const [isEditMovieModelOpened, setIsEditMovieModelOpened] = useState<boolean>(false);
    const [isDeleteMovieConfirmationModelOpened, setIsDeleteMovieConfirmationModelOpened] = useState<boolean>(false);
    const [isEditMovieInformationModelOpened, setIsEditMovieInformationModelOpened] = useState<boolean>(false);

    const setMovieQuantity = useCallback(() => {
        return movieContextModel ? movieContextModel?.moviesQuantity : 0  
    }, [movieContextModel])

    const cards = useMemo( () => movieContextModel?.movieList.map(movie => {
        const card = mapMovieModelToCardModel(movie);
        const movieData : IMovieCard = {
            id: movie.id,
            card: card,
            onCardClick: () => movieContextModel.setSelectedMovieId(movie.id),
            movieMenu: {
                onDeleteClick: () => {
                    setIsDeleteMovieConfirmationModelOpened(true);
                },
                onEditCLick: () => {
                    setIsEditMovieModelOpened(true);
                }
            }
        };
        return <MovieCard {...movieData} />
    }
    ), [movieContextModel]);

    return (
        <>
            <section className="movie-grid">
                <Counter count={setMovieQuantity()} />
                <div className="movie-cards-container">
                    {cards}
                </div>
            </section>
            <CreateMovieModal isOpened={isEditMovieModelOpened}
                onClose={() => setIsEditMovieModelOpened(false)}
                onSubmit={() => {
                    setIsEditMovieModelOpened(false);
                    setIsEditMovieInformationModelOpened(true);
                }}
                title="edit movie" />
            <InformationModal isOpened={isEditMovieInformationModelOpened}
                onClose={() => setIsEditMovieInformationModelOpened(false)}
                title="congratulations !"
                children="The movie has been updated successfully" />
            <ConfirmationModal isOpened={isDeleteMovieConfirmationModelOpened}
                onClose={() => setIsDeleteMovieConfirmationModelOpened(false)}
                onConfirm={() => setIsDeleteMovieConfirmationModelOpened(false)}
                title="Delete movie"
                children="Are you sure you want to delete this movie?" />
        </>
    )
}

export default MovieGrid;