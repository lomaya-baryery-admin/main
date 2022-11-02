import { ComponentStory } from '@storybook/react';
import { AllShiftData, shiftColumns, testColumns, testData } from '../../utils/tableColumns';
import { Table } from './Table';

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
      description: 'Массив с описанием колонок. Описываем самостоятельно по образцу. Подробное описание в документации: https://tanstack.com'
    }
  }
}

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Default = Template.bind({});
Default.args = {
  defaultData: testData,
  columnsData: testColumns,
};

export const AllShiftTable = Template.bind({});
AllShiftTable.args = {
  defaultData: AllShiftData,
  columnsData: shiftColumns,
};