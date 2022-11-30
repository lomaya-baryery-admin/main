import React, { useMemo } from 'react';
import cn from 'classnames';
import styles from './styles.module.css';
import { ITask } from '../../redux-store/api/models';
import { StatusLabel } from '../../ui/status-label';
import { Button } from '../../ui/button';
import { CellDate, CellText } from '../../ui/table-native';
import { Link } from 'react-router-dom';
import { ZoomIcon } from '../../ui/icons';

interface ICellPreviewProps {
  id: string;
  img: string;
}

const CellPreview: React.FC<ICellPreviewProps> = ({ id, img }) => {
  return (
    <Link to={`${id}`} className={styles.cellPreview}>
      <img src={img} className={styles.cellPreview__image} />
      <ZoomIcon type="interface-white" className={styles.cellPreview__icon} />
    </Link>
  );
};

interface ITaskRowProps {
  extClassName?: string;
  taskData: ITask;
  approve: () => void;
  decline: () => void;
}

export const TaskRow: React.FC<ITaskRowProps> = ({ taskData, approve, decline, extClassName }) => {
  const actions = useMemo(() => {
    if (taskData.task_status) {
      if (taskData.task_status === 'approved') {
        return <StatusLabel icon="CircleCheckIcon" type="approved" statusText="Задание принято" />;
      } else if (taskData.task_status === 'declined') {
        return <StatusLabel icon="CircleStopIcon" type="rejected" statusText="Задание отклонено" />;
      }
    } else {
      return (
        <div className={styles.taskRow__actions}>
          <Button
            size="small"
            type="primary"
            htmlType="button"
            onClick={approve}
            extClassName={styles.taskRow__approveButton}
          >
            Принять
          </Button>
          <Button size="small" type="primary" htmlType="button" onClick={decline}>
            Отклонить
          </Button>
        </div>
      );
    }
  }, [taskData]);

  return (
    <div className={cn(styles.taskRow, extClassName, 'tableContentRow')}>
      <CellText type="accent" text={taskData.task_description} />
      <CellText type="accent" text={`${taskData.user_name} ${taskData.user_surname}`} />
      <CellDate type="withTime" date={taskData.user_task_created_at} />
      <CellPreview img={taskData.photo_url} id={taskData.id} />
      {actions}
    </div>
  );
};
