import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from './link';
import './link.css';

export default {
  title: 'link',
  Comment: Link,
  argTypes: {
    linkName: {
      type: 'string',
      defaultValue: 'Имя Фамилия',
      description: 'имя ссылки',
    },
    size: {
      type: 'string',
      description: 'ширина (max-content, min-content), размер шрифта и отступы',
      defaultValue: 'default',
      options: ['default', 'small'],
      control: {
        type: 'radio',
      },
    },
    onClick: {
      type: 'function',
      description: 'принимает значением функцию',
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  linkName: 'Имя Фамилия',
};

export const Small = Template.bind({});
Small.args = {
  linkName: 'Имя Фамилия',
  size: 'small',
};
