import { Component } from 'react';
import * as getFetch from '../servises/tmdb-api';
import defaultImg from '../../src/default.jpg';
import routes from '../routes';

import MovieMainInfo from '../components/MovieInfo/MainInfo/MovieMainInfo';
// import MovieOtherInfo from '../components/MovieInfo/OtherInfo/MovieOtherInfo';

class MovieDetalisPage extends Component {
  state = {
    movie: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await getFetch.fetchMovieById(movieId);
    if (response) {
      this.setState({ movie: response.data });
    }
    console.log(response);
  }

  handleGoback = () => {
    const { location, history } = this.props;

    history.push(
      location?.state?.from || routes.filter(route => route.path === '/'),
    );
  };

  // handleGoback = () => {
  //   const { location, history } = this.props;
  //   if (location.state && location.state.from) {
  //     return history.push(location.state.from);
  //   }
  //   history.push(routes.home);
  // };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleGoback}>
          &#8592; Go back
        </button>
        {this.state.movie !== null && (
          <>
            <MovieMainInfo movie={this.state.movie} defaultImg={defaultImg} />
            {/* <MovieOtherInfo /> */}
          </>
        )}
      </div>
    );
  }
}

export default MovieDetalisPage;
