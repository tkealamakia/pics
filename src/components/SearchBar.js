function SearchBar( { onSubmit }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit('cars');
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input />
      </form>
      <button onClick={handleFormSubmit}>Click me</button>
    </div>
  );
}

export default SearchBar;