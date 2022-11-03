import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/index.css';
import { store } from './redux-store/store';
import { Table } from './components/table/table'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Table />
    </Provider>
  </React.StrictMode>
);
