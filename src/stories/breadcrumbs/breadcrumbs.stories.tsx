import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FC } from 'react';
import styles from '../../ui/breadcrumbs/breadcrumbs.module.css';

type TBreadcrumb = {
  path: string;
  url: string;
  title: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Crumb: FC<TBreadcrumb> = ({ url, title, path }) => (
  <>
    {title === 'Название задания' ? (
      <span className={styles.item_last}>{title}</span>
    ) : (
      <span className={styles.item}>
        <>
          <a href={url}>{title}</a>
          {` / `}
        </>
      </span>
    )}
  </>
);

const Breadcrumbs = () => {
  const state = [
    { path: '/', url: '/', title: 'Отчёты участников' },
    { path: '/', url: '/', title: 'Название задания' },
  ];

  return (
    <>
      <nav>
        {state.map((crumb) => (
          <Crumb {...crumb} key={crumb.url} />
        ))}
      </nav>
      <h4 style={{ fontFamily: 'sans-serif', fontWeight: 400 }}>
        <br />
        <br />
        <br />
        Чтобы добавить на страницу цепочку навигации, надо совершить два действия:
        <br />
        <br />
        1. На странице, которая должна быть в цепочке навигации, добавить в history.location.state
        объект
        <br />
        с параметрами для Breadcrumbs. Объект должен обязательно содержать path, url, title.
        <br />
        2. Отрендерить Breadcrumbs — добавить вывод компонента на необходимых страницах.
      </h4>
    </>
  );
};

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = () => <Breadcrumbs />;

export const Default = Template.bind({});

Default.parameters = {
  docs: {
    source: {
      code: `
<Breadcrumbs />
      `,
      language: 'tsx',
      type: 'auto',
    },
  },
};
