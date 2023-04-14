import { MovieModelDto } from "../dto/MovieModelDto";

export interface GetMoviesResponse{
    data: Array<MovieModelDto>;
}