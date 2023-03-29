import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DateTimeInput } from '../../../components/Inputs/DateTimeInput/DateTimeInput';

export default {
    title: "Controls/Inputs/DateTimeInput",
    component : DateTimeInput,
    parameters: {
        docs: {
            description: {
                component: "Component renders text input."
            }
        }
    }
} as ComponentMeta<typeof DateTimeInput>

const Template : ComponentStory<typeof DateTimeInput> = (params) =>  <DateTimeInput {...params}/>;

export const Default = Template.bind({});