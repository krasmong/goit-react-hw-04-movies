import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import s from './MovieOtherInfo.module.css';

class MovieOtherInfo extends Component {
  state = {};

  render() {
    const { match, location } = this.props;
    return (
      <div className={s.movieOtherInfo}>
        <h3 className={s.title}> Additional information</h3>
        <ul className={s.list}>
          <li className={s.item}>
            <Link
              to={{
                pathname: `${match.url}/cast`,
                state: { from: location },
              }}>
              Cast
            </Link>
          </li>
          <li className={s.item}>
            <Link
              to={{
                pathname: `${match.url}/reviews`,
                state: { from: location },
              }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Route
          path={`${match.url}/cast`}
          render={props => <Cast {...props} movieId={match.params.movieId} />}
        />
        <Route
          path={`${match.url}/reviews`}
          render={props => (
            <Reviews {...props} movieId={match.params.movieId} />
          )}
        />
      </div>
    );
  }
}

export default withRouter(MovieOtherInfo);
