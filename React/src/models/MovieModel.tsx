export interface MovieModel {
    id: string;
    title: string;
    rating: number;
    releaseDate: Date;
    imagePath: string;
    overview: string;
    runtime: number | null;
    genres: string[];
}