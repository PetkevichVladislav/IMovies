import { ComponentStory, ComponentMeta } from '@storybook/react';

import Counter from '../components/Counter/Counter';

export default {
    title: "Counter",
    component : Counter,
    parameters: {
        docs: {
            description: {
                component: "Component renders count of movies with ability to increment and dicrement by clicking on the buttons."
            }
        }
    }
} as ComponentMeta<typeof Counter>

const Template : ComponentStory<typeof Counter> = (params) =>  <Counter {...params}/>;

export const Default = Template.bind({});
Default.args = {
    initialValue : 0,
};