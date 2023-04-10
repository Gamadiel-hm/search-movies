export default function inputValid(inputValue) {
  let message = '';
  let error;
  if (inputValue === '') {
    message = 'no se puedde buscar una pelicula vacia';
    error = true;
    return { message, error };
  }
  if (inputValue.match(/^\d+$/)) {
    message = 'No se puede buscar una película con un número';
    error = true;
    return { message, error };
  }
  if (inputValue.length < 3) {
    message = 'Necesita por lo menos cuatro caradteres';
    error = true;
  }

  return { message, error };
}
