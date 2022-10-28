import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Change } from './changes';

export default {
  title: 'Change',
  component: Change,
  argTypes: {
    changeTitle: {
      options: ['current', 'new', 'past'],
    },
  },
} as ComponentMeta<typeof Change>;

const Template: ComponentStory<typeof Change> = (args) => <Change {...args} />;

export const Changes = Template.bind({});

Changes.args = {
  changeTitle: 'current',
};
