import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useGetDefaultQuery, useShiftsPostMutation } from './redux-store/api-slice/api-slice';
import Home from './pages';
import { Reports } from './components/reports/reports';
import { Header } from './components/header/header';

function App() {
  const { data = '', isLoading, isError } = useGetDefaultQuery(); //пример для get-запроса
  const [shiftPost, {}] = useShiftsPostMutation(); //пример для post-запроса

  const handleShiftPost = async () => {
    await shiftPost({
      started_at: '2022-10-30T16:55:31.422Z',
      finished_at: '2022-10-30T16:55:31.422Z',
    }).unwrap();
  };

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="navbar"></div>
        <Reports />
      </main>
    </div>
  );
}

export default App;
