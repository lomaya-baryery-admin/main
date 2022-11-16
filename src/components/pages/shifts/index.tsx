import styles from './styles.module.css';
import cn from 'classnames';
import { Button } from '../../../ui/button';
import { PlusIcon } from '../../../ui/icons';
import { ContentHeading } from '../../content-heading';
import { data } from './data';
import { Table } from '../../../ui/table-native';
import { RowsAllShifts } from '../../row-all-shifts';

export const PageShiftsAll = () => {
  const titles = [
    'Номер смены',
    'Название смены',
    'Дата старта',
    'Дата окончания',
    'Кол-во участников',
    'Статус',
  ];

  return (
    <div className={cn(styles.shifts, 'custom-scroll')}>
      <ContentHeading title={'Смены'}>
        <Button htmlType={'button'} onClick={() => alert('create new shift')}>
          <PlusIcon type={'interface-white'} />
          Создать смену
        </Button>
      </ContentHeading>
      <Table
        extClassName={styles.shift__table}
        header={titles}
        gridClassName={styles.shift__tableColumns}
        renderRows={(rowStyles) => (
          <div className={cn(styles.shift__scrollSection, 'custom-scroll')}>
            <RowsAllShifts data={data} extClassName={cn(rowStyles, styles.shift__tableColumns)} />
          </div>
        )}
      />
    </div>
  );
};
