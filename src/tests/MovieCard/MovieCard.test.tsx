import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { IMovieCard, MovieCard } from '../../components/MovieCard/MovieCard';

describe("Movie card", () => {
    const onClickCallback = jest.fn();
    const onRemoveMenuCallback = jest.fn();
    const onEditMenuCallback = jest.fn();
    const movieData: IMovieCard = {
        id: "1",
        card: {
            imageUrl: "http://uimage.com",
            movieName: 'Example Movie',
            releaseYear: 2022,
            genres: ['Action', 'Drama'],
        },
        onCardClick: onClickCallback,
        movieMenu: {
            onDeleteClick: onRemoveMenuCallback,
            onEditCLick: onEditMenuCallback,
        }
    };

    it("When data is valid component should renders correctly", () => {
        const tree = renderer.create(<MovieCard {...movieData} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("when user open forms the data should reneders data", () => {
        render(<MovieCard {...movieData} />);
        expect(screen.getByRole("img")).toHaveAttribute("src", "http://uimage.com");
        expect(screen.getByText('Example Movie')).toBeInTheDocument();
        expect(screen.getByText('2022')).toBeInTheDocument();
        expect(screen.getByText('Action, Drama')).toBeInTheDocument();
    });

    it("when user clicks on element callback should be triggered", () => {
        render(<MovieCard {...movieData} />);
        const card = screen.getByTestId("movie-card");
        fireEvent.click(card);
        expect(onClickCallback).toBeCalled();
    });

    it("when user hover on card menu item button should appear", () => {
        render(<MovieCard {...movieData} />);
        const card = screen.getByTestId("movie-card");
        fireEvent.mouseEnter(card);
        const menuItem = screen.getByTestId("card-menu-item");
        expect(menuItem).toBeInTheDocument();
    });

    it("when user clicks on card menu item button menu should appear", () => {
        render(<MovieCard {...movieData} />);
        const card = screen.getByTestId("movie-card");
        fireEvent.mouseEnter(card);
        const menuItem = screen.getByTestId("card-menu-item");
        fireEvent.click(menuItem);
        const menu = screen.getByTestId("drop-down-menu");
        expect(menu).toBeInTheDocument();
    });

});