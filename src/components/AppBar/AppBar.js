import React from 'react';
import Navigation from '../Navigation/Navigation';
import s from './AppBar.module.css';

import links from '../../db/nav.json';

const AppBar = () => (
  <header className={s.header}>
    <div className="container">
      <a href="#" className={s.logo}>
        Header
      </a>
      <nav>
        <Navigation links={links} />
      </nav>
    </div>
  </header>
);

export default AppBar;
