import AppRoutes from '../app-routes/app-routes';
import { HashRouter,BrowserRouter } from 'react-router-dom';
import { useGetDefaultQuery, useShiftsPostMutation } from '../../redux-store/api-slice/api-slice';

fetch('http://51.250.32.125:8000/hello')
  .then((res) => res.json())
  .then((data) => console.log(data));

const App = () => {
  const { data = '', isLoading, isError } = useGetDefaultQuery(); //пример для get-запроса
  const [shiftPost, {}] = useShiftsPostMutation(); //пример для post-запроса

  const handleShiftPost = async () => {
    await shiftPost({
      started_at: '2022-10-30T16:55:31.422Z',
      finished_at: '2022-10-30T16:55:31.422Z',
    }).unwrap();
  };

  return (
    <div>
      <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </div>
  );
};
export default App;
