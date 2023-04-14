import { ComponentStory, ComponentMeta } from '@storybook/react';
import List from '../../../../components/List/List';
import { Genre } from '../../../../models/enum/MenuGenre';


export default {
    title: "Shared/Controls/Lists/MovieList",
    component : List,
    parameters: {
        docs: {
            description: {
                component: "Component renders list of genres with predefind selected genre with ability to select another one via click."
            }
        }
    }
} as ComponentMeta<typeof List>

const Template : ComponentStory<typeof List> = (params) =>  <List {...params}/>;

export const Pink = Template.bind({});
Pink.args = {
    genreNames : Object.values(Genre),
};

export const Blue = Template.bind({});
Blue.args = {
    genreNames : Object.values(Genre),
    selectedItemColor: "blue",
};