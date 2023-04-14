import { wait } from "@testing-library/user-event/dist/utils";
import { MovieModel } from "../models/MovieModel";
import { MovieModelDto } from "../models/dto/MovieModelDto";
import { GetMoviesRequestModel } from "../models/request/GetMoviesRequestModel";
import { GetMoviesResponse } from "../models/response/GetMoviesResponse";
import { mapMovieDtoToMovieModel } from "./MovieMapService";

const url = "http://localhost:4000";

const defaultRequestInit : RequestInit = {
  method: "GET",
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
}


export const GetMovies = async (requestModel: GetMoviesRequestModel, requestParameters: RequestInit = defaultRequestInit): Promise<Array<MovieModel>> => {
  const urlParameters = convertModelToUrlParameters(requestModel);
  try {
    const response = await request<GetMoviesResponse>(url + "/movies?" + urlParameters,requestParameters);
    const movies = response.data.map((dto: MovieModelDto) => mapMovieDtoToMovieModel(dto));

    return movies;
  } catch (error) {
    console.error(error);

    throw error;
  }
}

export const GetMovie = async (movieId: string, requestParameters: RequestInit = defaultRequestInit) : Promise<MovieModel> => {
  try {
    const response = await request<MovieModelDto>(url + "/movies/" + movieId, requestParameters);
    const movie = mapMovieDtoToMovieModel(response);
    
    return movie;
  } catch (error) {
    console.error(error);

    throw error;
  }
}

const request = <TResponse,>(url: string, params?: RequestInit | undefined): Promise<TResponse> => {
  return fetch(url, params)
    .then((response) => response.json())
    .then((data) => data as TResponse);
}

const convertModelToUrlParameters = <TModel extends {},>(model: TModel) : string => {
  return Object.keys(model).reduce((acc, item) => {
    const value = model[item as keyof TModel];
    const param = value ? `&${item}=${value}` : ''

    return `${acc}${param}`;
  }, '')
}