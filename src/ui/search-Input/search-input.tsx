import React from 'react';
import { nanoid } from '@reduxjs/toolkit';
import cn from 'classnames';
import { CloseIcon, SearchIcon } from '../icons';
import styles from './search-input.module.css';

interface ISearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  className?: string;
}

export const SearchInput = ({ value, onChange, onClear, className }: ISearchProps) => {
  const inputId = nanoid();

  return (
    <label
      htmlFor={inputId}
      className={cn(styles.searchField, { [styles.searchField_active]: value })}
    >
      <SearchIcon type="interface-secondary" className={styles.search__searchIcon} />
      <input
        id={inputId}
        type="text"
        value={value}
        placeholder="Поиск"
        className={cn(styles.search__input, { [styles.search__input_active]: value })}
        name="name"
        onChange={onChange}
        autoComplete="off"
      />
      {value ? (
        <CloseIcon type="interface-black" className={styles.search__closeIcon} onClick={onClear} />
      ) : null}
    </label>
  );
};
