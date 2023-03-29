import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CreateMovieModal } from '../../components/Modals/CreateMovieModal/CreateMovieModal';


export default {
    title: "Modals/CreateMovieModal",
    component : CreateMovieModal,
    parameters: {
        docs: {
            description: {
                component: "Component renders text input."
            }
        }
    }
} as ComponentMeta<typeof CreateMovieModal>

const Template : ComponentStory<typeof CreateMovieModal> = (params) =>  <CreateMovieModal {...params}/>;

export const Default = Template.bind({});
Default.args = {
    onClose: () => console.log("closed"),
    onSubmit: () => console.log("submit"),
    title: "Create movie",
};