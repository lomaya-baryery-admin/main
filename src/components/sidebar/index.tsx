import React, { useMemo, useState } from 'react';
import cn from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import type { To } from 'react-router-dom';
import { ChevronRightIcon, TIcons } from '../../ui/icons';
import * as Icons from '../../ui/icons';
import styles from './styles.module.css';
import { useAppSelector } from '../../redux-store/hooks';
import { selectRootShifts } from '../../redux-store/root-shifts';

interface ISideBarAccordion {
  title: string;
  icon: keyof TIcons;
  expandOnMount?: boolean;
  list?: Array<{
    title: string;
    to: To;
  }>;
  to?: To;
}

const SideBarAccordion: React.FC<ISideBarAccordion> = ({
  title,
  icon,
  to,
  list,
  expandOnMount,
}) => {
  const [disclosed, setToggleDisclose] = useState(expandOnMount);

  const paths = list ? list.map((item) => item.to) : [to];
  const branch = useLocation().pathname.split('/')[1];
  const isCurrentBranch = paths.some((path) => path?.toString().includes(branch));

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
          ? list.map((link) => (
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
            ))
          : null}
      </ul>
    );
  }
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
};

export const SideBar = () => {
  const rootShifts = useAppSelector(selectRootShifts);

  const shiftsList = useMemo(() => {
    const list: ISideBarAccordion['list'] = [{ title: '??????', to: '/shifts/all' }];

    if (rootShifts.started) {
      list.push({ title: '??????????????', to: '/shifts/started' });
    }

    if (rootShifts.preparing) {
      list.push({ title: '??????????', to: '/shifts/preparing' });
    }

    return list;
  }, [rootShifts]);

  const { pathname } = useLocation();

  const initRoute = pathname === '/' ? 'shifts' : pathname.split('/', 2)[1];

  return (
    <ul className={cn(styles.sidebar, 'm-0', 'p-0', 'list')}>
      <SideBarAccordion
        title="??????????"
        expandOnMount={initRoute === 'shifts'}
        list={shiftsList}
        icon="CalendarIcon"
      />
      <SideBarAccordion
        title="???????????? ???? ??????????????"
        expandOnMount={initRoute === 'requests'}
        list={[
          { title: '????????????????', to: '/requests/pending' },
          { title: '??????????????????????????', to: '/requests/considered' },
        ]}
        icon="NoteEditIcon"
      />
      <SideBarAccordion title="?????????????????? ??????????????" icon="UsersIcon" to="/users" />
      <SideBarAccordion
        title="???????????? ????????????????????"
        expandOnMount={initRoute === 'tasks'}
        list={[
          { title: '???????? ????????????????', to: '/tasks/under_review' },
          { title: '??????????????????????', to: '/tasks/reviewed' },
          { title: '??????????????????????', to: '/tasks/declined' },
        ]}
        icon="FileCheckIcon"
      />
    </ul>
  );
};
