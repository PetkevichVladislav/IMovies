import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import List from '../../components/List/List';
import { Genre } from '../../models/enum/MenuGenre';
import { SortOption } from '../../models/enum/SortOption';
import { MovieContext } from '../../components/MovieListPage/MovieListPage';
import { MovieContextModel } from '../../models/context/MovieContextModel';

const selectedItemClassName = "list__item--selected";

describe("List", () => {
    const itemNames : Genre[] = Object.values(Genre);
    let context: MovieContextModel;

    beforeEach(() => {
        context = {
            movieList: [{ id: "", genres: [""], imagePath: "", overview: "", rating: 0, releaseDate: new Date(), runtime: 150, title: "" }],
            moviesQuantity: 0,
            searchQuery: "Action",
            selectedGenre: Genre.Comedy,
            selectedMovieId: "",
            setSearchQuery: jest.fn(),
            setSelectedGenre: jest.fn(),
            setSelectedMovieId: jest.fn(),
            setSortCriterion: jest.fn(),
            sortCriterion: SortOption.ReleaseDate,
        }
    })
    

    it("When data is valid component should renders correctly", () =>{
        const tree = renderer.create(<List genreNames={itemNames}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();;
    });

    it("when list doesn't contains passed elements preselected element should not be rendered", () =>{
        const itemNames : Genre[] = [];
        render(
            <MovieContext.Provider value={context}>
                <List genreNames={itemNames}/>
            </MovieContext.Provider>
        );
        const list = screen.getByRole("list");
        expect(list).toBeEmptyDOMElement();
    });

    it("when list contains passed elements, the elements should be rendered", () =>{
        render(
            <MovieContext.Provider value={context}>
                <List genreNames={itemNames}/>
            </MovieContext.Provider>
        );
        const listElements = screen.getAllByRole("listitem");
        expect(listElements.length === itemNames.length).toBeTruthy();
        Object.values(Genre).forEach((genre: Genre) => expect(screen.getByText(genre)).toBeInTheDocument());
    });

    it("when list with elements passed, preselected element should be choosen", () =>{
        render(
            <MovieContext.Provider value={context}>
                <List genreNames={itemNames}/>
            </MovieContext.Provider>
        );
        const selectedItem = screen.getByText(context.selectedGenre);
        expect(selectedItem).toHaveClass(selectedItemClassName);
    });

    it("when list with elements, passed preselected element should be only one", () =>{
        const expectedCount : number = 1;
        render(
            <MovieContext.Provider value={context}>
                <List genreNames={itemNames}/>
            </MovieContext.Provider>
        );
        const listItems = screen.getAllByRole("listitem").filter(item => item.classList.contains(selectedItemClassName));
        expect(listItems.length).toBe(expectedCount);
    });

    it("when clicks by element, callback function should return clicked element name", () =>{
        render(
            <MovieContext.Provider value={context}>
                <List genreNames={itemNames}/>
            </MovieContext.Provider>
        );
        const itemToSelectName : Genre = Genre.Crime;
        const itemToSelect = screen.getByText(itemToSelectName);
        fireEvent.click(itemToSelect);
        expect(context.setSelectedGenre).toHaveBeenCalledWith(itemToSelectName);
    });
});