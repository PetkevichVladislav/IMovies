import { fireEvent, render, screen } from '@testing-library/react';
import Search from '../../components/Search/Search';
import { MovieContext } from '../../components/MovieListPage/MovieListPage';
import { MovieContextModel } from '../../models/context/MovieContextModel';
import { SortOption } from '../../models/enum/SortOption';

describe('Search', () => {
    let context: MovieContextModel;

    beforeEach(() => {
        context = {
            movieList: [{ id: "", genres: [""], imagePath: "", overview: "", rating: 0, releaseDate: new Date(), runtime: 150, title: "" }],
            moviesQuantity: 0,
            searchQuery: "Action",
            selectedGenre: "",
            selectedMovieId: "",
            setSearchQuery: jest.fn(),
            setSelectedGenre: jest.fn(),
            setSelectedMovieId: jest.fn(),
            setSortCriterion: jest.fn(),
            sortCriterion: SortOption.ReleaseDate,
        }
    })

    it('renders correctly', () => {
        const { container } = render(
            <MovieContext.Provider value={context}>
                <Search />
            </MovieContext.Provider>
        );
        expect(container).toMatchSnapshot();
    });

    it("When search creates, initial query should setups correctly", () => {
        render(
            <MovieContext.Provider value={context}>
                <Search />
            </MovieContext.Provider>
        );
        const input = screen.getByRole<HTMLInputElement>("textbox");
        expect(input.value).toBe(context.searchQuery);
    });


    it("When value in input changes query should be changed", () => {
        const changedValue = "Sci-Fi";
        context.setSearchQuery = jest.fn(() => context.searchQuery = changedValue);
        render(
            <MovieContext.Provider value={context}>
                <Search />
            </MovieContext.Provider>
        );
        const input = screen.getByRole<HTMLInputElement>("textbox");
        fireEvent.change(input, { target: { value: changedValue } });
        expect(input.value).toBe(changedValue);
    });

    it("When value in input changes and button clicks callback should return query", () => {
        const changedValue = "Sci-Fi";
        context.setSearchQuery = jest.fn(() => context.searchQuery = changedValue);
        render(
            <MovieContext.Provider value={context}>
                <Search />
            </MovieContext.Provider>
        );
        const input = screen.getByRole<HTMLInputElement>("textbox");
        fireEvent.change(input, { target: { value: changedValue } });
        const button = screen.getByRole("button", { name: "SEARCH" });
        fireEvent.click(button);
        expect(context.setSearchQuery).toHaveBeenCalledWith(changedValue);
    });

    it("When input is focussed and enter pressed callback should return query", () => {
        context.setSearchQuery = jest.fn();
        render(
            <MovieContext.Provider value={context}>
                <Search />
            </MovieContext.Provider>
        );
        const input = screen.getByRole<HTMLInputElement>("textbox");
        fireEvent.focus(input);
        fireEvent.keyDown(input, { key: 'Enter' });
        expect(context.setSearchQuery).toHaveBeenCalledWith(context.searchQuery);
    });

    it("When input is not focussed and enter pressed callback should return query", () => {
        context.setSearchQuery = jest.fn();
        render(
            <MovieContext.Provider value={context}>
                <Search />
            </MovieContext.Provider>
        );
        const input = screen.getByRole<HTMLInputElement>("textbox");
        fireEvent.keyDown(input, { key: 'Enter' });
        expect(context.setSearchQuery).not.toBeCalled();
    });
});