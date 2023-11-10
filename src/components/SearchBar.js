function SearchBar( { onSubmit }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit('cars');
  }
  const handleClick = () => {
    onSubmit('cars');
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input />
      </form>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default SearchBar;