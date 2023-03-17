import { ComponentStory, ComponentMeta } from '@storybook/react';

import Search from '../components/Search/Search';

export default {
    title: "Search",
    component : Search,
    parameters: {
        docs: {
            description: {
                component: "Component renders input and button to search with ability to predefine initial query."
            }
        }
    }
} as ComponentMeta<typeof Search>

const Template : ComponentStory<typeof Search> = (params) =>  <Search {...params}/>;

export const Default = Template.bind({});
Default.args = {
    initialQuery: "Comedy",
    onSearch : (query: string) => console.log(query),
};