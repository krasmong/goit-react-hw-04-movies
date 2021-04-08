import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import s from './MoviesList.module.css';
// import s from './TrendingList.module.css'

const MoviesList = function ({ movies, location }) {
  return (
    <>
      {movies && (
        <ul className={s.MoviesList}>
          {movies.map(({ id, title, name, release_date }) => (
            <li key={id} className={s.item}>
              <NavLink
                to={{ pathname: `/movies/${id}`, state: { from: location } }}>
                {title ? title : name}
              </NavLink>
              {/* <span> release at {release_date} </span> */}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default withRouter(MoviesList);
