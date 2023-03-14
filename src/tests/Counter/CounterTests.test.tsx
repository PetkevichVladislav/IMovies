import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import Counter from '../../components/Counter/Counter';

describe("Counter", () => {
  it("When data is valid component should renders correctly", () => {
    const tree = renderer.create(<Counter initialValue={0}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("When counter creates initial value should setups correctly", () => {
    render(<Counter initialValue={0}/>);
    const expectedValue = screen.getByText(0);
    expect(expectedValue).toBeInTheDocument();
  });

  it("When increment button is pressed counter should increments value", () => {
    render(<Counter initialValue={0}/>);
    const incrementButton = screen.getByRole("button", { name : "increment" });

    fireEvent.click(incrementButton);

    const expectedValue = screen.getByText('1');
    expect(expectedValue).toBeInTheDocument();
  });

  it("When decrement button is pressed counter should decrements value", () => {
    render(<Counter initialValue={0}/>);
    const decrementButton = screen.getByRole("button", { name : "decrement" });

    fireEvent.click(decrementButton);

    const expectedValue = screen.getByText(-1);
    expect(expectedValue).toBeInTheDocument();
  });
});