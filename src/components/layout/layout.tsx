import { Outlet } from 'react-router-dom';
import { Header } from '../header/header';
import { Navbar } from '../navbar/navbar';
import styles from './layout.module.css';

export const Layout = () => (
  <div>
    <Header />
    <main className={styles.main}>
      <Navbar />
      <Outlet />
    </main>
  </div>
);
