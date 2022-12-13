import { useCallback } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Modal } from '../../ui/modal';
import { IAppLocation } from '../../utils';
import { FinalMessageForm } from '../final-message-form';
import { ShiftSettingsForm } from '../shift-settings-form';
import { Layout } from './layout';
import { PageRequestsPending } from './requests-pending';
import { PageFinishedShift } from './shift-finished';
import { PagePreparingShift } from './shift-preparing';
import { PageStartedShift } from './shift-started';
import { PageShiftsAll } from './shifts';
import { PageTasksSlider } from './tasks-slider';
import { PageTasksUnderReview } from './tasks-under-review';

export const AppRoutes = () => {
  const { state, pathname, search }: IAppLocation = useLocation();
  const navigate = useNavigate();

  const rootLocation = state?.background || pathname.concat(search);

  const handleCloseModal = useCallback(() => navigate(-1), []);

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
          <Route path="shifts/started/*" element={<PageStartedShift />} />
          <Route path="shifts/finished/:id" element={<PageFinishedShift />} />
          <Route path="requests/pending" element={<PageRequestsPending />} />
          <Route
            path="requests/considered"
            element={<h1 className="text text_type_main-extra-large">Considered Page</h1>}
          />
          <Route path="users" element={<div>6</div>} />
          <Route path="tasks/under_review" element={<PageTasksUnderReview />} />
          <Route path="tasks/under_review/:id" element={<PageTasksSlider />} />
          <Route path="tasks/reviewed" element={<div>8</div>} />
          <Route path="tasks/reviewed/:id" element={<div>8</div>} />
          <Route path="tasks/declined" element={<div>9</div>} />
          <Route path="tasks/declined/:id" element={<div>9</div>} />
          <Route path="*" element={<div>страница не найдена </div>} />
        </Route>
      </Routes>
      {state?.background && (
        <Routes>
          <Route
            path="shifts/create"
            element={
              <Modal title={'Новая смена'} close={handleCloseModal}>
                <ShiftSettingsForm shiftStatus="creating" />
              </Modal>
            }
          />
          <Route
            path="shifts/preparing/settings"
            element={
              <Modal title={'Редактировать смену'} close={handleCloseModal}>
                <ShiftSettingsForm shiftStatus="preparing" />
              </Modal>
            }
          />
          <Route
            path="shifts/started/settings"
            element={
              <Modal title={'Редактировать смену'} close={handleCloseModal}>
                <ShiftSettingsForm shiftStatus="started" />
              </Modal>
            }
          />
          <Route
            path="shifts/started/message"
            element={
              <Modal title={'Редактировать сообщение'} close={handleCloseModal}>
                <FinalMessageForm />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};
