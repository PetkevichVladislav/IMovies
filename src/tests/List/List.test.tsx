import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import List from '../../components/List/List';

const selectedItemClassName = "list__item--selected";

describe("List", () => {
    const itemNames : string[] = ["Action", "Adventure", "Comedy", "Drama", "Sci-Fi", "Thriller", "Western"];
    const preselectedItemName = "Sci-Fi";
    const onSelectCallback = jest.fn();

    it("When data is valid component should renders correctly", () =>{
        const tree = renderer.create(<List itemNames={itemNames} preselectedItemName={preselectedItemName} onSelect={onSelectCallback}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();;
    });

    it("when list doesn't contains passed elements preselected element should not be rendered", () =>{
        const itemNames : string[] = [];
        render(<List itemNames={itemNames} preselectedItemName={preselectedItemName} onSelect={onSelectCallback}/>);
        const list = screen.getByRole("list");
        expect(list).toBeEmptyDOMElement();
    });

    it("when list contains passed elements, the elements should be rendered", () =>{
        render(<List itemNames={itemNames} preselectedItemName={preselectedItemName} onSelect={onSelectCallback}/>);
        const listElements = screen.getAllByRole("listitem");
        expect(listElements.length === itemNames.length).toBeTruthy();
        expect(screen.getByText("Action")).toBeInTheDocument();
        expect(screen.getByText("Adventure")).toBeInTheDocument();
        expect(screen.getByText("Comedy")).toBeInTheDocument();
        expect(screen.getByText("Drama")).toBeInTheDocument();
        expect(screen.getByText("Sci-Fi")).toBeInTheDocument();
        expect(screen.getByText("Thriller")).toBeInTheDocument();
        expect(screen.getByText("Western")).toBeInTheDocument();
    });

    it("when list with elements passed, preselected element should be choosen", () =>{
        render(<List itemNames={itemNames} preselectedItemName={preselectedItemName} onSelect={onSelectCallback}/>);
        const selectedItem = screen.getByText(preselectedItemName);
        expect(selectedItem).toHaveClass(selectedItemClassName);
    });

    it("when list with elements, passed preselected element should be only one", () =>{
        const expectedCount : number = 1;
        render(<List itemNames={itemNames} preselectedItemName={preselectedItemName} onSelect={onSelectCallback}/>);
        const listItems = screen.getAllByRole("listitem").filter(item => item.classList.contains(selectedItemClassName));
        expect(listItems.length).toBe(expectedCount);
    });

    it("when clicks by element, callback function should return clicked element name", () =>{
        render(<List itemNames={itemNames} preselectedItemName={preselectedItemName} onSelect={onSelectCallback}/>);
        const itemToSelectName : string = 'Western';
        const itemToSelect = screen.getByText(itemToSelectName);
        fireEvent.click(itemToSelect);
        expect(onSelectCallback).toHaveBeenCalledWith(itemToSelectName);
    });

    it("when clicks by element, it should contains selected class", () =>{
        render(<List itemNames={itemNames} preselectedItemName={preselectedItemName} onSelect={onSelectCallback}/>);
        const itemToSelectName : string = 'Western';
        const itemToSelect = screen.getByText(itemToSelectName);
        fireEvent.click(itemToSelect);
        expect(itemToSelect).toHaveClass(selectedItemClassName);
    });
});