import { BrowserRouter } from 'react-router-dom';
import {AppRoutes} from '../app-routes/app-routes';
import {
  useGetDefaultQuery,
  useShiftsPostMutation,
  useShiftsGetQuery,
} from '../../redux-store/api-slice/api-slice';

const App = () => {
  const { data, isLoading, isError } = useGetDefaultQuery();
  const [shiftPost, { data: shiftData }] = useShiftsPostMutation();
  const { data: obj } = useShiftsGetQuery(shiftData?.id);

  const handleShiftPost = async () => {
    await shiftPost({
      started_at: '2022-11-02T17:00:32.625Z',
      finished_at: '2022-11-02T17:00:32.625Z',
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
