import { Genre } from "../../models/enum/MenuGenre";
import { useMovieContext } from "../MovieListPage/MovieListPage";
import "./List.scss";

import { FC } from "react";

const selectedItemClassName = "list__item list__item--selected";
const unselectedItemClassName = "list__item";

interface IGenreListProps {
    genreNames: Genre[],
    selectedItemColor?: string,
}

export const List: FC<IGenreListProps> = ({ genreNames, selectedItemColor}) => {
    const movieContextModel = useMovieContext();

    const listGenres = genreNames.map((genre) => {
        const className = genre === movieContextModel?.selectedGenre ? selectedItemClassName : unselectedItemClassName;
        return <li key={genre} className={className} onClick={() => selectItem(genre)}>{genre}</li>;
    });

    const selectItem = (genreName: string) => {
        const selectedGenre = genreName as Genre;
        movieContextModel?.setSelectedGenre(selectedGenre);
    }

    const listClassNames : string[] = ["list"];
    if(selectedItemColor != null) {
        listClassNames.push(selectedItemColor);
    }
    return (
        <ul className={listClassNames.join(" ")}>
            {listGenres}
        </ul>
    );
}

export default List;