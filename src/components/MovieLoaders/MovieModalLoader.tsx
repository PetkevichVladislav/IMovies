import { FC, useCallback, useEffect, useRef, useState } from "react";
import { MovieDetails } from "../MovieDetails/MovieDetails"
import { getMovie as getMovie } from "../../services/MovieRequestService";
import { useParams } from "react-router";
import { MovieModel } from "../../models/MovieModel";
import { CreateMovieModal } from "../Modals/CreateMovieModal/CreateMovieModal";
import { Loader } from "../Loader/Loader";
import { ModelBase } from "../Modals/ModalBase/ModalBase";
import { useNavigate, useSearchParams } from "react-router-dom";

export const EditMovieModalLoader: FC = () => {
    const { id } = useParams();
    const getMovieAbortController = useRef<AbortController | null>(null);
    const [movie, setMovie] = useState<MovieModel | null | undefined>(null);
    const [isLoaderOpened, setIsMovieLoader] = useState<boolean>(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (getMovieAbortController.current) {
            getMovieAbortController.current.abort();
        }

        if (id) {
            getMovieAbortController.current = new AbortController();
            void getMovie(id).then(movieModel => {
                setMovie(movieModel);
            })
        }
    }, [id, getMovieAbortController, isLoaderOpened]);


    return (movie 
        && <CreateMovieModal isOpened title="edit movie" movie={movie} />) 
        || <ModelBase isOpened title="Loading" onClose={() => {
            if (getMovieAbortController.current) {
                getMovieAbortController.current.abort();
            }

            setIsMovieLoader(false);
            navigate(-1);
        }}>
        <Loader />
        </ModelBase>;
}