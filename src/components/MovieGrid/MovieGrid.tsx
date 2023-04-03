import "./MovieGrid.scss"

import { useState } from "react";

import Counter from "../Counter/Counter"
import { IMovieCard, MovieCard } from "../MovieCard/MovieCard";

import Image from "../MovieCard/Bitmap.png";
import { CreateMovieModal } from "../Modals/CreateMovieModal/CreateMovieModal";
import { ConfirmationModal } from "../Modals/ConfirmationModal/ConfirmationModal";
import { InformationModal } from "../Modals/InformationModal/InformationModal";

const MovieGrid = () => {
    const [counterInitialValue, setCounterInitialValue] = useState<number>(0);
    const [isEditMovieModelOpened, setIsEditMovieModelOpened] = useState<boolean>(false);
    const [isDeleteMovieConfirmationModelOpened, setIsDeleteMovieConfirmationModelOpened] = useState<boolean>(false);
    const [isEditMovieInformationModelOpened, setIsEditMovieInformationModelOpened] = useState<boolean>(false);
    const [movieData, setMovieData] = useState<IMovieCard>({
        imageUrl: Image,
        movieName: 'Example Movie',
        releaseYear: '2022',
        genres: ['Action', 'Drama'],
        onClick: () => console.log("card clicked"),
        movieMenu: {
            onDeleteClick: () => {
                setIsDeleteMovieConfirmationModelOpened(true);
            },
            onEditCLick: () => {
                setIsEditMovieModelOpened(true);
            }
        }
    });

    const cards = Array(10).fill(<MovieCard {...movieData} />);

    return (
        <>
            <section className="movie-grid">
                <Counter initialValue={counterInitialValue} />
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
                title="edit movie"/>
            <InformationModal isOpened={isEditMovieInformationModelOpened}
                onClose={() => setIsEditMovieInformationModelOpened(false)}
                title="congratulations !"
                children="The movie has been updated successfully" />
            <ConfirmationModal isOpened={isDeleteMovieConfirmationModelOpened}
                onClose={() => setIsDeleteMovieConfirmationModelOpened(false)}
                onConfirm={() => setIsDeleteMovieConfirmationModelOpened(false)}
                title="Delete movie"
                children="Are you sure you want to delete this movie?"/>
        </>
    )
}

export default MovieGrid;