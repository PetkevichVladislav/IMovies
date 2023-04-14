import { MovieModel } from "../MovieModel";
import { Genre } from "../enum/MenuGenre";
import { SortOption } from "../enum/SortOption";

export interface MovieContextModel{
    selectedGenre: string,
    setSelectedGenre: (genre: Genre) => void,
    moviesQuantity: number,
    movieList: MovieModel[],
    searchQuery: string,
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
    sortCriterion: SortOption,
    setSortCriterion: React.Dispatch<React.SetStateAction<SortOption>>,
    selectedMovieId: string | null | undefined,
    setSelectedMovieId: React.Dispatch<React.SetStateAction<string | null | undefined>>,
}