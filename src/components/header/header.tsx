import React from 'react';
import headerStyles from './header.module.css';
import logo from '../../img/logo.png';
import exit from '../../img/Enter.png';
import user from '../../img/User.png';
import '../../assets/styles/common.css';
import '../../assets/fonts/fonts.css';

export function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.logoContainer}>
        <img className={headerStyles.logo} src={logo} alt="Логотип" />
        <h1 className={`${headerStyles.title} text_type_secondary-large`}>ломая барьеры</h1>
      </div>
      <div className={headerStyles.links}>
        {/* Указать ссылки /profile/ */}
        <button className={`${headerStyles.button} text_type_main-medium`}>
          <img src={user} alt="Аккаунт" />
          Аккаунт
        </button>
        {/* Указать ссылки /logout/ */}
        <button className={`${headerStyles.button} text_type_main-medium`}>
          <img src={exit} alt="Выйти" />
          Выйти
        </button>
      </div>
    </header>
  );
}
