import { Navigate, Route, Routes, useMatch } from 'react-router-dom';
import { Layout } from './layout';
import { PageShiftsAll } from './shifts';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to={'shifts/all'} replace />} />
        <Route path="shifts/all" element={<PageShiftsAll />} />
        <Route path="shifts/started" element={<div>2</div>} />
        <Route path="shifts/preparing" element={<div>3</div>} />
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
