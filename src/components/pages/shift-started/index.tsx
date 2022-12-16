import { useCallback, useMemo } from 'react';
import cn from 'classnames';
import { ContentContainer } from '../../../ui/content-container';
import { ContentHeading } from '../../../ui/content-heading';
import { Table } from '../../../ui/table-native';
import { ShiftSettingsRow } from '../../shift-settings-row';
import { Alert } from '../../../ui/alert';
import { Loader } from '../../../ui/loader';
import { selectRootShifts } from '../../../redux-store/root-shifts';
import { useFinishShiftMutation, useGetShiftUsersQuery } from '../../../redux-store/api';
import { useAppSelector } from '../../../redux-store/hooks';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../../ui/button';
import { StartedShiftRow } from '../../started-shift-row';
import { ModalAlert } from '../../../ui/modal-alert';
import { skipToken } from '@reduxjs/toolkit/query/react';
import styles from './styles.module.css';

export const PageStartedShift = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { started } = useAppSelector(selectRootShifts);

  const {
    data,
    isLoading: isUsersLoading,
    isError: isUsersError,
  } = useGetShiftUsersQuery(started?.id ?? skipToken);

  const [
    setFinishShift,
    { isLoading: isSetFinishLoading, isSuccess: isSetFinishSuccess, isError: isSetFinishError },
  ] = useFinishShiftMutation();

  const openShiftSettings = useCallback(
    () =>
      navigate('settings', {
        state: {
          background: location.pathname,
        },
      }),
    []
  );

  const openFinalMessage = useCallback(
    () =>
      navigate('message', {
        state: {
          background: location.pathname,
        },
      }),
    []
  );

  const finishShift = useCallback(() => navigate('finish'), []);

  const participantsTable = useMemo(() => {
    if (!started) {
      return <Navigate to={'/shifts/all'} replace />;
    }

    if (isUsersLoading) {
      return <Loader extClassName={styles.shift__loader} />;
    } else if (isUsersError || !data) {
      return (
        <Alert extClassName={styles.participants__alert} title={'Что-то пошло не\u00A0 так'} />
      );
    } else if (data.members.length === 0) {
      return (
        <Alert
          extClassName={styles.participants__alert}
          title={'Нет принятых заявок на\u00A0участие'}
        />
      );
    } else {
      return (
        <Table
          extClassName={styles.shift__participantsTable}
          gridClassName={styles.participants__tableColumns}
          header={['Имя и фамилия', 'Город', 'Дата рождения', 'Статусы заданий']}
          renderRows={(rowStyles) => (
            <>
              {data.members.map((member) => (
                <StartedShiftRow
                  key={member.id}
                  cellsClassName={rowStyles}
                  userData={member.user}
                  tasksData={member.reports}
                  shiftStart={started.started_at}
                  shiftFinish={started.finished_at}
                />
              ))}
            </>
          )}
        />
      );
    }
  }, [isUsersLoading, isUsersError, data, started]);

  return !started ? (
    <Navigate to={'/shifts/all'} replace />
  ) : (
    <>
      <ContentContainer extClassName={styles.shift__headingContainer}>
        <ContentHeading title="Текущая смена" extClassName={styles.shift__heading}>
          <Button
            htmlType="button"
            type="secondary"
            size="small"
            extClassName={styles.shift__messageButton}
            onClick={openFinalMessage}
          >
            Финальное сообщение
          </Button>
          <Button
            htmlType="button"
            type="negative"
            size="small"
            extClassName={styles.shift__finishButton}
            onClick={finishShift}
            loading={isSetFinishLoading}
            disabled={isSetFinishLoading}
          >
            Завершить смену
          </Button>
          <Routes>
            <Route
              path={'finish'}
              element={
                started ? (
                  <ModalAlert
                    closeModal={() => navigate(-1)}
                    closeShift={() => setFinishShift(started.id)}
                  />
                ) : (
                  <Navigate to={'/shifts/all'} replace />
                )
              }
            />
          </Routes>
        </ContentHeading>
        <Table
          extClassName={styles.shift__headingTable}
          header={['Название смены', 'Дата старта/окончания', 'Кол-во участников']}
          gridClassName={styles.shift__headingTableColumns}
          renderRows={(rowStyles) => (
            <ShiftSettingsRow
              extClassName={rowStyles}
              title={started.title}
              start={started.started_at}
              finish={started.finished_at}
              onButtonClick={openShiftSettings}
              participants={started.total_users}
            />
          )}
        />
      </ContentContainer>
      <ContentContainer extClassName={styles.shift__participantsContainer}>
        <h2 className={cn(styles.participants, 'text')}>Участники</h2>
        {participantsTable}
      </ContentContainer>
    </>
  );
};
