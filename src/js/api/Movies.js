import {Config} from '../Config'
import {baseUrl} from '../Constants'

function handleErrors(response) {
  if (!response.ok) {
    throw Error();
  }
  return response;
}

function getJson(url) {
  return fetch(url)
  .then(handleErrors)
  .then(response => response.json());
}

export function getPopularMovies() {
  return getJson(`${baseUrl}/movie/popular?page=1&api_key=${Config.APIKey}`);
}

export function getMovieDetails(movieId) {
  return getJson(`${baseUrl}/movie/${movieId}?api_key=${Config.APIKey}`);
}