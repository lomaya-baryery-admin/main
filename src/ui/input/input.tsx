import { nanoid } from '@reduxjs/toolkit';
import cn from 'classnames';
import styles from './input.module.css';

export interface IInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  name?: string;
  required?: boolean;
}

export const Input = ({ value, onChange, className, placeholder, name, required }: IInputProps) => {
  const inputId = nanoid();
  return (
    <label htmlFor={inputId} className={cn(styles.searchField, className)}>
      <input
        id={inputId}
        type="text"
        value={value}
        placeholder={placeholder}
        className={cn(styles.input)}
        name={name}
        onChange={onChange}
        autoComplete="off"
        required={required}
      />
    </label>
  );
};
