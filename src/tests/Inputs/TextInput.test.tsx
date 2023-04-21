import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { ITextInput, TextInput } from "../../components/Inputs/TextInput/TextInput";

describe("Text Input", () => {
    const textInputData : ITextInput = {
        placeholder: "input your data",
        value: "15",
        name: "data",
    };

    it("When data is valid component should renders correctly", () =>{
        const tree = renderer.create(<TextInput {...textInputData}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("when input is created it should be properly initialized", () =>{
        render(<TextInput {...textInputData}/>);
        const input = screen.getByTestId("text-input");
        expect(input).toHaveAttribute("name",textInputData.name);
        expect(input).toHaveAttribute("value",textInputData.value);
        expect(input).toHaveAttribute("placeholder",textInputData.placeholder);
    });
});