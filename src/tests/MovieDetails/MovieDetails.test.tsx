import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { MovieDetails } from '../../components/MovieDetails/MovieDetails';
import { MovieModel } from '../../models/MovieModel';

describe("Movie details", () => {
    it("When data is valid component should renders correctly", () =>{
        const tree = renderer.create(<MovieDetails/>)
        .toJSON();
        expect(tree).toMatchSnapshot();;
    });

    it("when user open forms the data should renders data", () =>{
        const movieModel : MovieModel = {
            id: "0",
            title: 'Example Movie',
            genres: ["Action", "Sci-Fi"],
            imagePath: "http://image.com",
            overview: "Image overview",
            rating: 10,
            releaseDate: new Date(2022, 8, 10),
            runtime: 180,
        }
        render(<MovieDetails movie={movieModel}/>);
        expect(screen.getByText(movieModel.title)).toBeInTheDocument();
        expect(screen.getByText(movieModel.releaseDate.getFullYear())).toBeInTheDocument();
        expect(screen.getByText(movieModel.genres.join(", "))).toBeInTheDocument();
        expect(screen.getByText(movieModel.overview)).toBeInTheDocument();
        expect(screen.getByText((movieModel.runtime ? movieModel.runtime : "" ) + " minutes")).toBeInTheDocument();
        expect(screen.getByText(movieModel.rating)).toBeInTheDocument();
    });
});