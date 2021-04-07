import { Component } from 'react';
import queryString from 'query-string';

import * as getFetch from '../servises/tmdb-api';

import { Form } from '../components/Form';
import { MoviesList } from '../components/MoviesList';

class MoviesPage extends Component {
  state = {
    serchQuery: '',
    movies: [],
    error: null,
  };

  componentDidMount() {
    const { search, pathname } = this.props.location;
    if ((search, pathname)) {
      this.setState({
        serchQuery: queryString.parse(search).query,
      });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.serchQuery !== this.state.serchQuery) {
      this.fetchMovies();
    }
  }

  changeQuery = query => {
    console.log(query);

    const { history, location } = this.props;

    this.setState({
      serchQuery: query,
      movies: [],
      error: null,
    });

    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  async fetchMovies() {
    const { serchQuery, error } = this.state;
    const options = { serchQuery, error };

    if (!serchQuery) {
      return;
    }
    const response = await getFetch
      .fetchMovieOnSubmit(options)
      .then(({ results }) => {
        console.log(results);

        if (results.length === 0) {
          throw new Error('No matches were found! Try again!');
        }

        this.setState({
          movies: [...results],
        });
      })
      .catch(error => this.setState({ error }));
  }

  render() {
    const { error } = this.state;
    return (
      <>
        <Form onSubmit={this.changeQuery} />
        <MoviesList movies={this.state.movies} />
        {error && <h3>{error.message}</h3>}
      </>
    );
  }
}

// class MoviesPage extends Component {
//   state = {
//     movies: null,
//   };

//   componentDidMount() {
//     const { search } = this.props.location;
//     if (search) {
//       const parsed = queryString.parse(search);
//       const response = getFetch.fetchMovieOnSubmit(parsed.query);
//       console.log(response);
//       response.then(r => this.setState({ movies: r.data.results }));
//     }
//   }

//   handleSearch = query => {
//     const { history, match } = this.props;
//     history.push(`${match.url}?query=${query}`);
//     const response = getFetch.fetchMovieOnSubmit(query);
//     response.then(r => this.setState({ movies: r.data.results }));
//   };

//   render() {
//     return (
//       <>
//         <h2> MoviesPage </h2>
//         <Form onSubmit={this.handleSearch} />
//         <MoviesList movies={this.state.movies} />
//       </>
//     );
//   }
// }

export default MoviesPage;
