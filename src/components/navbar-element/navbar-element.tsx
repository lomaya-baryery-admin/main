import { useLocation, NavLink } from 'react-router-dom';
import { FC } from 'react';
import styles from './navbar-element.module.css';
import { INavbarElement } from '../../services/types/types';

export const NavbarElement: FC<INavbarElement> = ({ name, link, section }) => {
  const location = useLocation();

  const active = {
    background: `#FFFFFF`,
    borderRadius: `10px`,
  };

  return (
    <li className={`${styles.navbar__listElement}`}>
      <NavLink
        className={`${styles.navbar__link} ${
          location.pathname.includes(section) ? styles.navbar__links_active : undefined
        } ${styles.navbar__link} text_type_main-medium`}
        to={link}
        style={({ isActive }) => (isActive ? active : undefined)}
      >
        {name}
      </NavLink>
    </li>
  );
};
