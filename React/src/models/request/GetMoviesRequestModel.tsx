
import { RequestSortOption } from "../enum/RequestSortOptions";
import { SearchOptions } from "../enum/SearchOptions";
import { SortOrder } from "../enum/SortOrder";

export interface GetMoviesRequestModel{
    sortBy?: RequestSortOption | null | undefined;
    sortOrder?: SortOrder | null | undefined;
    search?: string | null | undefined;
    searchBy?: SearchOptions | null | undefined;
    offset?: number | null | undefined;
    limit?: number | null | undefined;
}