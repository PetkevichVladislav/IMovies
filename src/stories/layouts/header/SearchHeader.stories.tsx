import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '../../../components/Header/Header';

export default {
    title: "Layouts/Header/SearchHeader",
    component : Header,
    parameters: {
        docs: {
            description: {
                component: "Component renders detailed information about movie."
            }
        }
    }
} as ComponentMeta<typeof Header>

const Template : ComponentStory<typeof Header> = (params) =>  <Header />;

export const Default = Template.bind({});