import { useMovieContext } from '../MovieListPage/MovieListPage';
import './Search.scss';

import { useState, useCallback, useEffect, FC } from 'react';

interface ISearchProps { }

const Search: FC<ISearchProps> = () => {
    const movieContextModel = useMovieContext();
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [query, setQuery] = useState<string>(movieContextModel ? movieContextModel?.searchQuery : "");
    const internalSearch = useCallback(() => { movieContextModel?.setSearchQuery(query) }, [movieContextModel,query]);

    useEffect(() => {
        if (movieContextModel) {
            setQuery(movieContextModel.searchQuery);
        }
    }, [movieContextModel]);
    
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent)  => {
            const isEnterPressed = event.key === "Enter";
            if (isEnterPressed && isFocus) {
                internalSearch();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isFocus, internalSearch])

    return (
        <div className="search">
            <input
                className="search__input"
                placeholder='What do you want to watch?'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
            />
            <button className="search__button" onClick={internalSearch}>
                SEARCH
            </button>
        </div>
    )
}

export default Search;