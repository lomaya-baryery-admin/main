import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux-store/store';
import App from './components/app/app';
import './index.css';
import { CalendarTable } from './components/calendar-table/calendar-table';
import { dataForCalendarTable } from './components/calendar-table/mockData';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div>lkjnlkn</div>
    <CalendarTable tableData={dataForCalendarTable} shiftStartDate="2022-09-25" withoutExternalBorders/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
