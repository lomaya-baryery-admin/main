import cn from 'classnames';
import { Button } from '../../../ui/button';
import { PlusIcon } from '../../../ui/icons';
import { ContentHeading } from '../../../ui/content-heading';
import { Table } from '../../../ui/table-native';
import { ShiftRow } from '../../shift-row';
import { Pagination } from '../../../ui/pagination';
import styles from './styles.module.css';
import { useGetAllShiftsQuery } from '../../../redux-store/api';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../redux-store/hooks';
import { selectCurrentShifts } from '../../../redux-store/current-shifts';
import { deserializeQuery } from '../../../utils';
import { ContentContainer } from '../../../ui/content-container';

export const PageShiftsAll = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname: currentPath, search } = location;
  const page = deserializeQuery<{ page: string }>(search).page;
  const { data } = useGetAllShiftsQuery(Number(page));
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
    navigate({ pathname: currentPath, search: `page=${page}` });
  };

  return (
    <ContentContainer extClassName={styles.shifts}>
      <ContentHeading title={'Смены'}>
        <Button
          htmlType="button"
          type={isPreparingShift ? 'disabled' : 'primary'}
          disabled={Boolean(isPreparingShift)}
          onClick={() =>
            navigate('/shifts/create', {
              state: {
                background: location,
              },
            })
          }
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
              <ShiftRow data={data} extClassName={rowStyles} />
            </div>
          ) : null;
        }}
      />
      <Pagination
        extClassName={styles.shifts__pagination}
        page={Number(page)}
        total={data?.total_page || 0}
        next={handleSetPage}
        prev={handleSetPage}
      />
    </ContentContainer>
  );
};
