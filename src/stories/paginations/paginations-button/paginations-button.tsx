import React from 'react';
import styles from './paginations-button.module.css';

interface IPaginationsButtonProps {
  buttonName: number | string;
  buttonActive?: 'active' | 'inactive' | 'disabled';
  textActive?: 'active' | 'inactive';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const PaginationsButton = ({
  buttonName,
  onClick,
  buttonActive = 'active',
  textActive = 'active',
}: IPaginationsButtonProps) => {
  const buttonActiveClass =
    buttonActive === 'active'
      ? `${styles.button_active}`
      : buttonActive === 'inactive'
      ? `${styles.button_inactive}`
      : `${styles.button_disabled}`;

  const textActiveClass =
    textActive === 'active' ? `${styles.text_active}` : `${styles.text_inactive}`;

  const currentClasses = [`${styles.button}`, `${buttonActiveClass}`, `${textActiveClass}`].join(
    ' '
  );

  return (
    <button className={currentClasses} onClick={onClick}>
      {buttonName}
    </button>
  );
};
