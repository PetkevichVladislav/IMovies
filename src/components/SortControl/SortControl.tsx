import { FC, useState } from "react";
import "./SortControl.scss"

export enum SortOption {
    ReleaseDate = "RELEASE DATE",
    Title = "TITLE",
}

export interface ISortControl {
    sortingOption: SortOption;
    onChange: (sortOption: SortOption) => void,
}

export const SortControl: FC<ISortControl> = ({ sortingOption, onChange }) => {
    const [selectedSortOption, setSelectedSortOption] = useState(sortingOption);

    function handleSortingOptionChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedSortOption(event.target.value as SortOption);
    }
    return (
        <div className="sort-control">
            <p className="sort-control__text sort-control__text--sorting">SORT BY</p>
            <div className="sort-control__select-container">
                <select className="sort-control__select" value={selectedSortOption} data-testid="selected-sort-option" onChange={handleSortingOptionChange}>
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