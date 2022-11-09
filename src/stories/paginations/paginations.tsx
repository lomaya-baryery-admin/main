import React, { useEffect, useState } from 'react';
import { PaginationsButton } from './paginations-button/paginations-button';

import styles from './paginations.module.css';

interface IPaginationsProps {
  counterPages: number;
  currentPage: number;
  setCurrentPage: any;
}

export const Paginations = ({ counterPages, currentPage, setCurrentPage }: IPaginationsProps) => {
  const arrPages = Array.from({ length: counterPages }, (v, i) => i + 1);

  const dots = '...';

  const makeId = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i += 1) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const [arrForButtonsPanel, setArrForButtonsPanel] = useState<Array<number | '...'>>([]);

  useEffect(() => {
    let tempNumberOfPages: Array<number | '...'> = [...arrPages];

    if (counterPages <= 5) {
      tempNumberOfPages = arrPages
    } else if (currentPage >= 1 && currentPage <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, dots, counterPages];
    } else if (currentPage === 4) {
      const sliced = arrPages.slice(0, 5);
      tempNumberOfPages = [...sliced, dots, counterPages];
    } else if (currentPage > 4 && currentPage < counterPages - 2) {
      const sliced1 = arrPages.slice(currentPage - 2, currentPage);
      const sliced2 = arrPages.slice(currentPage, currentPage + 1);
      tempNumberOfPages = [1, dots, ...sliced1, ...sliced2, dots, counterPages];
    } else if (currentPage > counterPages - 3) {
      const sliced = arrPages.slice(counterPages - 4);
      tempNumberOfPages = [1, dots, ...sliced];
    }

    setArrForButtonsPanel(tempNumberOfPages);
  }, [currentPage, counterPages]);

  return (
    <div className={styles.content}>
      {currentPage > 1 ? (
        <>
          <PaginationsButton
            buttonName="<<"
            onClick={() => setCurrentPage(1)}
            buttonActive="inactive"
          />
          <PaginationsButton
            buttonName="<"
            onClick={() => setCurrentPage((prev: number) => (prev === 1 ? prev : prev - 1))}
            buttonActive="inactive"
          />
        </>
      ) : (
        <>
          <PaginationsButton buttonName="<" buttonActive="disabled" textActive="inactive" />
          <PaginationsButton buttonName="<<" buttonActive="disabled" textActive="inactive" />
        </>
      )}



      {arrForButtonsPanel.map((page) =>
        page === dots ? (
          <PaginationsButton
            key={makeId(15)}
            buttonName={page}
            buttonActive="disabled"
            textActive="inactive"
          />
        ) : (
          <PaginationsButton
            key={makeId(15)}
            buttonName={page}
            buttonActive={page !== currentPage ? 'inactive' : 'active'}
            textActive={page !== currentPage ? 'inactive' : 'active'}
          />
        )
      )}

      {currentPage < counterPages ? (
        <>
          <PaginationsButton
            buttonName=">"
            onClick={() =>
              setCurrentPage((prev: number) => (prev === counterPages ? prev : prev + 1))
            }
            buttonActive="inactive"
          />
          <PaginationsButton
            buttonName=">>"
            onClick={() => setCurrentPage(counterPages)}
            buttonActive="inactive"
          />
        </>
      ) : (
        <>
          <PaginationsButton buttonName=">" buttonActive="disabled" textActive="inactive" />
          <PaginationsButton buttonName=">>" buttonActive="disabled" textActive="inactive" />
        </>
      )}
    </div>
  );
};
