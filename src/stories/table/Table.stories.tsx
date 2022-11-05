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
  },
};

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

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
