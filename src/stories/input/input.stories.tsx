import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../../ui/inputText';

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
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
