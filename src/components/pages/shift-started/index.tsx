import { useCallback, useMemo } from 'react';
import cn from 'classnames';
import styles from './styles.module.css';
import { ContentContainer } from '../../../ui/content-container';
import { ContentHeading } from '../../../ui/content-heading';
import { Table } from '../../../ui/table-native';
import { ShiftSettingsRow } from '../../shift-settings-row';
import { PreparingShiftRows } from '../../preparing-shift-rows';
import { Alert } from '../../../ui/alert';
import { Loader } from '../../../ui/loader';
import { selectCurrentShifts } from '../../../redux-store/current-shifts';
import { useGetShiftUsersQuery } from '../../../redux-store/api';
import { useAppSelector } from '../../../redux-store/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../../../ui/button';
import { UserTasksRow } from '../../started-shift-row';

export const PageStartedShift = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { started } = useAppSelector(selectCurrentShifts);

  if (!started) {
    return <Alert extClassName={styles.shift__alert} title="Что-то пошло не так" />;
  }

  const { title, started_at, finished_at, total_users } = started;

  const { data, isLoading, isError } = useGetShiftUsersQuery(started.id);

  const openShiftSettings = useCallback(
    () =>
      navigate('/shifts/started/settings', {
        state: {
          background: location.pathname,
        },
      }),
    []
  );

  const participantsTable = useMemo(() => {
    if (isLoading) {
      return <Loader extClassName={styles.shift__loader} />;
    } else if (isError || !data) {
      return <Alert extClassName={styles.participants__alert} title="Что-то пошло не так" />;
    } else if (data.users.length === 0) {
      return (
        <Alert extClassName={styles.participants__alert} title="Нет принятых заявок на участие" />
      );
    } else {
      return (
        <Table
          extClassName={styles.shift__participantsTable}
          gridClassName={styles.participants__tableColumns}
          header={['Имя и фамилия', 'Город', 'Дата рождения', 'Статусы заданий']}
          renderRows={(rowStyles) => (
            <>
              {data.users.map((user) => (
                <UserTasksRow
                  key={user.user_id}
                  cellsClassName={rowStyles}
                  userData={user}
                  shiftStart={data.started_at}
                  shiftFinish={data.finished_at}
                />
              ))}
            </>
          )}
        />
      );
    }
  }, [isLoading, isError, data]);

  return (
    <>
      <ContentContainer extClassName={styles.shift__headingContainer}>
        <ContentHeading title="Текущая смена" extClassName={styles.shift__heading}>
          <Button
            htmlType="button"
            type="secondary"
            size="small"
            extClassName={styles.shift__messageButton}
          >
            Финальное сообщение
          </Button>
          <Button
            htmlType="button"
            type="negative"
            size="small"
            extClassName={styles.shift__finishButton}
          >
            Завершить смену
          </Button>
        </ContentHeading>
        <Table
          extClassName={styles.shift__headingTable}
          header={['Название смены', 'Дата старта/окончания', 'Кол-во участников']}
          gridClassName={styles.shift__headingTableColumns}
          renderRows={(rowStyles) => (
            <ShiftSettingsRow
              extClassName={rowStyles}
              title={title}
              start={started_at}
              finish={finished_at}
              onButtonClick={openShiftSettings}
              participants={total_users}
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
