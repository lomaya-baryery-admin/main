import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Navbar } from '../navbar';
import styles from './layout.module.css';

export const Layout = () => (
  <>
    <Header />
    <main className={styles.main}>
      <Navbar />
      <Outlet />
    </main>
  </>
);
