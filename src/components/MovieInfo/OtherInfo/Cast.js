import React, { Component } from 'react';
import * as getFetch from '../../../servises/tmdb-api';
import pathLink from '../../../path';
import s from '../OtherInfo/Cast.module.css';
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
    if (response) {
      this.setState({ info: response.data });
    }
    console.log(response);
    console.log('cast');
  }

  render() {
    const { info } = this.state;

    if (info === null) {
      return <></>;
    }

    return (
      <>
        {info.cast.length > 0 ? (
          <ul className={s.castList}>
            {info.cast.map(elem => (
              <li key={elem.id} className={s.item}>
                {elem.profile_path ? (
                  <img
                    className={s.itemImage}
                    src={`${pathLink.imageProfile}${elem.profile_path}`}
                    alt={elem.original_name}
                    width="92"
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
