import styles from './slaider.module.css';
import { FC } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ISlaider } from '../../services/types/types';
import { ChevronDownIcon } from '../../stories/icons';

const Slaider: FC<ISlaider> = ({ text, icon, activeIcon, children, linkActive }) => {
  const [Active, setActive] = useState<boolean>(false);

  let location = useLocation();

  return (
    <div>
      <button
        className={styles.button}
        onClick={
          Active
            ? () => setActive(false)
            : () => {
                setActive(true);
              }
        }
      >
        <div className={styles.button__container}>
          {location.pathname.includes(linkActive) ? activeIcon : icon}
          <p
            className={`${
              location.pathname.includes(linkActive)
                ? `${styles.button__text_active} ${styles.button__text}`
                : styles.button__text
            } text_type_main-medium`}
          >
            {text}
          </p>
          {Active && children ? (
            <div className={styles.Chevron}>
              <ChevronDownIcon
                type={location.pathname.includes(linkActive) ? 'link-active' : 'link'}
              />
            </div>
          ) : null}
        </div>
      </button>
      {Active ? children : null}
    </div>
  );
};
export default Slaider;
