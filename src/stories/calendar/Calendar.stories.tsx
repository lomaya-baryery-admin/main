import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Calendar } from './Calendar';

export default {
    title: 'Example/Calendar',
    component: Calendar,
  } as ComponentMeta<typeof Calendar>;

export const Template: ComponentStory<typeof Calendar> = (args) => <Calendar {...args} />;
export const Primary = Template.bind({});