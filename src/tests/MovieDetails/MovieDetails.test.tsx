import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { IMovieDetails, MovieDetails } from '../../components/MovieDetails/MovieDetails';

describe("Movie details", () => {
    const movieData : IMovieDetails = {
        imageUrl: "http://uimage.com",
        movieName: 'Example Movie',
        releaseYear: '2022',
        movieGenres: ['Action', 'Drama'],
        description: "Movie description",
        duration: "2h 35min",
        rating: 9.3,
    };

    it("When data is valid component should renders correctly", () =>{
        const tree = renderer.create(<MovieDetails {...movieData}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();;
    });

    it("when user open forms the data should reneders data", () =>{
        render(<MovieDetails {...movieData}/>);
        expect(screen.getByText('Example Movie')).toBeInTheDocument();
        expect(screen.getByText('2022')).toBeInTheDocument();
        expect(screen.getByText('Action, Drama')).toBeInTheDocument();
        expect(screen.getByText("Movie description")).toBeInTheDocument();
        expect(screen.getByText("2h 35min")).toBeInTheDocument();
        expect(screen.getByText("9.3")).toBeInTheDocument();
    });
});