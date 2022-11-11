import { ComponentStory } from '@storybook/react';
import {
  allReportsColumns,
  AllReportsData,
  AllShiftData,
  shiftColumns,
  testColumns,
  testData,
} from '../../utils/tableColumns';
import { Table } from '../../ui/table/Table';
import { CalendarTable } from '../../components/calendar-table/calendar-table';
import { dataForCalendarTable } from '../../components/calendar-table/mockData';

export default {
  title: 'UITable',
  component: Table,
  argTypes: {
    defaultData: {
      type: 'object[]',
      description: 'Массив объектов с данными для наполнения таблицы. Данные приходят с бэка',
    },
    columnsData: {
      type: 'array',
      description:
        'Массив с описанием колонок. Описываем самостоятельно по образцу. Подробное описание в документации: https://tanstack.com',
    },
    rowHeight: {
      type: 'number',
      description: 'Высота колонок',
      defaultValue: 40,
      options: [40, 60, 80],
      control: {
        type: 'radio',
      },
    },
    renderSubComponent: {
      type: 'function',
      description: 'Функция для рендера контента подстроки',
    },
    getRowCanExpand: {
      type: 'function',
      description: 'Функция для установки параметра необходимости раскрытия строки',
    },
    initialExpandedRows: {
      type: 'object',
      description: 'Параметр со списком строк раскрытых по-умолчанию. Принимает id строки как ключ',
    },
  },
};

const renderSubComponent = ({ row }: { row: object }) => (
  <CalendarTable
    tableData={dataForCalendarTable}
    withoutExternalBorders
    isShowTitle
    shiftStartDate = '2022-09-25'
  />
);

const Template: ComponentStory<typeof Table> = (args) => (
  <div style={{ width: '1090px' }}>
    <Table {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  defaultData: testData,
  columnsData: testColumns,
  rowHeight: 60,
};

export const AllShiftTable = Template.bind({});
AllShiftTable.args = {
  defaultData: AllShiftData,
  columnsData: shiftColumns,
  rowHeight: 60,
};

export const AllReportsTable = Template.bind({});
AllReportsTable.args = {
  defaultData: AllReportsData,
  columnsData: allReportsColumns,
  rowHeight: 80,
};

export const TableWithCalendarTable = Template.bind({});
TableWithCalendarTable.args = {
  defaultData: AllShiftData,
  columnsData: shiftColumns,
  rowHeight: 60,
  renderSubComponent,
  getRowCanExpand: () => true,
  initialExpandedRows: { '1': true },
};
