import { useState } from 'react';
import { CloseIcon } from '../../ui/icons/close-icon';
import { Search } from '../icons/search-icon.stories';
import styles from './search-input.module.css';

interface ISearchProps {
  value: string;
  onChange: (e: React.SyntheticEvent<EventTarget>) => void;
  onClear: () => void;
  onFocus: () => void;
}

export const SearchInput = ({ value, onChange, onClear, onFocus }: ISearchProps) => {
  const [iconClose, setIconClose] = useState(false);

  const onMouseEnterHandler = () => {
    setIconClose(true);
  };

  const onMouseLeaveHandler = () => {
    setIconClose(false);
  };
  return (
    <div>
      <div className={styles.form}>
        <form className={styles.search__form}>
          <label htmlFor="name" className={styles.search__label}>
            <Search type="interface-secondary" onClick={onFocus} />
            <input
              type="text"
              value={value}
              placeholder="Поиск"
              className={styles.search__input}
              name="name"
              onChange={onChange}
            />
            {value ? (
              <div
                className={styles.search__closeIconWrapper}
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
              >
                {iconClose ? (
                  <CloseIcon
                    type="interface-black"
                    className={styles.search__closeIcon}
                    onClick={onClear}
                  />
                ) : (
                  <CloseIcon
                    type="interface-secondary"
                    className={styles.search__closeIcon}
                    onClick={onClear}
                  />
                )}
              </div>
            ) : null}
          </label>
        </form>
      </div>
    </div>
  );
};
