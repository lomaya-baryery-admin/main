import React, { FC, ReactNode } from 'react';
import styles from './button.module.css';

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'negative';
  size?: 'small' | 'large';
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  type = 'primary',
  size = 'large',
  children,
  className,
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
  };
  
  className = className ? className : '';

  return (
    <button type="button" className={`${styles.button} ${styles[size]} ${mode} ${className}`} {...props}>
      {children}
    </button>
  );
};
