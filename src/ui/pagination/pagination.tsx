import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons';
import styles from './pagination.module.css';

interface Props {
  currentPageNum: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({ currentPageNum, totalPage, onPageChange }) => {
  const handleButtonClick = (eventType: 'prev' | 'next') => {
    if (eventType === 'prev') {
      onPageChange(currentPageNum - 1);
    } else {
      onPageChange(currentPageNum + 1);
    }
  };

  return (
    <div className={styles.paginationWrapper}>
      <div className={styles.pagination}>
        <span className={styles.text}>
          Показывается {currentPageNum} из {totalPage}
        </span>
        <div className={styles.buttonsBlock}>
          <button className={styles.button} onClick={() => handleButtonClick('prev')}>
            <ChevronLeftIcon type="interface-secondary" />
          </button>
          <div className={`${styles.text} ${styles.pageInfo}`}>{currentPageNum}</div>
          <button className={styles.button} onClick={() => handleButtonClick('next')}>
            <ChevronRightIcon type="interface-secondary" />
          </button>
        </div>
      </div>
    </div>
  );
};
