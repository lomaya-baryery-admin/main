import AppRoutes from '../app-routes/app-routes';
import { HashRouter } from "react-router-dom";
const App = () => {
  return (
    <div>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </div>
  );
};
export default App;
