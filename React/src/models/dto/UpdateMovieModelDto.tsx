export default interface UpdateMovieModelDto {
    title: string;
    tagline: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    poster_path: string;
    overview: string;
    runtime: number;
    budget: number,
    revenue: number,
    genres: string[];
    id: string;     
}