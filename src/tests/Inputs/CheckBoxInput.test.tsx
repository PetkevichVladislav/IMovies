import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { CheckBoxInput, ICheckBoxInput } from '../../components/Inputs/CheckBoxInput/CheckBoxInput';

describe("Date time Input", () => {
    let isChecked = true;
    const onChangeCallback = jest.fn(() => isChecked = false);
    const textInputData : ICheckBoxInput = {
        label: "check if you junior",
        isChecked: isChecked,
        onChange: onChangeCallback,
    };

    it("When data is valid component should renders correctly", () =>{
        const tree = renderer.create(<CheckBoxInput {...textInputData}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});