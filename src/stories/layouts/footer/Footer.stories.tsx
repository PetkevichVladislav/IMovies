import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer from '../../../components/Footer/Footer';

export default {
    title: "Layouts/Footer/DefaultFooter",
    component : Footer,
    parameters: {
        docs: {
            description: {
                component: "Component renders default footer."
            }
        }
    }
} as ComponentMeta<typeof Footer>

const Template : ComponentStory<typeof Footer> = (params) =>  <Footer/>;

export const Default = Template.bind({});