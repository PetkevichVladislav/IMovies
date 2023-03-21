import { ComponentStory, ComponentMeta } from '@storybook/react';
import List from '../../../../components/List/List';


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
    itemNames : ["Action", "Adventure", "Comedy", "Drama", "Sci-Fi", "Thriller", "Western"],
    preselectedItemName: "Sci-Fi",
    onSelect: (itemName : string) => console.log(itemName),
};

export const Blue = Template.bind({});
Blue.args = {
    itemNames : ["Action", "Adventure", "Comedy", "Drama", "Sci-Fi", "Thriller", "Western"],
    preselectedItemName: "Sci-Fi",
    onSelect: (itemName : string) => console.log(itemName),
    selectedItemColor: "blue",
};