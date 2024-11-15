import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies or TV shows"
        className="p-2 border-2 border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
