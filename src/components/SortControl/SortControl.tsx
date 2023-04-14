import "./SortControl.scss"

import { FC, useCallback } from "react";
import { SortOption } from "../../models/enum/SortOption";
import { useMovieContext } from "../MovieListPage/MovieListPage";

export interface ISortControl {
    sortingOption: SortOption,    
}

export const SortControl: FC<ISortControl> = ({ sortingOption }) => {
    const movieContextModel = useMovieContext();    
    const handleSortingOptionChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
        movieContextModel?.setSortCriterion(event.target.value as SortOption);
    }, [movieContextModel]);

    return (
        <div className="sort-control">
            <p className="sort-control__text sort-control__text--sorting">SORT BY</p>
            <div className="sort-control__select-container">
                <select className="sort-control__select" value={movieContextModel?.sortCriterion} data-testid="selected-sort-option" onChange={handleSortingOptionChange}>
                    {Object.values(SortOption).map((sortOption) => (
                        <option className="sort-control__text sort-control__text--sorting-option" key={sortOption} value={sortOption}>
                            {sortOption}
                        </option>
                    ))}
                </select>
                <span className="icon-arrow-down"></span>
            </div>
        </div>
    );
}