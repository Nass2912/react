import './SearchBar.css';

function SearchBar({onSubmitterFn}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitterFn(event.target[0].value);
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>Enter Search Term and request the Unsplash API</label>
        <input type="text"/>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar; 