import { RequestSortOption } from "../models/enum/RequestSortOptions";
import { SortOption } from "../models/enum/SortOption";

const sortOptionsMap = new Map<SortOption,RequestSortOption>([
    [SortOption.ReleaseDate,RequestSortOption.ReleaseDate],
    [SortOption.Title,RequestSortOption.Title],
])

export const mapSortOptionToRequestSortOption = (sortOption : SortOption) => {
    return sortOptionsMap.get(sortOption);
}
