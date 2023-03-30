import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { DateTimeInput, IDateTimeInput } from '../../components/Inputs/DateTimeInput/DateTimeInput';

describe("Date time Input", () => {
    const DateTimeInputData : IDateTimeInput = {
        initialValue: "15-03-2021",
        name: "date",
    };

    it("When data is valid component should renders correctly", () =>{
        const tree = renderer.create(<DateTimeInput {...DateTimeInputData}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("when input is created it should be properly initialized", () =>{
        render(<DateTimeInput {...DateTimeInputData}/>);
        const input = screen.getByTestId("date-time-input");
        expect(input).toHaveAttribute("name",DateTimeInputData.name);
        expect(input).toHaveAttribute("value",DateTimeInputData.initialValue);
    });
});