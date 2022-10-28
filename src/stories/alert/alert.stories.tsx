import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Alert } from './alert';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    title: {
        description: 'Текст',
    },
    className: {
        description: 'Имя класса',
    }
  }

} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});

export const Title = Template.bind({});

Title.args = {
  title: 'Отчёты на проверку отсутствуют',
};