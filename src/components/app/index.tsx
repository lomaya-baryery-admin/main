import { AppRoutes } from '../pages';
import {
  useGetDefaultQuery,
  useShiftsPostMutation,
  useShiftsGetQuery,
} from '../../redux-store/api-slice/api-slice';
import { withProviders } from './providers';
import './styles/index.css';

const App = () => <AppRoutes />;

export default withProviders(App);
