import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInput } from '../../../components/Inputs/TextInput/TextInput';


export default {
    title: "Controls/Inputs/TextInput",
    component : TextInput,
    parameters: {
        docs: {
            description: {
                component: "Component renders text input."
            }
        }
    }
} as ComponentMeta<typeof TextInput>

const Template : ComponentStory<typeof TextInput> = (params) =>  <TextInput {...params}/>;

export const Default = Template.bind({});
Default.args = {
    placeholder: "start to input text",
    initialValue: null,
};