import AppRoutes from '../app-routes/app-routes';
import { HashRouter,BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </div>
  );
};
export default App;
