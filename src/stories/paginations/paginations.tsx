<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import React from 'react';
>>>>>>> 193e3a56f81db45a94d62601b28c0129d0064343
import { PaginationsButton } from './paginations-button/paginations-button';
import styles from './paginations.module.css';

interface IPaginationsProps {
  counterPages: number;
  currentPage: number;
  setCurrentPage: any;
}

export const Paginations = ({ counterPages, currentPage, setCurrentPage }: IPaginationsProps) => {
  const arrPages = Array.from({ length: counterPages }, (v, i) => i + 1);

<<<<<<< HEAD
  const [arrForButtonsPanel, setArrForButtonsPanel] = useState<Array<number | "...">>([])

  useEffect (() => {
    let tempNumberOfPages: Array<number | "..."> = [...arrPages]
   
    if (currentPage >= 1 && currentPage <= 3) {
      tempNumberOfPages = [1, 2, 3, 4, "...", counterPages]
    }

    else if (currentPage === 4 ) {
      const sliced = arrPages.slice(0, 5  )
      tempNumberOfPages = [...sliced, "...", counterPages]
    }

    else if (currentPage > 4 && currentPage < counterPages - 2 ) {
      const sliced1 = arrPages.slice(currentPage - 2, currentPage )
      const sliced2 = arrPages.slice(currentPage, currentPage + 1 )
      tempNumberOfPages = [1, "...", ...sliced1, ...sliced2, "...", counterPages]
    }

    else if (currentPage > counterPages - 3 ) {
      const sliced = arrPages.slice(counterPages - 4)
      tempNumberOfPages = [1, "...", ...sliced]
    }


   
    setArrForButtonsPanel(tempNumberOfPages)
  }, [currentPage])


=======
>>>>>>> 193e3a56f81db45a94d62601b28c0129d0064343
  return (
    <div className={styles.content}>
      {currentPage > 1 ? (
        <>
<<<<<<< HEAD
          <PaginationsButton buttonName="<<" onClick={() => setCurrentPage(1)} buttonActive="inactive"/>
          <PaginationsButton buttonName="<" onClick={() => setCurrentPage(currentPage - 1)} buttonActive="inactive"/>
=======
          <PaginationsButton
            buttonName="<<"
            onClick={() => setCurrentPage(1)}
            buttonActive="inactive"
          />
          <PaginationsButton
            buttonName="<"
            onClick={() => setCurrentPage(currentPage - 1)}
            buttonActive="inactive"
          />
>>>>>>> 193e3a56f81db45a94d62601b28c0129d0064343
        </>
      ) : (
        <>
          <PaginationsButton buttonName="<" buttonActive="disabled" textActive="inactive" />
          <PaginationsButton buttonName="<<" buttonActive="disabled" textActive="inactive" />
        </>
      )}

<<<<<<< HEAD
      {arrForButtonsPanel.map((page, index) =>
        {if (page === '...') {
          return <PaginationsButton key={index} buttonName={page} buttonActive="disabled" textActive="inactive" />
        } else if (page === currentPage) {
          return <PaginationsButton key={index} buttonName={page} />
         } else {
          return <PaginationsButton key={index} buttonName={page} onClick={() => setCurrentPage(page)} buttonActive="inactive"/>
        }}
=======
      {arrPages.map((page) =>
        page === currentPage ? (
          <PaginationsButton key={page} buttonName={page} />
        ) : (
          <PaginationsButton
            key={page}
            buttonName={page}
            onClick={() => setCurrentPage(page)}
            buttonActive="inactive"
          />
        )
>>>>>>> 193e3a56f81db45a94d62601b28c0129d0064343
      )}

      {currentPage < counterPages ? (
        <>
<<<<<<< HEAD
          <PaginationsButton buttonName=">" onClick={() => setCurrentPage(currentPage + 1)} buttonActive="inactive"/>
          <PaginationsButton buttonName=">>" onClick={() => setCurrentPage(counterPages)} buttonActive="inactive"/>
=======
          <PaginationsButton
            buttonName=">"
            onClick={() => setCurrentPage(currentPage + 1)}
            buttonActive="inactive"
          />
          <PaginationsButton
            buttonName=">>"
            onClick={() => setCurrentPage(counterPages)}
            buttonActive="inactive"
          />
>>>>>>> 193e3a56f81db45a94d62601b28c0129d0064343
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
