import { useEffect, useRef, useState } from 'react';
import inputValid from '../helpers/inputValid.helper';

export default function useInputvalid() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);
  const firstInput = useRef(true);

  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = search === '';
      return;
    }
    const { message, error } = inputValid(search);
    if (error) {
      setError(message);
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
