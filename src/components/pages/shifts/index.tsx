import cn from 'classnames';
import { Button } from '../../../ui/button';
import { PlusIcon } from '../../../ui/icons';
import { ContentHeading } from '../../content-heading';
import { Table } from '../../../ui/table-native';
import { RowsAllShifts } from '../../row-all-shifts';
import { Pagination } from '../../../ui/pagination';
import styles from './styles.module.css';
import { useGetAllShiftsQuery } from '../../../redux-store/api';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../../redux-store/hooks';
import { selectCurrentShifts } from '../../../redux-store/current-shifts';

export const PageShiftsAll = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page'));
  const { data } = useGetAllShiftsQuery(page);
  const { preparing: isPreparingShift } = useAppSelector(selectCurrentShifts);

  const titles = [
    'Номер смены',
    'Название смены',
    'Дата старта',
    'Дата окончания',
    'Кол-во участников',
    'Статус',
  ];

  const handleSetPage = (page: number) => {
    setSearchParams({ page: String(page) });
  };

  return (
    <div className={cn(styles.shifts)}>
      <ContentHeading title={'Смены'}>
        <Button
          htmlType="button"
          type={isPreparingShift ? 'disabled' : 'primary'}
          disabled={Boolean(isPreparingShift)}
          onClick={() => alert('create new shift')}
        >
          <PlusIcon type={isPreparingShift ? 'interface-secondary' : 'interface-white'} />
          Создать смену
        </Button>
      </ContentHeading>
      <Table
        extClassName={styles.shifts__table}
        header={titles}
        gridClassName={styles.shifts__tableColumns}
        renderRows={(rowStyles) => {
          return data ? (
            <div className={cn(styles.shifts__scrollSection, 'custom-scroll')}>
              <RowsAllShifts
                data={data}
                extClassName={cn(rowStyles, styles.shifts__tableColumns)}
              />
            </div>
          ) : null;
        }}
      />
      <Pagination
        extClassName={styles.shifts__pagination}
        page={page}
        total={10}
        next={handleSetPage}
        prev={handleSetPage}
      />
    </div>
  );
};
