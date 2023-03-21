import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MovieCard } from '../../components/MovieCard/MovieCard';

import Image from "../../components/MovieCard/Bitmap.png"

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
Default.args = {
    imageUrl: Image,
    movieName: 'Example Movie',
    releaseYear: '2022',
    genres: ['Action', 'Drama'],
};