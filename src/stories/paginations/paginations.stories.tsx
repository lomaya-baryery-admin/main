import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Paginations } from './paginations';

export default {
  title: 'Paginations',
  Comment: Paginations,
  argTypes: {
    counterPages: {
      type: 'number',
      defaultValue: '5',
      description: 'Общее количество страниц',
    },

    currentPage: {
      type: 'number',
      defaultValue: '1',
      description: 'Номер активной страницы',
    },

    onClick: {
      type: 'function',
      description:
        'необходимо использовать useState для изменения текущей страницы через setCurrentPage',
    },
  },
} as ComponentMeta<typeof Paginations>;

const Template: ComponentStory<typeof Paginations> = (args) => <Paginations {...args} />;

export const Default = Template.bind({});
Default.args = {
  counterPages: 10,
  currentPage: 5,
};
