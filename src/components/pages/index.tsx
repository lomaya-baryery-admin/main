import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Modal } from '../../ui/modal';
import { IAppLocation } from '../../utils';
import { ShiftSettingsForm } from '../shift-settings-form';
import { Layout } from './layout';
import { PagePreparingShift } from './shift-preparing';
import { PageStartedShift } from './shift-started';
import { PageShiftsAll } from './shifts';

export const AppRoutes = () => {
  const { state, pathname, search }: IAppLocation = useLocation();
  const navigate = useNavigate();

  const rootLocation = state?.background || pathname.concat(search);

  return (
    <>
      <Routes location={rootLocation}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Navigate to={{ pathname: 'shifts/all', search: 'page=1' }} replace />}
          />
          <Route path="shifts/all" element={<PageShiftsAll />} />
          <Route path="shifts/preparing/" element={<PagePreparingShift />} />
          <Route path="shifts/started/" element={<PageStartedShift />} />
          {/* <Route path="shifts/finished/:id" element={<PageFinishedShift />} /> */}
          <Route path="requests/pending" element={<div>4</div>} />
          <Route path="requests/considered" element={<div>5</div>} />
          <Route path="users" element={<div>6</div>} />
          <Route path="tasks/under_review" element={<div>7</div>} />
          <Route path="tasks/reviewed" element={<div>8</div>} />
          <Route path="tasks/declined" element={<div>9</div>} />
          <Route path="*" element={<div>страница не найдена </div>} />
        </Route>
      </Routes>
      {state?.background && (
        <Routes>
          <Route
            path="shifts/create"
            element={
              <Modal title={'Новая смена'} close={() => navigate(-1)}>
                <ShiftSettingsForm shiftStatus="creating" />
              </Modal>
            }
          />
          <Route
            path="shifts/preparing/settings"
            element={
              <Modal title={'Редактировать смену'} close={() => navigate(-1)}>
                <ShiftSettingsForm shiftStatus="preparing" />
              </Modal>
            }
          />
          <Route
            path="shifts/started/settings"
            element={
              <Modal title={'Редактировать смену'} close={() => navigate(-1)}>
                <ShiftSettingsForm shiftStatus="started" />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};