import React from 'react';
import { Navigation } from '../Navigation';
import s from './AppBar.module.css';
import links from '../../db/nav.json';

const AppBar = () => (
  <header className={s.header}>
    <div className="container">
      <img
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
        className={s.logo}
        alt="logo"
      />

      <Navigation links={links} />
    </div>
  </header>
);

export default AppBar;
