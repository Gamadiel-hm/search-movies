// import MoviesResult from './mocks/moviesResults.json';
import './app.css';
import Form from './components/Form';
import { useRef } from 'react';
import useMovies from './hooks/useFetch';

export default function App() {
  const refSearch = useRef('');
  const { getMovies, movies } = useMovies();

  const handleSubmit = (e) => {
    e.preventDefault();

    const search = new FormData(e.target);
    refSearch.current = search.get('search');

    getMovies(refSearch.current);
  };

  return (
    <>
      <header>
        <h1>App pelis</h1>
        <Form handleSubmit={handleSubmit} />
      </header>

      <main className='movies'>
        <ul className="data">
          {
            movies.Response !== 'False' && movies.Search.map(movi => (
              <li key={movi.imdbID}>
                <h3>{movi.Title}</h3>
                <p>{movi.Year}</p>
                <img src={movi.Poster} alt={movi.Title} />
              </li>
            ))
          }
          {movies.Response === 'False' &&
            <section>
              <h3>Que pelicula buscaremos hoy?</h3>
            </section>}
        </ul>
      </main>
    </>
  );
};
