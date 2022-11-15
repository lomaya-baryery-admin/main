import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../../ui/input/input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    value: {
      description: 'Значение поля',
      type: 'string',
      defaultValue: '',
    },
    onChange: {
      description: 'Optional change handler',
      type: 'function',
    },
    placeholder: {
      description: 'Тест для плейсхолдера',
      type: 'string',
    },
    name: {
      description: 'Название для инпута',
      type: 'string',
    },
    required: {
      description: 'Параметр обязательности заполнения инпута',
      type: 'boolean',
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
