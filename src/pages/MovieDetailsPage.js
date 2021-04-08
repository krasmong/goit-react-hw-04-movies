import { Component } from 'react';
import * as getFetch from '../servises/tmdb-api';
import defaultImg from '../../src/default.jpg';
import routes from '../routes';

import MovieOtherInfo from '../components/MovieInfo/OtherInfo/MovieOtherInfo';
import MovieMainInfo from '../components/MovieInfo/MainInfo/MovieMainInfo';

class MovieDetalsPage extends Component {
  state = {
    movie: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.params;
    const response = await getFetch.fetchMovieById(movieId);
    if (response) {
      this.setState({ movie: response.data });
    }
  }

  handleGoback = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
  };

  render() {
    return (
      <div>
        <button
          className={s.MovieDetalsPage}
          type="button"
          onClick={this.handleGobak}>
          &#8592; Go back
        </button>
        {this.state.movie !== null && (
          <>
            <MovieMainInfo movie={this.state.movie} defaultImg={defaultImg} />
            <MovieOtherInfo />
          </>
        )}
      </div>
    );
  }
}

export default MovieDetalsPage;
