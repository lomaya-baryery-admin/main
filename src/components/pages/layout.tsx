import cn from 'classnames';
import { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { useGetAllShiftsQuery } from '../../redux-store/api';
import { Spinner } from '../../ui/spinner';
import { Header } from '../header';
import { SideBar } from '../sidebar';
import styles from './layout.module.css';

export const Layout = () => {
  const { isLoading, isError } = useGetAllShiftsQuery(1);

  const content = useMemo(() => {
    if (isLoading) {
      return <Spinner />;
    } else if (isError) {
      return <h1 className={cn('text', 'text_type_main-extra-large')}>Сервер не доступен</h1>;
    } else {
      return (
        <>
          <nav className={styles.navigation}>
            <SideBar />
          </nav>
          <section className={styles.content}>
            <Outlet />
          </section>
        </>
      );
    }
  }, [isLoading, isError]);

  return (
    <>
      <Header />
      <main className={styles.main}>{content}</main>
    </>
  );
};
