import { useState } from "react";
import PropTypes from "prop-types";

// Define the SearchBar component, which accepts an onSearch function as a prop
const SearchBar = ({ onSearch }) => {
  // useState hook to manage the search query input by the user
  const [query, setQuery] = useState("");

  // Function to handle the form submission
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)
    if (query.trim()) {
      // If the query is not empty or whitespace, call the onSearch function with the query
      onSearch(query);
    }
  };

  return (
    // Wrapper div for styling the search bar
    <div className="search-bar flex justify-center items-center mt-7 mb-3">
      <form onSubmit={handleSearch} className="flex w-full max-w-md">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies or TV shows"
          className="flex-1 p-3 text-base border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 transition duration-200"
        >
          Search
        </button>
      </form>
    </div>
  );
};

// Define prop types for validation
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // Validates that onSearch is a required function
};

export default SearchBar;
