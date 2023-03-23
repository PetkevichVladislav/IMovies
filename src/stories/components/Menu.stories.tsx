import { ComponentStory, ComponentMeta } from '@storybook/react';

import Menu from '../../components/Menu/Menu';

export default {
    title: "Components/Menu",
    component : Menu,
    parameters: {
        docs: {
            description: {
                component: "Component renders menu."
            }
        }
    }
} as ComponentMeta<typeof Menu>

const Template : ComponentStory<typeof Menu> = () =>  <Menu/>;

export const Default = Template.bind({});
Default.args = {
    initialValue : 0,
};