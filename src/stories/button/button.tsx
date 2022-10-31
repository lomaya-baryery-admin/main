import React, { FC } from 'react';
import { Tooltip } from '../tooltip/tooltip';
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
  className,
  htmlType,
  disabled,
  ...props
}: TButtonProps) => {
  const styleType = disabled ? styles.disabled : styles[type];

  const extClassName = className ? className : '';

  return (
    <button
      type={htmlType}
      className={`${styles.button} ${styles[size]} ${styleType} ${extClassName}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
