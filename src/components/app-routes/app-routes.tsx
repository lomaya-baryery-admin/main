import { Route, Routes } from 'react-router-dom';
import { Layout } from '../layout/layout';
// удалить импорт ниже
import ParticipantReport from '../../pages/participantReport'
// выше
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
        <Route path="/report/noverified" element={<div>7</div>} />
        <Route path="/report/verified" element={<div>8</div>} />
        <Route path="/report/rejected" element={<div>9</div>} />
        <Route path="*" element={<div>страница не найдена </div>} />
        // потом удалить
        <Route path="/report" element={<ParticipantReport />} />
        // потом удалить
      </Route>
    </Routes>
  </div>
);
