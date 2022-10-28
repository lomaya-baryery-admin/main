import React, { FC } from 'react';
import styles from './button.module.css';

interface ButtonProps {
  type?: 'main' | 'not_main' | 'not_main_negative';
  primary?: boolean;
  size?: 'small' | 'large';
  label?: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  type = 'main',
  primary = true,
  size = 'large',
  label,
  ...props
}) => {
  let mode;
  if (type === 'main') {
    mode = primary ? `${styles.main_primary}` : `${styles.main_secondary}`;
  } else if (type === 'not_main') {
    mode = primary ? `${styles.not_main_primary}` : `${styles.not_main_secondary}`;
  } else {
    mode = primary
      ? `${styles.not_main_negative_primary}`
      : `${styles.not_main_negative_secondary}`;
  }

  return (
    <button type="button" className={`${styles.button} ${styles[size]} ${mode}`} {...props}>
      {label}
    </button>
  );
};
