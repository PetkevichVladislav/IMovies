import './Search.scss';

import { useState, useCallback, useEffect, FC } from 'react';

interface ISearchProps {
    initialQuery: string,
    onSearch: (query: string) => void,
}

const Search: FC<ISearchProps> = ({ initialQuery, onSearch }) => {
    const [query, setQuery] = useState<string>(initialQuery);
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const internalSearch = useCallback(() => { onSearch(query) }, [onSearch, query])
    
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