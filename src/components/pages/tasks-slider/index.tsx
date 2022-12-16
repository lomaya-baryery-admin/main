import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import cn from 'classnames';
import {
  useApproveTaskMutation,
  useDeclineTaskMutation,
  useGetTasksUnderReviewQuery,
} from '../../../redux-store/api';
import { useAppSelector } from '../../../redux-store/hooks';
import { selectRootShifts } from '../../../redux-store/root-shifts';
import { ContentContainer } from '../../../ui/content-container';
import { TaskDetails } from '../../task-detail';
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon } from '../../../ui/icons';
import { Button } from '../../../ui/button';
import { selectTasks } from '../../../redux-store/tasks-slider';
import { Alert } from '../../../ui/alert';
import { useMemo } from 'react';
import { Loader } from '../../../ui/loader';
import styles from './styles.module.css';

export const PageTasksSlider = () => {
  const { started } = useAppSelector(selectRootShifts);
  const tasks = useAppSelector(selectTasks);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();

  const tasksParentPath = pathname.slice(0, pathname.lastIndexOf('/'));

  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (!started) {
    return <Navigate to={tasksParentPath} />;
  }

  const { isError, isLoading } = useGetTasksUnderReviewQuery(started.id);

  const [approveRequest] = useApproveTaskMutation();
  const [declineRequest] = useDeclineTaskMutation();

  const handleApprove = async () => {
    try {
      await approveRequest({
        taskId: tasks[taskIndex].id,
        shiftId: tasks[taskIndex].shift_id,
        patch: { task_status: 'approved' },
      }).unwrap();

      if (tasks.length === 1) {
        return navigate(tasksParentPath);
      }

      if (tasks.length > 1 && taskIndex === tasks.length - 1) {
        return navigate(`${tasksParentPath}/${tasks[taskIndex - 1].id}`);
      }

      return navigate(`${tasksParentPath}/${tasks[taskIndex + 1].id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDecline = async () => {
    try {
      await declineRequest({
        taskId: tasks[taskIndex].id,
        shiftId: tasks[taskIndex].shift_id,
        patch: { task_status: 'declined' },
      }).unwrap();

      if (tasks.length === 1) {
        return navigate(tasksParentPath);
      }

      if (tasks.length > 1 && taskIndex === tasks.length - 1) {
        return navigate(`${tasksParentPath}/${tasks[taskIndex - 1].id}`);
      }

      return navigate(`${tasksParentPath}/${tasks[taskIndex + 1].id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePrevTask = () => {
    if (taskIndex === 0) {
      return;
    }
    navigate(`${tasksParentPath}/${tasks[taskIndex - 1].id}`);
  };

  const handleNextTask = () => {
    if (taskIndex === tasks.length - 1) {
      return;
    }
    navigate(`${tasksParentPath}/${tasks[taskIndex + 1].id}`);
  };

  const content = useMemo(() => {
    if (isError) {
      return <h1 className="text text_type_main-large text_color_primary">Что-то пошло не так</h1>;
    }

    if (isLoading) {
      return <Loader extClassName={styles.slider__loader} />;
    }

    if (taskIndex === -1) {
      return <Alert extClassName={styles.slider__alert} title="Отчёт не найден" />;
    }

    return (
      <TaskDetails
        extClassName={styles.slider__taskDetails}
        taskUrl={tasks[taskIndex].task_url}
        photoUrl={tasks[taskIndex].photo_url}
        userName={tasks[taskIndex].user_name}
        userSurname={tasks[taskIndex].user_surname}
        createdAt={tasks[taskIndex].user_task_created_at}
        accept={handleApprove}
        decline={handleDecline}
      />
    );
  }, [isError, isLoading, taskIndex, tasks]);

  return (
    <>
      <ContentContainer>
        <Link to={tasksParentPath} className={cn(styles.slider__backLink, 'link')}>
          <ChevronLeftIcon type="interface-secondary" />
          <p
            className={cn(
              styles.slider__linkText,
              'text',
              'text_type_main-small',
              'text_color_secondary',
              'm-0'
            )}
          >
            Назад
          </p>
        </Link>
        {content}
      </ContentContainer>
      {!isLoading && !isError && tasks.length > 0 && taskIndex !== -1 && (
        <nav className={styles.slider__nav}>
          <Button
            extClassName={styles.slider__navButton}
            htmlType="button"
            type="secondary"
            onClick={handlePrevTask}
          >
            <ArrowLeftIcon type="link-active" />
            Предыдущий отчёт
          </Button>
          <p className="text text_type_main-default text_color_secondary m-0">{`${
            taskIndex + 1
          } из ${tasks.length}`}</p>
          <Button
            extClassName={styles.slider__navButton}
            htmlType="button"
            type="secondary"
            onClick={handleNextTask}
          >
            Следующий отчёт
            <ArrowRightIcon type="link-active" />
          </Button>
        </nav>
      )}
    </>
  );
};
