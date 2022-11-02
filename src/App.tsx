
import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useGetDefaultQuery, useShiftsPostMutation } from './redux-store/api-slice/api-slice'
import { Table } from './stories/table/Table';
import { AllShiftData, shiftColumns } from './utils/tableColumns';

fetch('http://51.250.32.125:8000/hello')
  .then(res => res.json())
  .then(data => console.log(data))

function App() {

  const { data = '', isLoading, isError } = useGetDefaultQuery() // пример для get-запроса
  const [shiftPost, { }] = useShiftsPostMutation() // пример для post-запроса


  const handleShiftPost = async () => {
    await shiftPost({
      started_at: "2022-10-30T16:55:31.422Z",
      finished_at: "2022-10-30T16:55:31.422Z"
    }).unwrap()
  }

  const [count, setCount] = useState(0);

  return (
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank" rel="noreferrer">
    //       {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button type="button" onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <button type="button" onClick={handleShiftPost}>postShifts</button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    // </div>
    <Table defaultData={AllShiftData} columnsData={shiftColumns} />
  );
}

export default App;
