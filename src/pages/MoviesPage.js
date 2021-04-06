import { Component } from 'react';
import queryString from 'query-string';

import Form from '../components/Form/Form';
import * as getFetch from '../servises/tmdb-api';

class MoviesPage extends Component {
  state = {
    movies: null,
  };

  componentDidMount() {
    const { search } = this.props.location;
    if (search) {
      const parsed = queryString.parse(search);
      const response = getFetch.fetchMovieOnSubmit(parsed.query);
      console.log(response);
      response.then(r => this.setState({ movies: r.data.results }));
    }
  }

  handleSearch = query => {
    const { history, match } = this.props;
    history.push(`${match.url}?query=${query}`);
    const response = getFetch.fetchMovieOnSubmit(query);
    response.then(r => this.setState({ movies: r.data.results }));
  };

  render() {
    return (
      <>
        <h2> MoviesPage </h2>
        <Form onSubmit={this.hendleSerch} />
      </>
    );
  }
}

export default MoviesPage;
