import styles from './styles.module.css';
import cn from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import type { To } from 'react-router-dom';
import { ChevronRightIcon, TIcons } from '../../ui/icons';
import React, { useState } from 'react';
import * as Icons from '../../ui/icons';

interface ISideBarAccordion {
  title: string;
  icon: keyof TIcons;
  expanded?: boolean;
  list?: Array<{
    title: string;
    to: To;
  }>;
  to?: To;
}

const SideBarAccordion: React.FC<ISideBarAccordion> = ({ title, icon, to, list, expanded }) => {
  const [disclosed, setToggleDisclose] = useState(expanded);

  const paths = list ? list.map((item) => item.to) : [to];

  const location = useLocation();

  const isCurrentBranch = paths?.includes(location.pathname);

  const handleToggle = () => {
    setToggleDisclose((initState) => !initState);
  };

  const RenderIcon = icon && Icons[icon];

  if (list) {
    return (
      <ul className={cn(styles.accordion, 'list', 'p-0')}>
        <button onClick={handleToggle} className={styles.accordion__button}>
          <RenderIcon
            type={isCurrentBranch ? 'link-active' : 'link'}
            className={styles.accordion__buttonIcon}
          />
          <span
            className={cn('text', 'text_type_main-medium', styles.accordion__text, {
              [styles.accordion__text_active]: isCurrentBranch,
            })}
          >
            {title}
          </span>
          <ChevronRightIcon
            className={cn(styles.accoridon__buttonChevron, {
              [styles.accordion__buttonChevron_rotated]: disclosed,
            })}
            type={isCurrentBranch ? 'link-active' : 'link'}
          />
        </button>
        {disclosed
          ? list.map((link) => {
              return (
                <li className={styles.accordion__listItemWrapper} key={link.title}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        styles.accordion__listItem,
                        {
                          [styles.accordion__listItem_active]: isActive,
                        },
                        'text',
                        'text_type_main-medium'
                      )
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              );
            })
          : null}
      </ul>
    );
  } else {
    return (
      <li>
        <NavLink to={to as To} className={styles.accordion__button}>
          <RenderIcon
            type={isCurrentBranch ? 'link-active' : 'link'}
            className={styles.accordion__buttonIcon}
          />
          <span
            className={cn('text', 'text_type_main-medium', styles.accordion__text, {
              [styles.accordion__text_active]: isCurrentBranch,
            })}
          >
            {title}
          </span>
        </NavLink>
      </li>
    );
  }
};

export const SideBar = () => {
  const { pathname } = useLocation();

  const currentRoute = pathname === '/' ? 'shifts' : pathname.split('/', 2)[1];

  const [activeBranch, setActiveBranch] = useState(currentRoute);

  return (
    <ul className={cn(styles.sidebar, 'm-0', 'p-0', 'list')}>
      <SideBarAccordion
        title={'Смены'}
        expanded={activeBranch === 'shifts'}
        list={[
          { title: 'Все', to: '/shifts/all' },
          { title: 'Текущая', to: '/shifts/started' },
          { title: 'Новая', to: '/shifts/preparing' },
        ]}
        icon={'CalendarIcon'}
      />
      <SideBarAccordion
        title={'Заявки на участие'}
        expanded={activeBranch === 'requests'}
        list={[
          { title: 'Активные', to: '/requests/pending' },
          { title: 'Рассмотренные', to: '/requests/considered' },
        ]}
        icon={'NoteEditIcon'}
      />
      <SideBarAccordion title={'Участники проекта'} icon={'UsersIcon'} to={'/users'} />
      <SideBarAccordion
        title={'Отчёты участников'}
        expanded={activeBranch === 'tasks'}
        list={[
          { title: 'Ждут проверки', to: '/tasks/under_review' },
          { title: 'Проверенные', to: '/tasks/reviewed' },
          { title: 'Отклонённые', to: '/tasks/declined' },
        ]}
        icon={'FileCheckIcon'}
      />
    </ul>
  );
};
