import { MovieModel } from "../models/MovieModel";
import { GetMoviesRequestModel } from "../models/request/GetMoviesRequestModel";
import { GetMoviesResponse } from "../models/response/GetMoviesResponse";
import { mapMovieDtoToMovieModel } from "./MovieMapService";
import MovieModelDto from "../models/dto/MovieModelDto";
import CreateMovieModelDto from "../models/dto/CreateMovieModelDto";
import UpdateMovieModelDto from "../models/dto/UpdateMovieModelDto";

const url = "http://localhost:4000";

const defaultRequestInit: RequestInit = {
  method: "GET",
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
}


export const getMovies = async (requestModel: GetMoviesRequestModel, requestParameters: RequestInit = defaultRequestInit): Promise<Array<MovieModel>> => {
  const urlParameters = convertModelToUrlParameters(requestModel);
  try {
    const response = await request<GetMoviesResponse>(url + "/movies?" + urlParameters, requestParameters);
    const movies = response.data.map((dto: MovieModelDto) => mapMovieDtoToMovieModel(dto));

    return movies;
  } catch (error) {
    console.error(error);

    throw error;
  }
}

export const getMovie = async (movieId: string, requestParameters: RequestInit = defaultRequestInit): Promise<MovieModel> => {
  try {
    const response = await request<MovieModelDto>(url + "/movies/" + movieId, requestParameters);
    const movie = mapMovieDtoToMovieModel(response);
    return movie;
  } catch (error) {
    console.error(error);

    throw error;
  }
}

export const createMovie = async (movie: CreateMovieModelDto, requestParameters: RequestInit = defaultRequestInit): Promise<MovieModel> => {
  try {
    const parameters = {...requestParameters, method: "POST", body:  JSON.stringify(movie)}
    const response = await request<MovieModelDto>(url + "/movies", parameters);
    const createdMovie = mapMovieDtoToMovieModel(response);

    return createdMovie;
  } catch (error) {
    console.error(error);

    throw error;
  }
}

export const updateMovie = async (movie: UpdateMovieModelDto, requestParameters: RequestInit = defaultRequestInit): Promise<MovieModel> => {
  try {
    const parameters = {...requestParameters, method: "PUT", body:  JSON.stringify(movie)}
    const response = await request<MovieModelDto>(url + "/movies", parameters);
    const updatedMovie = mapMovieDtoToMovieModel(response);

    return updatedMovie;
  } catch (error) {
    console.error(error);

    throw error;
  }
}

export const removeMovie = async (movieId: string, requestParameters: RequestInit = defaultRequestInit) : Promise<void> => {
  try {
    const parameters = {...requestParameters, method: "DELETE"}
    await request(url + `/movies/${movieId}`, parameters);
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

const convertModelToUrlParameters = <TModel extends {},>(model: TModel): string => {
  return Object.keys(model).reduce((acc, item) => {
    const value = model[item as keyof TModel];
    const param = value ? `&${item}=${value}` : ''

    return `${acc}${param}`;
  }, '')
}