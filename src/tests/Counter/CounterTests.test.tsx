import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import Counter from '../../components/Counter/Counter';

describe("Counter", () => {
  it("When data is valid component should renders correctly", () => {
    const tree = renderer.create(<Counter count={0}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("When counter creates initial value should setups correctly", () => {
    render(<Counter count={5}/>);
    const expectedValue = screen.getByText(5);
    expect(expectedValue).toBeInTheDocument();
  });
});