import { Outlet } from 'react-router-dom';
import { Header } from '../header/header';
import { Navbar } from '../navbar/navbar';
import styles from './layout.module.css';

import { ActiveApplicationsPage } from '../../pages/active-applications-page/active-applications-page';

export const Layout = () => (
  <div>
    <Header />
    <main className={styles.main}>
      <Navbar />
      <Outlet />
      <ActiveApplicationsPage />
    </main>
  </div>
);
