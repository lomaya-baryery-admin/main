import cn from 'classnames';
import styles from './styles.module.css';
import { ContentContainer } from '../../../ui/content-container';
import { ContentHeading } from '../../../ui/content-heading';
import { Table } from '../../../ui/table-native';
import { Button } from '../../../ui/button';
import { ShiftSettingsRow } from '../../shift-settings-row';
import { Alert } from '../../../ui/alert';
import { useAppSelector } from '../../../redux-store/hooks';
import { selectCurrentShifts } from '../../../redux-store/current-shifts';
import { PreparingShiftRow } from '../../preparing-shift-row';
import { useGetShiftUsersQuery } from '../../../redux-store/api';
import { Spinner } from '../../../ui/spinner';
import { Loader } from '../../../ui/loader';
import { useMemo } from 'react';

export const PagePreparingShift = () => {
  const { preparing } = useAppSelector(selectCurrentShifts); //убедиться что стор обновится после патча смены

  if (!preparing) {
    return <Alert extClassName={styles.shift__alert} title="Что-то пошло не так" />;
  }

  const { title, started_at, finished_at, total_users } = preparing;

  const { data, isLoading, isError } = useGetShiftUsersQuery(preparing.id);

  const participantsTable = useMemo(() => {
    if (isLoading) {
      return <Loader extClassName={styles.shift__loader} />;
    } else if (isError || !data) {
      return <Alert extClassName={styles.participants__alert} title="Что-то пошло не так..." />;
    } else if (data.users.length === 0) {
      return (
        <Alert extClassName={styles.participants__alert} title="Нет принятый заявок на участие" />
      );
    } else {
      return (
        <Table
          extClassName={styles.shift__participantsTable}
          gridClassName={styles.participants__tableColumns}
          header={['Имя и фамилия', 'Город', 'Телефон', 'Дата рождения']}
          renderRows={(rowStyles) => (
            <PreparingShiftRow extClassName={rowStyles} data={data?.users} />
          )}
        />
      );
    }
  }, [isLoading, isError, data]);

  return (
    <>
      <ContentContainer extClassName={styles.shift__headingContainer}>
        <ContentHeading title="Новая смена">
          <Button
            htmlType="button"
            disabled={false}
            loading={false}
            onClick={() => alert('handle start')}
          >
            Начать смену
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
