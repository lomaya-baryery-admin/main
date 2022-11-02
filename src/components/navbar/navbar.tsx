import styles from './navbar.module.css';
import { FC } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { UsersIcon, NoteEditIcon, FileCheckIcon, CalendarIcon } from '../../stories/icons';
import Slaider from '../slaider/slaider';
import { INavbarElement } from '../../services/types/types';
import { shift, report, invites } from '../../utils/utils';

const NavbarElement: FC<INavbarElement> = ({ name, link, section }) => {
  let location = useLocation();

  let active = {
    background: `#FFFFFF`,
    borderRadius: `10px`,
  };

  return (
    <li className={`${styles.navbar__listElement}`}>
      <NavLink
        className={`${styles.navbar__link} ${
          location.pathname.includes(section) ? styles.navbar__links_active : undefined
        } text_type_main-medium`}
        to={link}
        style={({ isActive }) => (isActive ? active : undefined)}
      >
        {name}
      </NavLink>
    </li>
  );
};

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
        <Slaider
          linkActive="shift"
          text="Смены"
          icon={<CalendarIcon type="link" />}
          activeIcon={<CalendarIcon type="link-active" />}
        >
          <ul className={styles.navbar__list}>
            {shift.map((link: any, index) => (
              <NavbarElement section={link.section} key={index} name={link.name} link={link.link} />
            ))}
          </ul>
        </Slaider>
        <Slaider
          linkActive="invites"
          text="Заявки на участие"
          icon={<NoteEditIcon type="link" />}
          activeIcon={<NoteEditIcon type="link-active" />}
        >
          <ul className={styles.navbar__list}>
            {invites.map((link: any, index) => (
              <NavbarElement section={link.section} key={index} name={link.name} link={link.link} />
            ))}
          </ul>
        </Slaider>
        <NavLink to="/participants">
          <Slaider
            linkActive="participants"
            text="Участники проекта"
            icon={<UsersIcon type="link" />}
            activeIcon={<UsersIcon type="link-active" />}
          ></Slaider>
        </NavLink>
        <Slaider
          linkActive="report"
          text="Отчёты участников"
          icon={<FileCheckIcon type="link" />}
          activeIcon={<FileCheckIcon type="link-active" />}
        >
          <ul className={styles.navbar__list}>
            {report.map((link: any, index) => (
              <NavbarElement section={link.section} key={index} name={link.name} link={link.link} />
            ))}
          </ul>
        </Slaider>
      </nav>
    </div>
  );
};
export default Navbar;
