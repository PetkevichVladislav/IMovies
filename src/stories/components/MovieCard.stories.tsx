import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MovieCard } from '../../components/MovieCard/MovieCard';

export default {
    title: "Components/MovieCard",
    component : MovieCard,
    parameters: {
        docs: {
            description: {
                component: "Component renders movie card."
            }
        }
    }
} as ComponentMeta<typeof MovieCard>

const Template : ComponentStory<typeof MovieCard> = (args) =>  <MovieCard {...args}/>;

export const Default = Template.bind({});