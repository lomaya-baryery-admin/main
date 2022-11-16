import styles from './styles.module.css';
import cn from 'classnames';
import { Button } from '../../../ui/button';
import { PlusIcon } from '../../../ui/icons';
import { ContentHeading } from '../../content-heading';

export const PageShiftsAll = () => {
  return (
    <div className={cn(styles.shifts, 'custom-scroll')}>
      <ContentHeading title={'Смены'}>
        <Button htmlType={'button'} onClick={() => alert('create new shift')}>
          <PlusIcon type={'interface-white'} />
          Создать смену
        </Button>
      </ContentHeading>
    </div>
  );
};
