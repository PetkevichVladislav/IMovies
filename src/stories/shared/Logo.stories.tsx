import { ComponentStory, ComponentMeta } from '@storybook/react';
import Logo from '../../components/Logo/Logo';


export default {
    title: "Shared/Logo",
    component : Logo,
    parameters: {
        docs: {
            description: {
                component: "Component renders logo."
            }
        }
    }
} as ComponentMeta<typeof Logo>

const Template : ComponentStory<typeof Logo> = () =>  <Logo/>;

export const Base = Template.bind({});