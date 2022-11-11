import { ComponentStory } from '@storybook/react';
import { CalendarTable } from '../../components/calendar-table/calendar-table';
import { dataForCalendarTable } from '../../components/calendar-table/mockData';

export default {
  title: 'Calendar table',
  component: CalendarTable,
  argTypes: {
    tableData: {
      type: 'object[]',
      description: 'Массив объектов с данными для наполнения таблицы',
    },
    isShowTitle: {
      type: 'boolean',
      description: 'Флаг, отвечающий за отображение заголовка таблицы',
    },
    withoutExternalBorders: {
      type: 'boolean',
      description:
        'Флаг, отвечающий за отображение внешних границ таблицы. Необходим при встраивании таблицы в другую таблицу',
    },
    tableBorderBottomRadius: {
      type: 'string',
      description:
        'Размер радиуса нижних углов таблицы. Необходим при встраивании в другую таблицу',
    },
    shiftStartDate: {
      type: 'string',
      description:
        'Дата началы смены в формате yyyy-mm-dd',
    },
  },
};

const Template: ComponentStory<typeof CalendarTable> = (args) => (
  <div style={{ width: '1088px' }}>
    <CalendarTable {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  tableData: dataForCalendarTable,
  isShowTitle: true,
  shiftStartDate: '2022-09-25',
};
