import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { PageFinishedShift } from './shift-finished';
import { PagePreparingShift } from './shift-preparing';
import { PageStartedShift } from './shift-started';
import { PageShiftsAll } from './shifts';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={'shifts/all'} replace />} />
        <Route path="shifts/all" element={<PageShiftsAll />} />
        <Route path="shifts/preparing/:id" element={<PagePreparingShift />} />
        <Route path="shifts/started/:id" element={<PageStartedShift />} />
        <Route path="shifts/finished/:id" element={<PageFinishedShift />} />
        <Route path="requests/pending" element={<div>4</div>} />
        <Route path="requests/considered" element={<div>5</div>} />
        <Route path="users" element={<div>6</div>} />
        <Route path="tasks/under_review" element={<div>7</div>} />
        <Route path="tasks/reviewed" element={<div>8</div>} />
        <Route path="tasks/declined" element={<div>9</div>} />
        <Route path="*" element={<div>страница не найдена </div>} />
      </Route>
    </Routes>
  );
};
