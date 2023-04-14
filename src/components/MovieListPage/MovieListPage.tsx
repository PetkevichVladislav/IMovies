import MainPart from '../Main/Main';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';

import { Genre } from "../../models/enum/MenuGenre";
import { MovieModel } from "../../models/MovieModel";
import { SortOrder } from "../../models/enum/SortOrder";
import { SortOption } from "../../models/enum/SortOption";
import { GetMovie, GetMovies } from "../../services/MovieRequestService";
import { SearchOptions } from "../../models/enum/SearchOptions";
import { MovieContextModel } from "../../models/context/MovieContextModel";
import { FC, createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { GetMoviesRequestModel } from "../../models/request/GetMoviesRequestModel";
import { mapSortOptionToRequestSortOption } from "../../services/SortOptionMapService";
import { MovieDetails } from '../MovieDetails/MovieDetails';


export const MovieContext = createContext<MovieContextModel | null>(null);

export const useMovieContext = (): MovieContextModel | null => useContext(MovieContext);

function capitalizeWords(string: string) {
    return string
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export const MovieListPage: FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [sortCriterion, setSortCriterion] = useState<SortOption>(SortOption.ReleaseDate);
    const [selectedGenre, setSelectedGenre] = useState<Genre>(Genre.All);
    const [movieList, setMovieList] = useState<MovieModel[]>([]);
    const [moviesQuantity, setMovieQuantity] = useState<number>(0);
    const [selectedMovieId, setSelectedMovieId] = useState<string | null | undefined>();
    const [selectedMovie, setSelectedMovieModel] = useState<MovieModel | null | undefined>(null);
    const firstRender = useRef(true);
    const getMovieAbortController = useRef<AbortController | null>(null);
    const filteringAndSortingAbortController = useRef<AbortController | null>(null);
    
    const updateSelectedGenre = useCallback((genre: Genre) => {
        setSelectedGenre(genre);
        setSearchQuery("");
    },[setSearchQuery, setSelectedGenre]);

    // First rendering.
    useEffect(() => {
        const movieRequestParameters: GetMoviesRequestModel = {
            sortBy: mapSortOptionToRequestSortOption(sortCriterion),
            sortOrder: SortOrder.Descending,
        };

        GetMovies(movieRequestParameters).then(movieModels => {
            setMovieList(movieModels);
            setMovieQuantity(movieModels.length)
        });
        }, []);
    
    // Update sorting and ordering options.
    useEffect(() => {
        if(firstRender.current) {
            firstRender.current = false;
            return;
        }

        if(filteringAndSortingAbortController.current) {
            filteringAndSortingAbortController.current.abort();
        }

        const requestModel: GetMoviesRequestModel = {
            sortBy: mapSortOptionToRequestSortOption(sortCriterion),
            sortOrder: SortOrder.Descending,
            search: capitalizeWords(selectedGenre),
            searchBy: SearchOptions.Genres,
        };

        if (searchQuery || searchQuery !== "" || selectedGenre === Genre.All) {
            requestModel.search = searchQuery;
            requestModel.searchBy = SearchOptions.Title;
            setSelectedGenre(Genre.All);
        }

        filteringAndSortingAbortController.current = new AbortController();
        const requestParameters : RequestInit = {
            signal: filteringAndSortingAbortController.current!.signal,
        }

        GetMovies(requestModel, requestParameters).then().then(movieModels => {
            setMovieList(movieModels);
            setMovieQuantity(movieModels.length)
        })
    }, [sortCriterion, searchQuery, selectedGenre, firstRender, filteringAndSortingAbortController]);

    // Select or unselect movie.
    useEffect(() => {
        if(firstRender.current) {
            firstRender.current = false;
            return;
        }

        if(getMovieAbortController.current) {
            getMovieAbortController.current.abort();
        }

        if(selectedMovieId) {
            getMovieAbortController.current = new AbortController();
            GetMovie(selectedMovieId).then(movieModel => {
                setSelectedMovieModel(movieModel);
            });
        }
    }, [selectedMovieId, getMovieAbortController]);

    const movieContextModel: MovieContextModel = {
        selectedGenre: selectedGenre,
        setSelectedGenre: updateSelectedGenre,
        moviesQuantity: moviesQuantity,
        movieList: movieList,
        searchQuery: searchQuery,
        setSearchQuery: setSearchQuery,
        sortCriterion: sortCriterion,
        setSortCriterion: setSortCriterion,
        selectedMovieId: selectedMovieId,
        setSelectedMovieId: setSelectedMovieId,
    }

    return (
        <>
            <MovieContext.Provider value={movieContextModel}>
                { 
                    selectedMovieId 
                    ? <MovieDetails movie={selectedMovie}/> 
                    : <Header/>
                }
                <hr className="app__divider" />
                <MainPart />
                <Footer />
            </MovieContext.Provider>
        </>
    );
}
