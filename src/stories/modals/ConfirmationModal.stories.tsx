import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConfirmationModal } from '../../components/Modals/ConfirmationModal/ConfirmationModal';


export default {
    title: "Modals/ConfirmationModal",
    component : ConfirmationModal,
    parameters: {
        docs: {
            description: {
                component: "Component renders confirmation modal window."
            }
        }
    }
} as ComponentMeta<typeof ConfirmationModal>

const Template : ComponentStory<typeof ConfirmationModal> = (params) =>  <ConfirmationModal {...params}/>;

export const Default = Template.bind({});
Default.args = {
    onClose: () => console.log("closed"),
    onConfirm: () => console.log("confirm"),
    title: "Delete movie",
    children: "Are you sure you want to delete this movie?",
    isOpened: true,
};