import { render } from '@testing-library/react';
import { Component } from 'react';
import * as getFetch from '../../../servises/tmdb-api';

class Reviews extends Component {
  state = {
    info: null,
  };

  async componentDidMount() {
    const { movieId } = this.props;
    const response = await getFetch.fetchMovieReviewsInfo(movieId);
    this.setState({ info: response.data.results });
  }

  render() {
    const { info } = this.state;

    if (info === null) {
      return <></>;
    }
    return (
      <>
        {info.length > 0 ? (
          <ul>
            {info.map(({ id, author, content }) => (
              <li key={id}>
                <h4>{author}</h4>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p> We don't have any reviews for this movie </p>
        )}
      </>
    );
  }
}

export default Reviews;
