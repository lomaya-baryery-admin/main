import React, { FC } from 'react';
import styles from './button.module.css';

type TButtonProps = React.PropsWithChildren<Omit<React.HTMLProps<HTMLButtonElement>, 'size'>> & {
  htmlType: 'button' | 'submit' | 'reset';
  type?: 'primary' | 'secondary' | 'negative';
  size?: 'small' | 'large';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
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
  const styleType = disabled ? styles.disabled : styles[type];

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
