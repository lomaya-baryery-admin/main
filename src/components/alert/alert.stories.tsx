import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { Alert } from './alert';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {
    name: {
        description: 'Текст',
        defaultValue: 'Отчёты на проверку отсутствуют'
    },
    className: {
        description: 'Имя класса',
    }
  }

} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'Отчёты на проверку отсутствуют',
};
