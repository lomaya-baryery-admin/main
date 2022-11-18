import { useGetAllShiftsQuery } from '../../redux-store/api';
import { AppRoutes } from '../pages';
import { withProviders } from './providers';
import './styles/index.css';

const App = () => {
  useGetAllShiftsQuery('1');

  return <AppRoutes />;
};

export default withProviders(App);
