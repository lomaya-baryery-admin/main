import React from 'react';
import { nanoid } from 'nanoid';
import { CloseIcon, SearchIcon } from '../icons';
import styles from './search-input.module.css';

interface ISearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

export const SearchInput = ({ value, onChange, onClear }: ISearchProps) => (
  <label htmlFor="name" className={styles.searchField}>
    <SearchIcon type="interface-secondary" className={styles.search__searchIcon} />
    <input
      id={`${nanoid()}`}
      type="text"
      value={value}
      placeholder="Поиск"
      className={styles.search__input}
      name="name"
      onChange={onChange}
      autoComplete="off"
    />
    {value ? (
      <CloseIcon type="interface-black" className={styles.search__closeIcon} onClick={onClear} />
    ) : null}
  </label>
);
