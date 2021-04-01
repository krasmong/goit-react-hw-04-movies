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

// https://www.youtube.com/watch?v=7vTKss0tbRM
// 47:52
