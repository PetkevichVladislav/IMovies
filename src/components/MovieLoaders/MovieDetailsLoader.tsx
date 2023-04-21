import { FC, useEffect, useRef, useState } from "react";
import { MovieDetails } from "../MovieDetails/MovieDetails"
import { getMovie } from "../../services/MovieRequestService";
import { useParams } from "react-router";
import { MovieModel } from "../../models/MovieModel";

export const MovieDetailsLoader : FC = () => {
    const { id } = useParams();
    const getMovieAbortController = useRef<AbortController | null>(null);
    const [selectedMovie, setSelectedMovieModel] = useState<MovieModel | null | undefined>(null);

     useEffect(() => {
        if (getMovieAbortController.current) {
            getMovieAbortController.current.abort();
        }

        if (id) {
            getMovieAbortController.current = new AbortController();
            getMovie(id).then(movieModel => {
                setSelectedMovieModel(movieModel);
            });
        }
    }, [id, getMovieAbortController]);

    
    return <MovieDetails movie={selectedMovie}/>;    
}