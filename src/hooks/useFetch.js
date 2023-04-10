import { useCallback, useRef, useState } from 'react';
import fechingMovies from '../services/fechingMovies';
import inputValid from '../helpers/inputValid.helper';

const key = '34471800';
const api = `http://www.omdbapi.com/?apikey=${key}&s=`;
const initialMovies = { Response: 'False' };

export default function useMovies() {
  const [movies, setMovies] = useState(initialMovies);
  const previusSeatch = useRef('');

  const getMovies = useCallback((search) => {
    const uri = api.concat('', search);
    if (previusSeatch.current === search) return;
    const e = inputValid(search);
    if (e.error) return;
    try {
      fechingMovies(uri).then((data) => setMovies(data));
    } catch (error) {
      console.log(error);
      setMovies(initialMovies);
    }
    previusSeatch.current = search;
  }, []);

  return { getMovies, movies };
}
