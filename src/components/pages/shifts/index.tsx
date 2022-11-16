import { useState } from 'react';
import cn from 'classnames';
import { Button } from '../../../ui/button';
import { PlusIcon } from '../../../ui/icons';
import { ContentHeading } from '../../content-heading';
import { data } from './data';
import { Table } from '../../../ui/table-native';
import { RowsAllShifts } from '../../row-all-shifts';
import { Pagination } from '../../../ui/pagination';
import styles from './styles.module.css';

export const PageShiftsAll = () => {
  const titles = [
    'Номер смены',
    'Название смены',
    'Дата старта',
    'Дата окончания',
    'Кол-во участников',
    'Статус',
  ];

  const [page, setPage] = useState(1);

  const handleSetPage = (page: number) => {
    setPage(page);
  };

  return (
    <div className={cn(styles.shifts)}>
      <ContentHeading title="Смены">
        <Button htmlType="button" onClick={() => alert('create new shift')}>
          <PlusIcon type="interface-white" />
          Создать смену
        </Button>
      </ContentHeading>
      <Table
        extClassName={styles.shifts__table}
        header={titles}
        gridClassName={styles.shifts__tableColumns}
        renderRows={(rowStyles) => (
          <div className={cn(styles.shifts__scrollSection, 'custom-scroll')}>
            <RowsAllShifts data={data} extClassName={cn(rowStyles, styles.shifts__tableColumns)} />
          </div>
        )}
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
