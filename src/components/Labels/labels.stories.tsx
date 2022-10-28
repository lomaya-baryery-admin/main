import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { LabelStatus } from './labels';

export default {
  title: 'Labels',
  component: LabelStatus,
  argTypes: {
    labelStatusTitle: {
      options: ['approved', 'rejected', 'review'],
    },
  },
} as ComponentMeta<typeof LabelStatus>;

const Template: ComponentStory<typeof LabelStatus> = (args) => <LabelStatus {...args} />;

export const Label = Template.bind({});

Label.args = {
  labelStatusTitle: 'approved',
};
