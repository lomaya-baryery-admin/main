import styles from './styles.module.css';
import cn from 'classnames';
import React, { PropsWithChildren } from 'react';

interface IContentHeadingProps extends PropsWithChildren {
  title: string;
}

export const ContentHeading: React.FC<IContentHeadingProps> = ({ title, children }) => {
  return (
    <div className={styles.contentHeading}>
      <h1
        className={cn(
          styles.contentHeading__title,
          'text',
          'text_type_main-extra-large',
          'p-0',
          'm-0'
        )}
      >
        {title}
      </h1>
      <div className={styles.contentHeadig__controls}>{children}</div>
    </div>
  );
};
