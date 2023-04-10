export default function fechingMovies(uri) {
  return fetch(uri).then((response) => response.json());
}
