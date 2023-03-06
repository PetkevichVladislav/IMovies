import './Search.scss';

function Search() {
    return (
        <div className="search">
            <input className="search__input" placeholder='What do you want to watch?'/>
            <button className="search__button">
                SEARCH
            </button>
        </div>
    )
}

export default Search;