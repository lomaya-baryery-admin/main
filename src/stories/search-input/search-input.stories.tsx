import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchInput } from '../../ui/search-Input/search-input';

export default {
  title: 'SearchInput',
  component: SearchInput,
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
    onClear: {
      description: 'Clear input',
      type: 'function',
    },
  },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});
