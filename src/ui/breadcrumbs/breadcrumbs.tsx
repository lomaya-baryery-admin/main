import { FC, SyntheticEvent } from 'react';
import { useLocation, useNavigate, useMatch } from 'react-router-dom';
import styles from './breadcrumbs.module.css';
import { removeRemainingCrumbs } from './breadcrumbs-util';

export type TBreadcrumb = {
  path: string;
  url: string;
  title: string;
};

const Crumb: FC<TBreadcrumb> = ({ url, title, path }) => {
  const navigate = useNavigate();
  const state = useLocation().state as Array<TBreadcrumb>;
  const match = useMatch(path);

  const routeTo = (event: SyntheticEvent) => {
    event.preventDefault();
    navigate(url, { replace: true, state: removeRemainingCrumbs(state, url) });
  };

  return (
    <>
      {match ? (
        <span className={styles.item_last}>{title}</span>
      ) : (
        <span className={styles.item}>
          <>
            <a href={url} onClick={routeTo}>
              {title}
            </a>
            {` / `}
          </>
        </span>
      )}
    </>
  );
};

export const Breadcrumbs = () => {
  const state = useLocation().state as Array<TBreadcrumb>;

  if (state) {
    return (
      <nav>
        {state.map((crumb) => (
          <Crumb {...crumb} key={crumb.url} />
        ))}
      </nav>
    );
  }
  return null;
};
