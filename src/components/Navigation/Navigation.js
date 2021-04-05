import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import s from './Navigation.module.css';

import { NavLink, withRouter } from 'react-router-dom';

const Navigation = ({ links, match }) => {
  // console.log(match);
  // console.log(match.url);

  return (
    <nav>
      <ul className={s.navList}>
        {links.map(el => {
          const { link, name } = el.props;
          return (
            <li key={uuid()}>
              <NavLink to={`${match.url}${link}`}>{name}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      props: PropTypes.shape({
        name: PropTypes.string,
        path: PropTypes.string,
      }),
    }),
  ),
};
