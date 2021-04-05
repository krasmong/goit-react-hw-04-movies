import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

// import s from './TrendingList.module.css'

const TrendingList = function ({ movies, location }) {
  return (
    <>
      {movies && (
        <ul>
          {movies.map(({ id, title, name, release_date }) => (
            <li key={id}>
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

export default withRouter(TrendingList);
