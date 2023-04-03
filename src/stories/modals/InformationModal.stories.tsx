import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InformationModal } from '../../components/Modals/InformationModal/InformationModal';


export default {
    title: "Modals/InformationModal",
    component : InformationModal,
    parameters: {
        docs: {
            description: {
                component: "Component renders information modal window."
            }
        }
    }
} as ComponentMeta<typeof InformationModal>

const Template : ComponentStory<typeof InformationModal> = (params) =>  <InformationModal {...params}/>;

export const Default = Template.bind({});
Default.args = {
    onClose: () => console.log("closed"),
    title: "Movie created",
    children: "The movie has been added to database successfully",
    isOpened: true,
};