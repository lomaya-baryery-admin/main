import { Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/layout';
import ReportsPage from '../../pages/reportsPage/ReportsPage';

export const AppRoutes = () => (
  <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/shift/all" element={<div>1</div>} />
        <Route path="/shift/current" element={<div>2</div>} />
        <Route path="/shift/new" element={<div>3</div>} />
        <Route path="/invites/active" element={<div>4</div>} />
        <Route path="/invites/reviewed" element={<div>5</div>} />
        <Route path="/participants" element={<div>6</div>} />
        <Route path="/report/noverified" element={<ReportsPage />} />
        <Route path="/report/verified" element={<div>8</div>} />
        <Route path="/report/rejected" element={<div>9</div>} />
        <Route path="*" element={<div>страница не найдена </div>} />
      </Route>
    </Routes>
  </div>
);
