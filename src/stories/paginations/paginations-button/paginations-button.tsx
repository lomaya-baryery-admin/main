import React, { MouseEventHandler } from 'react';
import styles from './paginations-button.module.css';

interface IPaginationsButtonProps {
  buttonName: number | string;
  buttonActive?: 'active' | 'inactive' | 'disabled';
  textActive?: 'active' | 'inactive';
  onClick?: () => void;
}

export const PaginationsButton = ({
  buttonName,
  onClick,
  buttonActive = 'active',
  textActive = 'active',
}: IPaginationsButtonProps) => {
  let buttonActiveClass;

  if (buttonActive === 'active') {
    buttonActiveClass = styles.button_active;
  } else if (buttonActive === 'inactive') {
    buttonActiveClass = styles.button_inactive;
  } else {
    buttonActiveClass = styles.button_disabled;
  }

  const textActiveClass = textActive === 'active' ? styles.text_active : styles.text_inactive;

  const currentClasses = [styles.button, buttonActiveClass, textActiveClass].join(' ');

  return (
    <button type="button" className={currentClasses} onClick={onClick}>
      {buttonName}
    </button>
  );
};
