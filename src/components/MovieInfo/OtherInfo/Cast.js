import React, { Component } from 'react';
import * as getFetch from '../../../servises/tmdb-api';
import pathLink from '../../../path';
import defaultImg from '../../../default.jpg';

class Cast extends Component {
  static defaultProps = {
    defaultImg: defaultImg,
  };
  state = {
    info: null,
  };

  async componentDidMount() {
    const { movieId } = this.props;

    const response = await getFetch.fetchMovieCastInfo(movieId);
    this.setState({ info: response.data });
  }

  render() {
    const { info } = this.state;

    if (info === null) {
      return <></>;
    }

    return (
      <>
        {info.cast.length > 0 ? (
          <ul>
            {info.cast.map(elem => (
              <li key={elem.id}>
                {elem.profile_path ? (
                  <img
                    src={`${pathLink.imageProfile}${elem.profile_path}`}
                    alt={elem.original_name}
                    width="45"
                  />
                ) : (
                  <img src={this.props.defaultImg} alt="Not found" width="45" />
                )}
                {elem.original_name}
                <p>Character: {elem.character}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No info</p>
        )}
      </>
    );
  }
}

export default Cast;
