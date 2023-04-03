import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CreateMovieModal } from '../../components/Modals/CreateMovieModal/CreateMovieModal';


export default {
    title: "Modals/CreateMovieModal",
    component : CreateMovieModal,
    parameters: {
        docs: {
            description: {
                component: "Component renders crete or update movie modal window."
            }
        }
    }
} as ComponentMeta<typeof CreateMovieModal>

const Template : ComponentStory<typeof CreateMovieModal> = (params) =>  <CreateMovieModal {...params}/>;

export const WithData = Template.bind({});
WithData.args = {
    onClose: () => console.log("closed"),
    onSubmit: () => console.log("submit"),
    title: "Create movie",
    isOpened: true,
};


export const WithoutData = Template.bind({});
WithoutData.args = {
    onClose: () => console.log("closed"),
    onSubmit: () => console.log("submit"),
    title: "Create movie",
    isOpened: true,
    movie: null,
};