import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { SortControl, SortOption } from '../../components/SortControl/SortControl';

describe("Sort control", () => {
    const onClickCallback = jest.fn();
    const sortControlData = {
        sortingOption : SortOption.ReleaseDate,
        onChange: (option: SortOption) => onClickCallback(option),
    };

    it("When data is valid component should renders correctly", () =>{
        const tree = renderer.create(<SortControl {...sortControlData}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();;
    });

    it("when user opens form options should be according to the enum", () =>{
        render(<SortControl {...sortControlData}/>);
        expect(screen.getByText(SortOption.ReleaseDate)).toBeInTheDocument();
        expect(screen.getByText(SortOption.Title)).toBeInTheDocument();
    });
});