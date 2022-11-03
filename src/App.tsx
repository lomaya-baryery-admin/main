import { useState } from 'react';
import './App.css';
import {
  useGetDefaultQuery,
  useShiftsPostMutation,
  useShiftsGetQuery,
} from './redux-store/api-slice/api-slice';

function App() {
  const { data, isLoading, isError } = useGetDefaultQuery();
  const [shiftPost, { data: shiftData }] = useShiftsPostMutation();
  const { data: obj } = useShiftsGetQuery(shiftData?.id);

  const handleShiftPost = async () => {
    await shiftPost({
      started_at: '2022-11-02T17:00:32.625Z',
      finished_at: '2022-11-02T17:00:32.625Z',
    }).unwrap();
  };

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="./vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button type="button" onClick={handleShiftPost}>
          postShifts
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
