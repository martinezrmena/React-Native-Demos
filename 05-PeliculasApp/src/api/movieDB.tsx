import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '5b5db6b623b673b0d829defbd8fe2b57',
    language: 'es-ES'
  }
});

export default movieDB;