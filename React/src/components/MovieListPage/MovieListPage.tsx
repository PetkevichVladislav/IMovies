import MainPart from '../Main/Main';
import Footer from '../Footer/Footer';

import { Genre } from "../../models/enum/MenuGenre";
import { MovieModel } from "../../models/MovieModel";
import { SortOrder } from "../../models/enum/SortOrder";
import { SortOption } from "../../models/enum/SortOption";
import { getMovies } from "../../services/MovieRequestService";
import { SearchOptions } from "../../models/enum/SearchOptions";
import { MovieContextModel } from "../../models/context/MovieContextModel";
import { GetMoviesRequestModel } from "../../models/request/GetMoviesRequestModel";
import { mapSortOptionToRequestSortOption } from "../../services/SortOptionMapService";
import { FC, ReactNode, createContext, useCallback, useContext, useEffect, useRef, useState } from "react";


export const MovieContext = createContext<MovieContextModel | null>(null);

export const useMovieContext = (): MovieContextModel | null => useContext(MovieContext);

function capitalizeWords(string: string): string {
    return string
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

function stringifyParametersToUrlQuery(parameters: SearchQueryParameters): string {
    return Object.keys(parameters).map(function (key) {
        const value = parameters[key as keyof SearchQueryParameters]?.toLocaleLowerCase();
        if (value !== "") {
            return key + '=' + parameters[key as keyof SearchQueryParameters]?.toLocaleLowerCase();
        }
        else {
            return "";
        }
    }).join('&');
}

interface SearchQueryParameters {
    query?: string | null,
    sorting?: SortOption | null,
    genre?: Genre | null,
}

interface MovieListProps {
    children: ReactNode,
    searchParams: {
        query?: string | null,
        sorting?: SortOption | null,
        genre?: Genre | null,
    }
}

export const MovieListPage: FC<MovieListProps> = ({ children, searchParams }) => {
    const [query, setQuery] = useState<string>(searchParams.genre ?? "");
    const [genre, setGenre] = useState<Genre>(searchParams.genre?.toLocaleUpperCase() as Genre ?? Genre.All);
    const [sorting, setSorting] = useState<SortOption>(searchParams.sorting as SortOption ?? SortOption.ReleaseDate);

    const [movieList, setMovieList] = useState<MovieModel[]>([]);
    const [moviesQuantity, setMovieQuantity] = useState<number>(0);
    const firstRender = useRef(true);

    const filteringAndSortingAbortController = useRef<AbortController | null>(null);

    // First rendering.
    useEffect(() => {
        const movieRequestParameters: GetMoviesRequestModel = {
            sortBy: mapSortOptionToRequestSortOption(sorting),
            sortOrder: SortOrder.Descending,
        };

        getMovies(movieRequestParameters).then(movieModels => {
            setMovieList(movieModels);
            setMovieQuantity(movieModels.length)
        });
    }, []);

    // Update sorting and ordering options.
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        if (filteringAndSortingAbortController.current) {
            filteringAndSortingAbortController.current.abort();
        }

        const requestModel: GetMoviesRequestModel = {
            sortBy: mapSortOptionToRequestSortOption(sorting),
            sortOrder: SortOrder.Descending,
            search: capitalizeWords(genre),
            searchBy: SearchOptions.Genres,
        };

        if (query || genre === Genre.All) {
            requestModel.search = query;
            requestModel.searchBy = SearchOptions.Title;
        }

        filteringAndSortingAbortController.current = new AbortController();
        const requestParameters: RequestInit = {
            signal: filteringAndSortingAbortController.current!.signal,
        }

        getMovies(requestModel, requestParameters).then().then(movieModels => {
            setMovieList(movieModels);
            setMovieQuantity(movieModels.length)
        })
    }, [sorting, query, genre, searchParams, firstRender, filteringAndSortingAbortController]);

    const movieContextModel: MovieContextModel = {
        selectedGenre: genre,
        setSelectedGenre: (genre: Genre) => {
            setQuery("");
            setGenre(genre);
        },
        moviesQuantity: moviesQuantity,
        movieList: movieList,
        searchQuery: query,
        setSearchQuery: (query: string) => {
            setGenre(Genre.All);
            setQuery(query);
        },
        sortCriterion: sorting,
        setSortCriterion: (sorting: SortOption) => {
            setSorting(sorting);
        },
    }

    return (
        <>
            <MovieContext.Provider value={movieContextModel}>
                {children}
                <hr className="app__divider" />
                <MainPart />
                <Footer />
            </MovieContext.Provider>
        </>
    );
}
