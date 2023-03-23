import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PopupMenu } from '../../../../components/PopupMenu/PopupMenu';

export default {
    title: "Shared/Controls/Menus/PopupMenu",
    component : PopupMenu,
    parameters: {
        docs: {
            description: {
                component: "Component renders menu."
            }
        }
    }
} as ComponentMeta<typeof PopupMenu>

const Template : ComponentStory<typeof PopupMenu> = (params) =>  <PopupMenu {...params}/>;

export const Default = Template.bind({});
Default.args = {
    menuItems: [
        {
            onClick: () => console.log('Edit'),
            menuItem: 'Edit',
        },
        {
            onClick: () => console.log('Delete'),
            menuItem: 'Delete',
        }
    ]
};