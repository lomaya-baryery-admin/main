import React, { useRef, useState } from 'react';
import { CloseIcon, SearchIcon } from '../icons';
import styles from './search-input.module.css';

interface ISearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

export const SearchInput = ({ value, onChange, onClear }: ISearchProps) => {
  const [isFocusedInput, setIsFocusedInput] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <label
      htmlFor="name"
      className={`${styles.searchField} ${
        value || isFocusedInput ? styles.searchField_interact : null
      }`}
    >
      <SearchIcon
        type="interface-secondary"
        className={styles.search__searchIcon}
        onClick={() => {
          inputRef.current?.focus();
        }}
      />
      <input
        ref={inputRef}
        type="text"
        value={value}
        placeholder="Поиск"
        className={styles.search__input}
        name="name"
        onChange={onChange}
        autoComplete="off"
        onFocus={() => setIsFocusedInput(true)}
        onBlur={() => setIsFocusedInput(false)}
      />
      {value ? (
        <CloseIcon type="interface-black" className={styles.search__closeIcon} onClick={onClear} />
      ) : null}
    </label>
  );
};
