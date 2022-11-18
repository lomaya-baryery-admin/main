import { Location, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useGetAllShiftsQuery } from '../../redux-store/api';
import { Modal } from '../../ui/modal';
import { Spinner } from '../../ui/spinner';
import { IAppLocation } from '../../utils';
import { ShiftConfigForm } from '../shift-config-form';
import { Layout } from './layout';
import { PageFinishedShift } from './shift-finished';
import { PagePreparingShift } from './shift-preparing';
import { PageStartedShift } from './shift-started';
import { PageShiftsAll } from './shifts';

export const AppRoutes = () => {
  const { isLoading } = useGetAllShiftsQuery('1');

  const { state, pathname, search }: IAppLocation = useLocation();
  const navigate = useNavigate();

  const rootLocation = state?.background || pathname.concat(search);

  return isLoading ? (
    <Spinner />
  ) : (
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
      {state?.background && (
        <Routes>
          <Route
            path="shifts/create"
            element={
              <Modal title={'Новая смена'} close={() => navigate(-1)}>
                <ShiftConfigForm shiftStatus="creating" />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
};
