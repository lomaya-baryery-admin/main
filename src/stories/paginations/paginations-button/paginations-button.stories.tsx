import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PaginationsButton } from './paginations-button';


export default {
  title: 'Paginations-button',
  Comment: PaginationsButton,
  argTypes: {
    buttonName: {
      type: 'string',
      defaultValue: '1',
      description: 'имя кнопки',
    },
    buttonActive: {
      type: 'string',
      description: 'определяет стиль рамки у кнопки',
      defaultValue: 'active',
      options: ['active', 'inactive', 'disabled'],
      control: {
        type: 'radio',
      },
    },
    textActive: {
      type: 'string',
      description: 'определяет цвет текста у кнопки',
      defaultValue: 'active',
      options: ['active', 'inactive'],
      control: {
        type: 'radio',
      },
    },
    onClick: {
      type: 'function',
      description: 'принимает значением функцию',
    },
  },
} as ComponentMeta<typeof PaginationsButton>;

const Template: ComponentStory<typeof PaginationsButton> = (args) => (
  <PaginationsButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  buttonName: '1',
};

export const Inactive = Template.bind({});
Inactive.args = {
  buttonName: '2',
  buttonActive: 'inactive',
  textActive: 'active',
};

export const Disabled = Template.bind({});
Disabled.args = {
  buttonName: '>',
  buttonActive: 'disabled',
  textActive: 'inactive',
};
