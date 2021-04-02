import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './Navigation.module.css';
import { v4 as genId } from 'uuid';

const Navigation = ({ links }) => {
  return (
    <nav>
      <ul className={s.navList}>
        {links.map(el => {
          const { link, name } = el.props;
          return (
            <li key={genId()}>
              <NavLink to={link}>{name}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>

    // <nav>
    //   <ul>
    //     <li>
    //       <NavLink to="/">Home</NavLink>
    //     </li>
    //     <li>
    //       <NavLink to="/movies">Movies</NavLink>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Navigation;

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
