import { useLocation } from 'react-router-dom';
import { FC } from 'react';
import { useState } from 'react';
import styles from './dropdown.module.css';
import { ISlaider } from '../../services/types/types';
import { ChevronDownIcon } from '../../ui/icons';

const Dropdown: FC<ISlaider> = ({ text, icon, activeIcon, children, linkActive }) => {
  const [active, setActive] = useState<boolean>(false);

  const location = useLocation();

  return (
    <div>
      <button type="button" className={styles.button} onClick={() => setActive((val) => !val)}>
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
          {active && children ? (
            <div className={styles.Chevron}>
              <ChevronDownIcon
                type={location.pathname.includes(linkActive) ? 'link-active' : 'link'}
              />
            </div>
          ) : null}
        </div>
      </button>
      {active ? children : null}
    </div>
  );
};
export default Dropdown;
