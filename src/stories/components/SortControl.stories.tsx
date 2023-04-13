import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SortControl } from '../../components/SortControl/SortControl';
import { SortOption } from '../../models/enum/SortOption';



export default {
    title: "Components/Sort",
    component : SortControl,
    parameters: {
        docs: {
            description: {
                component: "Component renders sort control with dropdown menu."
            }
        }
    }
} as ComponentMeta<typeof SortControl>

const Template : ComponentStory<typeof SortControl> = (args) =>  <SortControl {...args}/>;

export const Default = Template.bind({});
Default.args = {
    sortingOption: SortOption.ReleaseDate,
};