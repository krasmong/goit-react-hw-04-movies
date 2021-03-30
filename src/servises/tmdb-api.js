import axios from 'axios';

const KEY = '91aea6be0a2d3e1853dbbebc31e6363d';
const BASE_URL = `https://api.themoviedb.org/3`;

function getFetch() {
  let url = `${BASE_URL}/trending/movie/week?api_key=${KEY}`;
  let options = {
    method: 'GET',
    headers: {
      Autorization: KEY,
    },
  };
  console.log(axios);
}

// https://www.youtube.com/watch?v=7vTKss0tbRM
// 47:52
