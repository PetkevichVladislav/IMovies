
import { CardModel } from "../models/CardModel"
import { MovieModel } from "../models/MovieModel"
import { MovieModelDto } from "../models/dto/MovieModelDto"

export const mapMovieDtoToMovieModel = (movieDto : MovieModelDto) : MovieModel => {
    return {
        id: movieDto.id,
        genres: movieDto.genres,
        imagePath: movieDto.poster_path,
        overview: movieDto.overview,
        rating: movieDto.vote_average,
        releaseDate: new Date(movieDto.release_date),
        runtime: movieDto.runtime,
        title: movieDto.title,
    }
}

export const mapMovieModelToCardModel = (movieModel : MovieModel) : CardModel => {
    return {
        genres: movieModel.genres,
        imageUrl: movieModel.imagePath,
        movieName: movieModel.title,
        releaseYear: movieModel.releaseDate.getFullYear(),
    }
}