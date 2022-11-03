import React from 'react';
import styles from './button.module.css';

export type TButtonProps = React.PropsWithChildren<
  Omit<React.HTMLProps<HTMLButtonElement>, 'size'>
> & {
  htmlType: 'button' | 'submit' | 'reset';
  type?: 'primary' | 'secondary' | 'negative' | 'disabled';
  size?: 'small' | 'large';
  className?: string;
  onClick?: (() => void) | ((e: React.SyntheticEvent) => void);
  disabled?: boolean;
};

export const Button = ({
  type = 'primary',
  size = 'large',
  children,
  className = '',
  htmlType,
  disabled,
  ...props
}: TButtonProps) => {
  const styleType = disabled || type === 'disabled' ? styles.disabled : styles[type];

  const extClassName = className || '';

  // button type attribute must be specified by a static string or a trivial ternary expressioneslint
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[size]} ${styleType} ${extClassName}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
