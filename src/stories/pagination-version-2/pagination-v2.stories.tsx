import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from '../../ui/pagination/pagination';

export default {
  title: 'Pagination v2',
  component: Pagination,
  argTypes: {
    currentPageNum: {
      description: 'Номер текущей страницы',
      type: 'number',
    },
    totalPage: {
      description: 'Общее количество страниц',
      type: 'number',
    },
    onPageChange: {
      description: 'Функция, которая вызывается при клике на кнопки смены страниц',
      type: 'function',
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <div style={{ width: '923px', padding: '30px 20px', height: '50%', backgroundColor: 'white' }}>
    <Pagination {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  currentPageNum: 1,
  totalPage: 3,
  onPageChange: (page: number) => {},
};
