import useInputvalid from '../hooks/useInpitVali';

export default function Form({ handleSubmit }) {
  const { search, setSearch, error } = useInputvalid();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit} name='form'>
        <input type="text" value={search} onChange={handleChange} name="search" placeholder='Search movies' />
        <button type="submit">Search</button>
      </form>
      {error && <label>{error}</label>}
    </>
  );
};
