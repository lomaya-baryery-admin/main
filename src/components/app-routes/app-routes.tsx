import { Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/layout';
import { ActiveApplicationsPage } from '../../pages/active-applications-page/active-applications-page';
import { ReviewedApplicationsPage } from '../../pages/reviewed-applications-page/reviewed-applications-page';
import { NewShift } from '../../pages/new-shift/new-shift';

export const AppRoutes = () => (
  <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/shift/all" element={<div>1</div>} />
        <Route path="/shift/current" element={<div>2</div>} />
        <Route path="/shift/new" element={<NewShift />} />
        <Route path="/invites/active" element={<ActiveApplicationsPage />} />
        <Route path="/invites/reviewed" element={<ReviewedApplicationsPage />} />
        <Route path="/participants" element={<div>6</div>} />
        <Route path="/report/noverified" element={<div>7</div>} />
        <Route path="/report/verified" element={<div>8</div>} />
        <Route path="/report/rejected" element={<div>9</div>} />
        <Route path="*" element={<div>страница не найдена </div>} />
      </Route>
    </Routes>
  </div>
);
