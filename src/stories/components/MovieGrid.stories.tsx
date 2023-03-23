import { ComponentStory, ComponentMeta } from '@storybook/react';
import MovieGrid from '../../components/MovieGrid/MovieGrid';

export default {
    title: "Components/MovieGrid",
    component : MovieGrid,
    parameters: {
        docs: {
            description: {
                component: "Component renders component that shows movie cards."
            }
        }
    }
} as ComponentMeta<typeof MovieGrid>

const Template : ComponentStory<typeof MovieGrid> = ( ) =>  <MovieGrid/>;

export const Default = Template.bind({});
Default.args = {
    initialValue : 0,
};