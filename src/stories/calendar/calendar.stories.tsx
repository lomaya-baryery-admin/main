import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Calendar } from './Calendar';

export default {
  title: 'Example/Calendar',
  component: Calendar,
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => <Calendar />;
export const Primary = Template.bind({});
