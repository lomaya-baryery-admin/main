import styles from './navbar.module.css';
import {  NavLink } from 'react-router-dom';
import { UsersIcon, NoteEditIcon, FileCheckIcon, CalendarIcon } from '../../stories/icons';
import Dropdown from '../dropdown/dropdown';
import { shift, report, invites } from '../../utils/navbar-config';
import { NavbarElement } from '../navbar-element/navbar-element';

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
        <Dropdown
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
        </Dropdown>
        <Dropdown
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
        </Dropdown>
        <NavLink to="/participants">
          <Dropdown
            linkActive="participants"
            text="Участники проекта"
            icon={<UsersIcon type="link" />}
            activeIcon={<UsersIcon type="link-active" />}
          ></Dropdown>
        </NavLink>
        <Dropdown
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
        </Dropdown>
      </nav>
    </div>
  );
};

