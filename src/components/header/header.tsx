import React from 'react';
import headerStyles from './header.module.css';
import '../../assets/styles/common.css';
import '../../assets/fonts/fonts.css';
import { EnterIcon } from '../../ui/icons/enter-icon';
import { Logo } from '../../ui/logo/logo';
import { UserIcon } from '../../ui/icons';

export function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logoContainer}>
        <Logo className={headerStyles.logo} />
      </div>
      <div className={headerStyles.links}>
        {/* Указать ссылки /profile/ и состояние */}
        <button type="button" className={`${headerStyles.button} text_type_main-medium`}>
          <UserIcon type="link" />
          Аккаунт
        </button>
        {/* Указать ссылки /logout/ и состояние */}
        <button type="button" className={`${headerStyles.button} text_type_main-medium`}>
          <EnterIcon type="link" />
          Выйти
        </button>
      </div>
    </header>
  );
}
