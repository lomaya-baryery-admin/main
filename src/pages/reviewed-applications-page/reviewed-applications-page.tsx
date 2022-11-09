import React from 'react';
import styles from './reviewed-applications-page.module.css';

import { Alert } from '../../ui/alert/alert';
import { Button } from '../../ui/button/button';
import { SearchInput } from '../../ui/search-Input/search-input';

export function ReviewedApplicationsPage() {
  return (
    <article className={styles.main}>
      <section className={styles.header_content}>
        <h1 className="text_type_main-extra-large">Заявки на участие</h1>
        <SearchInput value='' onChange={() => {}} onClear={() => {}} />
      </section>
      <section className={styles.main_content}>
        <Alert title="Завершённые заявки на участие отсутствуют" />
      </section>
      <section className={styles.footer_content}>Footer</section>
    </article>
  );
}
