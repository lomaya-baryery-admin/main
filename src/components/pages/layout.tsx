import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Navbar } from '../navbar';
import { SideBar } from '../sidebar';
import styles from './layout.module.css';

export const Layout = () => (
  <>
    <Header />
    <main className={styles.main}>
      {/* <Navbar /> */}
      <nav className={styles.navigation}>
        <SideBar />
      </nav>
      <section className={styles.content}>
        <Outlet />
      </section>
    </main>
  </>
);
