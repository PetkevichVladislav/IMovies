import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import Search from '../../components/Search/Search';

describe("Search", () => {
    const initialQuery = 'Action';
    const onSearchCallback = jest.fn();

    it("When data is valid component renders correctly", () => {
        const tree = renderer.create(<Search initialQUery={initialQuery} onSearch={onSearchCallback} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("When search creates, initial query should setups correctly", () => {
        render(<Search initialQUery={initialQuery} onSearch={onSearchCallback} />);
        const input = screen.getByRole<HTMLInputElement>("textbox");
        expect(input.value).toBe(initialQuery);
    });

    it("When value in input changes query should be changed", () => {
        render(<Search initialQUery={initialQuery} onSearch={onSearchCallback} />);
        const input = screen.getByRole<HTMLInputElement>("textbox");
        const changedValue = "Sci-Fi";
        fireEvent.change(input, { target: { value: changedValue } });
        expect(input.value).toBe(changedValue);
    });

    it("When value in input changes and button clicks callback should return query", () => {
        render(<Search initialQUery={initialQuery} onSearch={onSearchCallback} />);
        const input = screen.getByRole<HTMLInputElement>("textbox");
        const changedValue = "Sci-Fi";
        fireEvent.change(input, { target: { value: changedValue } });
        const button = screen.getByRole("button", { name : "SEARCH" });
        fireEvent.click(button);
        expect(onSearchCallback).toHaveBeenCalledWith(changedValue);
    });

    it("When input is focussed and enter pressed callback should return query", () => {
        render(<Search initialQUery={initialQuery} onSearch={onSearchCallback} />);
        const input = screen.getByRole<HTMLInputElement>("textbox");
        fireEvent.focus(input);
        fireEvent.keyDown(input, { key: 'Enter' });
        expect(onSearchCallback).toHaveBeenCalledWith(initialQuery);
    });

    it("When input is not focussed and enter pressed callback should return query", () => {
        render(<Search initialQUery={initialQuery} onSearch={onSearchCallback} />);
        const input = screen.getByRole<HTMLInputElement>("textbox");
        fireEvent.keyDown(input, { key: 'Enter' });
        expect(onSearchCallback).not.toBeCalled();
    });
});