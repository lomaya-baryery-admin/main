import styles from './styles.module.css';
import { EnterIcon, UserIcon } from '../../ui/icons/';
import { Logo } from '../../ui/logo/logo';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Logo className={styles.logo} />
      </div>
      <div className={styles.links}>
        {/* Указать ссылки /profile/ и состояние */}
        <button type="button" className={`${styles.button} text_type_main-medium`}>
          <UserIcon type="link" />
          Аккаунт
        </button>
        {/* Указать ссылки /logout/ и состояние */}
        <button type="button" className={`${styles.button} text_type_main-medium`}>
          <EnterIcon type="link" />
          Выйти
        </button>
      </div>
    </header>
  );
}
