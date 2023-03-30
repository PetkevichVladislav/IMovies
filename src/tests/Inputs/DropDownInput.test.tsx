import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { DropDownInput, IDropDownInput } from '../../components/Inputs/DropDownInput/DropDownInput';



describe("Drop Down Input", () => {
    const dropDownInputParams : IDropDownInput = {
        placeholder: "Select value",
        children: <div data-testid="children"></div>
    };

    it("When data is valid component should renders correctly", () =>{
        const tree = renderer.create(<DropDownInput {...dropDownInputParams}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it("when user clicks on container it should show dpor down", () =>{
        render(<DropDownInput {...dropDownInputParams}/>);
        const container = screen.getByTestId("drop-down-container");
        fireEvent.click(container);
        const input = screen.getByTestId("drop-down-content");
        expect(input).toContainElement(screen.getByTestId("children"));
    });
});