import React from 'react';
import cn from 'classnames';
import styles from './styles.module.css';

export type TButtonProps = React.PropsWithChildren<
  Omit<React.HTMLProps<HTMLButtonElement>, 'size'>
> & {
  htmlType: 'button' | 'submit' | 'reset';
  type?: 'primary' | 'secondary' | 'negative' | 'disabled';
  size?: 'small' | 'large';
  extClassName?: string;
  onClick?: (() => void) | ((e: React.SyntheticEvent) => void);
  disabled?: boolean;
};

export const Button = ({
  type = 'primary',
  size = 'large',
  children,
  extClassName,
  htmlType,
  disabled,
  ...props
}: TButtonProps) => {
  const styleType = disabled || type === 'disabled' ? styles.disabled : styles[type];

  return (
    <button
      type={htmlType}
      className={cn(styles.button, styles[size], styleType, extClassName)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
