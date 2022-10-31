import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Calendar } from './calendar';

export default {
  title: 'Calendar',
  component: Calendar,
} as ComponentMeta<typeof Calendar>;

export const Default: ComponentStory<typeof Calendar> = (args) => <Calendar />;
