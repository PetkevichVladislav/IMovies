import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SortControl, SortOption } from '../../components/SortControl/SortControl';



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
    onChange: (currentOption:SortOption) => console.log(currentOption),
    sortingOption: SortOption.ReleaseDate,
};