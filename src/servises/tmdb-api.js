import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: '91aea6be0a2d3e1853dbbebc31e6363d' };

async function fetchMoviesCommon(url = '', config = {}) {
  try {
    const response = await axios(url, config);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export function fetchMoviesTrending() {
  return fetchMoviesCommon('trending/all/day');
}

// https://www.youtube.com/watch?v=7vTKss0tbRM
// 47:52
