import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { ITextAreaInput, TextAreaInput } from '../../components/Inputs/TextAreaInput/TextAreaInput';

describe("Text Area Input", () => {
    const textAreaInputData : ITextAreaInput = {
        placeholder: "input your data",
        value: "text",
        name: "data",
        
    };

    it("When data is valid component should renders correctly", () =>{
        const tree = renderer.create(<TextAreaInput {...textAreaInputData}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it("when input is created it should be properly initialized", () =>{
        render(<TextAreaInput {...textAreaInputData}/>);
        const input = screen.getByTestId("text-area-input");
        expect(input).toHaveAttribute("name",textAreaInputData.name);
        expect(input).toHaveAttribute("placeholder",textAreaInputData.placeholder);
    });
});