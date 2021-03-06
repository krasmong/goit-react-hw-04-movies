import React, { Component, Suspense } from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
import s from './MovieOtherInfo.module.css';

class MovieOtherInfo extends Component {
  state = {};

  render() {
    const { match, location } = this.props;
    console.log(match.url);

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
          // component={Cast}
          render={props => <Cast {...props} movieId={match.params.movieId} />}
        />
        <Route
          path={`${match.url}/reviews`}
          render={props => (
            <Reviews {...props} movieId={match.params.movieId} />
          )}
        />
        {/* <Suspense fallback={<h2>Loading...</h2>}>
          <Switch></Switch>
        </Suspense> */}
      </div>
    );
  }
}

export default withRouter(MovieOtherInfo);
