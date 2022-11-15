import cn from 'classnames';
import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { SideBar } from '../sidebar';
import styles from './layout.module.css';

export const Layout = () => (
  <>
    <Header />
    <main className={styles.main}>
      <nav className={styles.navigation}>
        <SideBar />
      </nav>
      <section className={cn(styles.content, 'custom-scroll')}>
        <Outlet />
      </section>
    </main>
  </>
);
