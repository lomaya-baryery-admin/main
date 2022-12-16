import { AppRoutes } from '../pages';
import { withProviders } from './providers';
import './styles/index.css';

const App = () => {
  return <AppRoutes />;
};

export default withProviders(App);
