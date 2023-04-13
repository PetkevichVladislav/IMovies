import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MovieDetails } from '../../../components/MovieDetails/MovieDetails';

import Image from "../../../components/MovieCard/Bitmap.png"

export default {
    title: "Layouts/Header/MovieDetails",
    component : MovieDetails,
    parameters: {
        docs: {
            description: {
                component: "Component renders detailed information about movie."
            }
        }
    }
} as ComponentMeta<typeof MovieDetails>

const Template : ComponentStory<typeof MovieDetails> = (params) =>  <MovieDetails {...params}/>;

export const Default = Template.bind({});
Default.args = {
   movie : {
    imagePath: Image,
    title: 'Example Movie',
    releaseDate: new Date(2022, 10, 12),    
    genres: ['Action', 'Drama'],
    rating: 7.8,
    runtime: 180,
    id: "movie-id",
    overview: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra"
   }
};