import { useState } from 'react';

function SearchBar( { onSubmit }) {
  const[term, setTerm] = useState('');
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit('cars');
  }

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
      <button onClick={handleFormSubmit}>Click me</button>
    </div>
  );
}

export default SearchBar;