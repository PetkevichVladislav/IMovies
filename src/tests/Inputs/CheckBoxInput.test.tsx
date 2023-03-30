import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { CheckBoxInput, ICheckBoxInput } from '../../components/Inputs/CheckBoxInput/CheckBoxInput';

describe("Date time Input", () => {
    const onChangeCallback = jest.fn();
    const textInputData : ICheckBoxInput = {
        label: "check if you junior",
        name: "checker",
        onChange: onChangeCallback,
    };

    it("When data is valid component should renders correctly", () =>{
        const tree = renderer.create(<CheckBoxInput {...textInputData}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});