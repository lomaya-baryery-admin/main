import React from 'react';
import { PaginationsButton } from './paginations-button/paginations-button';
import styles from './paginations.module.css';

interface IPaginationsProps {
  counterPages: number;
  currentPage: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Paginations = ({ counterPages, currentPage, onClick }: IPaginationsProps) => {
  return (
    <div className={styles.content}>
      
      {counterPages > 5 && currentPage > 1 ? (
        <PaginationsButton buttonName={'<'} onClick={onClick} buttonActive="inactive" />
      ) : (
        <PaginationsButton
          buttonName={'<'}
          onClick={onClick}
          buttonActive="disabled"
          textActive="inactive"
        />
      )}

      {/* нужно думать как реализовать */}
      <PaginationsButton buttonName={1} onClick={onClick} />;
      <PaginationsButton buttonName={2} onClick={onClick} buttonActive="inactive" />;
      <PaginationsButton buttonName={'...'} onClick={onClick} buttonActive="inactive" />;
      <PaginationsButton buttonName={9} onClick={onClick} buttonActive="inactive" />;
      <PaginationsButton buttonName={10} onClick={onClick} buttonActive="inactive" />;
      
      {counterPages > 5 && currentPage < counterPages ? (
        <PaginationsButton buttonName={'>'} onClick={onClick} buttonActive="inactive" />
      ) : (
        <PaginationsButton
          buttonName={'>'}
          onClick={onClick}
          buttonActive="disabled"
          textActive="inactive"
        />
      )}
      
      {counterPages > 5 && currentPage < counterPages ? (
        <PaginationsButton buttonName={'>>'} onClick={onClick} buttonActive="inactive" />
      ) : (
        <PaginationsButton
          buttonName={'>>'}
          onClick={onClick}
          buttonActive="disabled"
          textActive="inactive"
        />
      )}
    </div>
  );
};
