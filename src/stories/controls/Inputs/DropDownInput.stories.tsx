import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CheckBoxInput } from '../../../components/Inputs/CheckBoxInput/CheckBoxInput';
import { DropDownInput } from '../../../components/Inputs/DropDownInput/DropDownInput';

export default {
    title: "Controls/Inputs/DropDownInput",
    component: DropDownInput,
    parameters: {
        docs: {
            description: {
                component: "Component renders drop down input."
            }
        }
    }
} as ComponentMeta<typeof DropDownInput>

const Template: ComponentStory<typeof DropDownInput> = (params) => <DropDownInput {...params} />;

const checkboxes = <>
    <CheckBoxInput label='first' onChange={(event: React.ChangeEvent<HTMLInputElement>) => console.log("1:" + event.target.checked)} />,
    <CheckBoxInput label='second' onChange={(event: React.ChangeEvent<HTMLInputElement>) => console.log("2:" + event.target.checked)} />
</>;

export const Default = Template.bind({});
Default.args = {
    placeholder: "start to input text",
    children: checkboxes,
};
