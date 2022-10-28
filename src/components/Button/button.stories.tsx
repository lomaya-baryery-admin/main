import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';


export default { 
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      description: 'Размер кнопки',
      defaultValue: 'large',
    },
    type: {
      description: 'Тип кнопки',
      defaultValue: 'main',
    },
    primary: {
      description: 'Статус кнопки',
      defaultValue: true,
    },
    label: {
      description: 'Имя кнопки',
      defaultValue: 'Начать смену',
    },
    onClick: {
      description: 'Optional click handler',
    }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const MainLarge = Template.bind({});
MainLarge.args = {
  type: 'main',
  size: 'large'
};

export const NotMainLarge = Template.bind({});
NotMainLarge.args = {
  type: 'not_main',
  size: 'large'
};

export const MainSmall = Template.bind({});
MainSmall.args = {
  type: 'main',
  size: 'small',
  label: 'Выбрать'
};

export const NotMainSmall = Template.bind({});
NotMainSmall.args = {
  type: 'not_main',
  size: 'small',
  label: 'Выбрать дату'
};

export const NotMainNegative = Template.bind({});
NotMainNegative.args = {
  type: 'not_main_negative',
  size: 'small',
  label: 'Завершить смену'
};




