import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: '91aea6be0a2d3e1853dbbebc31e6363d' };

async function fetchMoviesCommon(url = '', config = {}) {
  // console.dir(axios);
  try {
    const response = await axios(url, config);
    // console.log(response.data.results);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export function fetchMoviesTrending() {
  return fetchMoviesCommon('trending/movie/week');
}

export function fetchMovieOnSubmit(query) {
  return fetchMoviesCommon(`search/movie?query=${query}`);
}

export function fetchMovieById(movieId) {
  return fetchMoviesCommon(`movie/${movieId}`);
}

export function fetchMovieCastInfo(movieId) {
  return fetchMoviesCommon(`movie/${movieId}/credits`);
}

export function fetchMovieReviewsInfo(movieId) {
  return fetchMoviesCommon(`movie/${movieId}/reviews`);
}

// const fetchSearchMovies = ({ searchQuery = '' }) => {
//   return axios
//     .get(`${baseURL}/search/movie?query=${searchQuery}&api_key=${apiKey}`)
//     .then(({ data }) => data)
//     .catch(error => error);
// };
