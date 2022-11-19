import { nanoid } from '@reduxjs/toolkit';
import cn from 'classnames';
import styles from './input.module.css';

export interface IInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input = ({ value, onChange, className }: IInputProps) => {
  const inputId = nanoid();
  return (
    <label htmlFor={inputId} className={cn(styles.searchField)}>
      <input
        id={inputId}
        type="text"
        value={value}
        placeholder="Введите название"
        className={cn(styles.input)}
        name="name"
        onChange={onChange}
        autoComplete="off"
      />
    </label>
  );
};
