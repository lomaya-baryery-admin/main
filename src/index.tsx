import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux-store/store';
import App from './components/app/app';
import { Table } from './ui/table/Table';
import { dataForCalendarTable } from './components/calendar-table/mockData';
import { CalendarTable as CalTable } from './components/calendar-table/calendar-table';
import {
  AllShiftData,
  shiftColumns,
} from './utils/tableColumns';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Table defaultData={AllShiftData} columnsData={shiftColumns} rowHeight={60} renderSubComponent={({row}: any) => {console.log(row);
      return <CalTable tableData={dataForCalendarTable} withoutExternalBorders isShowTitle/>}} getRowCanExpand={() => true} initialExpandedRows={{1: true, 2: true}}/>
      <div>jjll</div>

<CalTable tableData={dataForCalendarTable} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
