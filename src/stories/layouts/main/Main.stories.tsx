import { ComponentStory, ComponentMeta } from '@storybook/react';

import MainPart from '../../../components/Main/Main';

export default {
  title: 'layouts/Main/Main',
  component: MainPart,
  parameters: {
    docs: {
      description: {
        component: 'Component renders main layout.',
      },
    },
  },
} as ComponentMeta<typeof MainPart>;

const Template: ComponentStory<typeof MainPart> = () => <MainPart />;

export const Base = Template.bind({});