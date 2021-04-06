import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types';

import * as getFetch from '../../servises/tmdb-api';

class Reviews extends Component {
  state = {
    review: null,
  };

  componentDidMount() {

    const { monieId } = this.state;
    const response = await getFetch.MovieReviews(monieId)
    this.setState({ review: response.data.results });
  
  }
  
  render() {
    const { review } = this.state;
  }
  
  if(review === null) {
    return <></>;
  }
return (
  <>
    
    {review.length > 0 ? (
      <ul>
      {review.map()}
      </ul>

    )}
    </>
  )
}
