import { AppRoutes } from '../pages';
import {
  useGetDefaultQuery,
  useShiftsPostMutation,
  useShiftsGetQuery,
} from '../../redux-store/api-slice/api-slice';
import { withProviders } from './providers';
import './styles/index.css';

const App = () => {
  // const { data, isLoading, isError } = useGetDefaultQuery();
  // const [shiftPost, { data: shiftData }] = useShiftsPostMutation();
  // const { data: obj } = useShiftsGetQuery(shiftData?.id);

  // const handleShiftPost = async () => {
  //   await shiftPost({
  //     started_at: '2022-11-02T17:00:32.625Z',
  //     finished_at: '2022-11-02T17:00:32.625Z',
  //   }).unwrap();
  // };

  return <AppRoutes />;
};
export default withProviders(App);
