import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckBoxInput } from '../../../components/Inputs/CheckBoxInput/CheckBoxInput';

export default {
    title: "Controls/Inputs/CheckBoxInput",
    component : CheckBoxInput,
    parameters: {
        docs: {
            description: {
                component: "Component check box input."
            }
        }
    }
} as ComponentMeta<typeof CheckBoxInput>

const Template : ComponentStory<typeof CheckBoxInput> = (params) =>  <CheckBoxInput {...params}/>;

export const Default = Template.bind({});
Default.args = {
    label: "Checkbox",
    onChange: (event) => {console.log(event.target.checked)},
};