import React from 'react';
import styles from './button.module.css';

interface ButtonProps extends React.PropsWithChildren {
  htmlType?: 'button' | 'submit' | 'reset';
  type?: 'primary' | 'secondary' | 'negative';
  size?: 'small' | 'large';
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  type = 'primary',
  size = 'large',
  children,
  className,
  ...props
}: ButtonProps) => {
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
    default:
      break;
  }

  className = className || '';

  return (
    <button
      type="button"
      className={`${styles.button} ${styles[size]} ${mode} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
