import { FC } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import styles from './styles.module.css';

export interface INavbarElement {
  name: string;
  link: string;
  section: string;
}

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
