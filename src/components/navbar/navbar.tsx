import styles from './navbar.module.css';
import { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import {
  UsersIcon,
  NoteEditIcon,
  FileCheckIcon,
  CalendarIcon,
  ChevronDownIcon,
} from '../../stories/icons';

const Navbar = () => {
  const [CalendarActive, setCalendarActive] = useState<boolean>(false);
  const [NoteEditActive, setNoteEditActive] = useState<boolean>(false);
  const [UsersActive, setUsersActive] = useState<boolean>(false);
  const [FileCheckActive, setFileCheckActive] = useState<boolean>(false);

  let location = useLocation();
  useEffect(() => {
    if (location.pathname.includes('shift')) {
      setCalendarActive(true);
    } else if (location.pathname.includes('invites')) {
      setNoteEditActive(true);
    } else if (location.pathname.includes('participants')) {
      setUsersActive(true);
    } else if (location.pathname.includes('report')) {
      setFileCheckActive(true);
    }
  }, []);

  function setActive(state: (any: boolean) => void) {
    setCalendarActive(false);
    setNoteEditActive(false);
    setUsersActive(false);
    setFileCheckActive(false);
    state(true);
  }
  let active = {
    background: `#FFFFFF`,
    borderRadius: `10px`,
  };
  return (
    <div className={styles.navbar}>
      <nav>
        <div>
          <button
            className={styles.button}
            onClick={() => {
              setActive(setCalendarActive);
            }}
          >
            {' '}
            <div className={styles.button__container}>
              <CalendarIcon type={CalendarActive ? 'link-active' : 'link'} />
              <p
                className={`${
                  CalendarActive ? styles.button__text_active : styles.button__text
                } text_type_main-medium`}
              >
                Смены
              </p>
              {CalendarActive ? (
                <div className={styles.Chevron}>
                  <ChevronDownIcon type="link-active" />
                </div>
              ) : null}
            </div>
          </button>
          {CalendarActive ? (
            <ul className={styles.navbar__list}>
              <li className={`${styles.navbar__listElement}`}>
                {' '}
                <NavLink
                  className={`${styles.navbar__link}
                   text_type_main-medium`}
                  to="/shift-all"
                  style={({ isActive }) => (isActive ? active : undefined)}
                >
                  Все
                </NavLink>
              </li>
              <li className={styles.navbar__listElement}>
                {' '}
                <NavLink
                  className={`${styles.navbar__link}
                   text_type_main-medium`}
                  to="/shift-current"
                  style={({ isActive }) => (isActive ? active : undefined)}
                >
                  Текущая
                </NavLink>
              </li>
              <li className={styles.navbar__listElement}>
                {' '}
                <NavLink
                  className={`${styles.navbar__link}
                   text_type_main-medium`}
                  to="/shift-new"
                  style={({ isActive }) => (isActive ? active : undefined)}
                >
                  Новая
                </NavLink>
              </li>
            </ul>
          ) : null}
        </div>
        <div>
          <button
            className={styles.button}
            onClick={() => {
              setActive(setNoteEditActive);
            }}
          >
            {' '}
            <div className={styles.button__container}>
              <NoteEditIcon type={NoteEditActive ? 'link-active' : 'link'} />
              <p
                className={`${
                  NoteEditActive ? styles.button__text_active : styles.button__text
                } text_type_main-medium`}
              >
                Заявки на участие
              </p>
              {NoteEditActive ? (
                <div className={styles.Chevron}>
                  <ChevronDownIcon type="link-active" />
                </div>
              ) : null}
            </div>
          </button>
          {NoteEditActive ? (
            <ul className={styles.navbar__list}>
              <li className={`${styles.navbar__listElement} `}>
                {' '}
                <NavLink
                  className={`${styles.navbar__link}
                   text_type_main-medium`}
                  to="/invites-active"
                  style={({ isActive }) => (isActive ? active : undefined)}
                >
                  Активные
                </NavLink>
              </li>
              <li className={styles.navbar__listElement}>
                {' '}
                <NavLink
                  className={`${styles.navbar__link}
                   text_type_main-medium`}
                  to="/invites-reviewed"
                  style={({ isActive }) => (isActive ? active : undefined)}
                >
                  Рассмотренные
                </NavLink>
              </li>
            </ul>
          ) : null}
        </div>
        <div>
          <button
            className={styles.button}
            onClick={() => {
              setActive(setUsersActive);
            }}
          >
            {' '}
            <div className={styles.button__container}>
              <UsersIcon type={UsersActive ? 'link-active' : 'link'} />
              <NavLink
                className={`${UsersActive ? styles.button__text_active : styles.button__text} 
                   text_type_main-medium`}
                to="/participants"
              >
                Участники проекта
              </NavLink>
            </div>
          </button>
        </div>
        <div>
          <button
            className={styles.button}
            onClick={() => {
              setActive(setFileCheckActive);
            }}
          >
            {' '}
            <div className={styles.button__container}>
              <FileCheckIcon type={FileCheckActive ? 'link-active' : 'link'} />

              <p
                className={`${
                  FileCheckActive ? styles.button__text_active : styles.button__text
                } text_type_main-medium`}
              >
                Отчёты участников
              </p>
              {FileCheckActive ? (
                <div className={styles.Chevron}>
                  <ChevronDownIcon type="link-active" />
                </div>
              ) : null}
            </div>
          </button>
          {FileCheckActive ? (
            <ul className={styles.navbar__list}>
              <li className={`${styles.navbar__listElement} `}>
                {' '}
                <NavLink
                  className={`${styles.navbar__link}
                   text_type_main-medium`}
                  to="/report-noverified"
                  style={({ isActive }) => (isActive ? active : undefined)}
                >
                  Ждут проверки
                </NavLink>
              </li>
              <li className={styles.navbar__listElement}>
                {' '}
                <NavLink
                  className={`${styles.navbar__link}
                   text_type_main-medium`}
                  to="/report-verified"
                  style={({ isActive }) => (isActive ? active : undefined)}
                >
                  Проверенные
                </NavLink>
              </li>
              <li className={styles.navbar__listElement}>
                {' '}
                <NavLink
                  className={`${styles.navbar__link}
                   text_type_main-medium`}
                  to="/report-rejected"
                  style={({ isActive }) => (isActive ? active : undefined)}
                >
                  Отклонённые
                </NavLink>
              </li>
            </ul>
          ) : null}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
