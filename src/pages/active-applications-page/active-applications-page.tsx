import React from 'react';
import styles from './active-applications-page.module.css';

import { Alert } from '../../stories/alert/alert';


export function ActiveApplicationsPage() {
    return (
        <main className={styles.main}>
            <section className={styles.header_content}>
                <h1 className={styles.header}>Заявки на участие</h1>
            </section>
            <section className={styles.main_content}>
                <Alert title='Активные заявки на участие отсутствуют'/>
            </section>
            <section className={styles.footer_content}></section>
        </main>
    )
};