import React, { MouseEventHandler } from 'react';
import { PaginationsButton } from './paginations-button/paginations-button';
import styles from './paginations.module.css';

interface IPaginationsProps {
  counterPages: number;
  currentPage: number;
  onClick: MouseEventHandler<HTMLButtonElement>;
  setCurrentPage: () => number
}

export const Paginations = ({ counterPages, currentPage, setCurrentPage, onClick }: IPaginationsProps) => {
  const arrPages = Array.from({ length: counterPages }, (v, i) => i + 1);

  return (
    <div className={styles.content}>
      {currentPage > 1 ? (
        <>
          <PaginationsButton buttonName={'<<'} onClick={setCurrentPage(1)} buttonActive="inactive" />
          <PaginationsButton buttonName={'<'} onClick={setCurrentPage(currentPage-1)} buttonActive="inactive" />
        </>
      ) : (
        <>
          <PaginationsButton buttonName={'<'} onClick={onClick} buttonActive="disabled" textActive="inactive"/>
          <PaginationsButton buttonName={'<<'} onClick={onClick} buttonActive="disabled" textActive="inactive"/>
        </>
      )}

      {arrPages.map((page) =>
        page === currentPage ? (
          <PaginationsButton buttonName={page} onClick={onClick} />
        ) : (
          <PaginationsButton buttonName={page} onClick={onClick} buttonActive="inactive" />
        )
      )}

      {currentPage < counterPages ? (
        <>
          <PaginationsButton buttonName={'>'} onClick={setCurrentPage(currentPage+1)} buttonActive="inactive" />
          <PaginationsButton buttonName={'>>'} onClick={setCurrentPage(counterPages)} buttonActive="inactive" />
        </>
      ) : (
        <>
          <PaginationsButton buttonName={'>'} onClick={onClick} buttonActive="disabled" textActive="inactive"/>
          <PaginationsButton buttonName={'>>'} onClick={onClick} buttonActive="disabled" textActive="inactive"/>
        </>
      )}

      
    </div>
  );
};
