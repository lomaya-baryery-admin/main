import styles from './layout.module.css';
import { Header } from '../header/header';
import Navbar from '../navbar/navbar';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
