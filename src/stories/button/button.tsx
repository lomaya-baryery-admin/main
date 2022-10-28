import React, { FC } from 'react';
import styles from './button.module.css';

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'negative';
  size?: 'small' | 'large';
  label?: string; 
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  type = 'primary',
  size = 'large',
  label,
  ...props
}) => {
  let mode;
  switch (type) {
    case 'primary': 
      mode = `${styles.primary}`;
      break;
    case 'secondary': 
      mode = `${styles.secondary}`;
      break;
    case 'negative': 
      mode = `${styles.negative}`;
      break;
  }

  return (
    <button type="button" className={`${styles.button} ${styles[size]} ${mode}`} {...props}>
      {label}
    </button>
  );
};
